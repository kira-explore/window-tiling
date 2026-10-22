import { CommandAction } from "@logitech/plugin-sdk";
import { type MacShortcut, sendMacShortcut } from "../utils/macos-shortcuts";

type WindowSizeConfig = {
	id: string;
	label: string;
	description: string;
	key: string;
};

const modifiers = ["control", "option"] as const;

const windowSizeConfig: WindowSizeConfig[] = [
	{
		id: "zoom",
		label: "Zoom",
		description: "Trigger the configured Zoom shortcut",
		key: "z",
	},
	{
		id: "fill",
		label: "Fill",
		description: "Fill the available screen area",
		key: "f",
	},
	{
		id: "return_previous_size",
		label: "Return to Previous Size",
		description: "Restore the previous window size",
		key: "r",
	},
];

class WindowSizeAction extends CommandAction {
	readonly name: string;
	readonly displayName: string;
	readonly description: string;
	readonly groupName = "Window Size";
	private readonly shortcut: MacShortcut;

	constructor(config: WindowSizeConfig) {
		super();
		this.name = `window_tiling_${config.id}`;
		this.displayName = config.label;
		this.description = config.description;
		this.shortcut = {
			kind: "letter",
			key: config.key,
			modifiers,
		};
	}

	async onKeyDown(): Promise<void> {
		try {
			await sendMacShortcut(this.shortcut);
		} catch (error) {
			console.error(`[Window Tiling] ${this.displayName} failed.`, error);
		}
	}
}

export const windowSizeActions = windowSizeConfig.map(
	(config) => new WindowSizeAction(config),
);