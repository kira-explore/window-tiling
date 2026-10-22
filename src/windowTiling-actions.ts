
import { execFile } from "node:child_process";
import { CommandAction } from "@logitech/plugin-sdk";

type Layout =
	| "left"
	| "right"
	| "top"
	| "bottom"
	| "top_left"
	| "top_right"
	| "bottom_left"
	| "bottom_right"
	| "center";

type Shortcut =
	| { kind: "arrow"; keyCode: number }
	| { kind: "letter"; key: string };

const shortcuts: Record<Layout, Shortcut> = {
	left: { kind: "arrow", keyCode: 123 },
	right: { kind: "arrow", keyCode: 124 },
	top: { kind: "arrow", keyCode: 126 },
	bottom: { kind: "arrow", keyCode: 125 },
	top_left: { kind: "letter", key: "u" },
	top_right: { kind: "letter", key: "i" },
	bottom_left: { kind: "letter", key: "j" },
	bottom_right: { kind: "letter", key: "k" },
	center: { kind: "letter", key: "c" },
};

const labels: Record<Layout, string> = {
	left: "Tile Left",
	right: "Tile Right",
	top: "Tile Top",
	bottom: "Tile Bottom",
	top_left: "Tile Top Left",
	top_right: "Tile Top Right",
	bottom_left: "Tile Bottom Left",
	bottom_right: "Tile Bottom Right",
	center: "Tile Center",
};

const runShortcut = (shortcut: Shortcut): Promise<void> => {
	const script =
		shortcut.kind === "arrow"
			? `tell application "System Events" to key code ${shortcut.keyCode} using { control down, option down }`
			: `tell application "System Events" to keystroke "${shortcut.key}" using { control down, option down }`;

	return new Promise((resolve, reject) => {
		execFile("/usr/bin/osascript", ["-e", script], (error) => {
			if (error) reject(error);
			else resolve();
		});
	});
};

class WindowTilingAction extends CommandAction {
	readonly name: string;
	readonly displayName: string;
	readonly description: string;
	readonly groupName = "Window Position";

	constructor(private readonly layout: Layout) {
		super();
		this.name = `window_tiling_${layout}`;
		this.displayName = labels[layout];
		this.description = `Tile the active window: ${labels[layout]}`;
	}

	async onKeyDown(): Promise<void> {
		try {
			await runShortcut(shortcuts[this.layout]);
		} catch (error) {
			console.error(
				`[Window Tiling] ${this.displayName} failed.`,
				error,
			);
		}
	}
}

const cornerLayouts: Layout[] = [
	"top_left",
	"top_right",
	"bottom_right",
	"bottom_left",
];

class CycleCornersAction extends CommandAction {
	readonly name = "window_tiling_cycle_corners";
	readonly displayName = "Cycle Corners";
	readonly description = "Cycle the active window through four corners";
	readonly groupName = "Window Position";

	private index = 0;
	private running = false;

	async onKeyDown(): Promise<void> {
		if (this.running) return;

		this.running = true;

		try {
			await runShortcut(shortcuts[cornerLayouts[this.index]]);
			this.index = (this.index + 1) % cornerLayouts.length;
		} catch (error) {
			console.error("[Window Tiling] Cycle Corners failed.", error);
		} finally {
			this.running = false;
		}
	}
}

const windowTilingActions = [
	...(Object.keys(labels) as Layout[]).map(
		(layout) => new WindowTilingAction(layout),
	),
	new CycleCornersAction(),
];

export default windowTilingActions;
