import { execFile } from "node:child_process";

export type MacShortcutModifier = "command" | "control" | "option" | "shift";

export type MacShortcut =
	| {
			kind: "arrow";
			keyCode: number;
			modifiers?: readonly MacShortcutModifier[];
	  }
	| {
			kind: "letter";
			key: string;
			modifiers?: readonly MacShortcutModifier[];
	  };

export const sendMacShortcut = (shortcut: MacShortcut): Promise<void> => {
	const modifiers = shortcut.modifiers
		?.map((modifier) => `${modifier} down`)
		.join(", ");
	const using = modifiers ? ` using { ${modifiers} }` : "";
	const keyAction =
		shortcut.kind === "arrow"
			? `key code ${shortcut.keyCode}`
			: `keystroke "${shortcut.key}"`;
	const script = `tell application "System Events" to ${keyAction}${using}`;

	return new Promise((resolve, reject) => {
		execFile("/usr/bin/osascript", ["-e", script], (error) => {
			if (error) reject(error);
			else resolve();
		});
	});
};