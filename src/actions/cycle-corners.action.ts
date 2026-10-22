import { CommandAction } from "@logitech/plugin-sdk";
import { sendMacShortcut } from "../utils/macos-shortcuts";

const cornerShortcuts = [
	{ kind: "letter", key: "u", modifiers: ["control", "option"] },
	{ kind: "letter", key: "i", modifiers: ["control", "option"] },
	{ kind: "letter", key: "k", modifiers: ["control", "option"] },
	{ kind: "letter", key: "j", modifiers: ["control", "option"] },
] as const;

export class CycleCornersAction extends CommandAction {
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
			await sendMacShortcut(cornerShortcuts[this.index]);
			this.index = (this.index + 1) % cornerShortcuts.length;
		} catch (error) {
			console.error("[Window Tiling] Cycle Corners failed.", error);
		} finally {
			this.running = false;
		}
	}
}