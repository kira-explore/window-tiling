import { CommandAction } from "@logitech/plugin-sdk";
import { type MacShortcut, sendMacShortcut } from "../utils/macos-shortcuts";

type WindowPositionConfig = {
	id: string;
	label: string;
	shortcut: MacShortcut;
};

const modifiers = ["control", "option"] as const;

const windowPositionConfig: WindowPositionConfig[] = [
	{
		id: "left",
		label: "Tile Left",
		shortcut: { kind: "arrow", keyCode: 123, modifiers },
	},
	{
		id: "right",
		label: "Tile Right",
		shortcut: { kind: "arrow", keyCode: 124, modifiers },
	},
	{
		id: "top",
		label: "Tile Top",
		shortcut: { kind: "arrow", keyCode: 126, modifiers },
	},
	{
		id: "bottom",
		label: "Tile Bottom",
		shortcut: { kind: "arrow", keyCode: 125, modifiers },
	},
	{
		id: "top_left",
		label: "Tile Top Left",
		shortcut: { kind: "letter", key: "u", modifiers },
	},
	{
		id: "top_right",
		label: "Tile Top Right",
		shortcut: { kind: "letter", key: "i", modifiers },
	},
	{
		id: "bottom_left",
		label: "Tile Bottom Left",
		shortcut: { kind: "letter", key: "j", modifiers },
	},
	{
		id: "bottom_right",
		label: "Tile Bottom Right",
		shortcut: { kind: "letter", key: "k", modifiers },
	},
	{
		id: "center",
		label: "Tile Center",
		shortcut: { kind: "letter", key: "c", modifiers },
	},
];

class WindowPositionAction extends CommandAction {
	readonly name: string;
	readonly displayName: string;
	readonly description: string;
	readonly groupName = "Window Position";

	constructor(private readonly config: WindowPositionConfig) {
		super();
		this.name = `window_tiling_${config.id}`;
		this.displayName = config.label;
		this.description = `Tile the active window: ${config.label}`;
	}

	async onKeyDown(): Promise<void> {
		try {
			await sendMacShortcut(this.config.shortcut);
		} catch (error) {
			console.error(`[Window Tiling] ${this.displayName} failed.`, error);
		}
	}
}

export const windowPositionActions = windowPositionConfig.map(
	(config) => new WindowPositionAction(config),
);