# Kira Window Tiling

A macOS plugin for the Logitech MX Creative Console Keypad and Actions Ring, managed with Logi Options+. Assign window-positioning actions to Keypad keys or the Actions Ring and trigger them directly.

[![CI](https://github.com/kira-explore/window-tiling/actions/workflows/ci.yml/badge.svg)](https://github.com/kira-explore/window-tiling/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: macOS](https://img.shields.io/badge/platform-macOS-111111?logo=apple&logoColor=white)](https://www.apple.com/macos/)
[![Node.js 24+](https://img.shields.io/badge/Node.js-24%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![CodeQL](https://github.com/kira-explore/window-tiling/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/kira-explore/window-tiling/actions/workflows/github-code-scanning/codeql)
[![Copilot](https://github.com/kira-explore/window-tiling/actions/workflows/agents/copilot-pull-request-reviewer/badge.svg)](https://github.com/kira-explore/window-tiling/actions/workflows/agents/copilot-pull-request-reviewer)

## Actions

Phase 1 actions are grouped under **Window Position** and Phase 2 actions under **Window Size** in Logi Options+.

| Group           | Actions                                                            |
| --------------- | ------------------------------------------------------------------ |
| Window Position | Tile Left, Tile Right, Tile Top, Tile Bottom                       |
| Window Position | Tile Top Left, Tile Top Right, Tile Bottom Left, Tile Bottom Right |
| Window Position | Tile Center, Cycle Corners                                         |
| Window Size     | Zoom, Fill, Return to Previous Size                                |

### Keyboard Shortcuts

The plugin sends keyboard shortcuts through macOS using AppleScript and System Events. It does not position or resize windows independently. Configure macOS or a compatible window manager to respond to these shortcuts.

| Action                  | Shortcut sent                                        |
| ----------------------- | ---------------------------------------------------- |
| Tile Left               | Control + Option + Left Arrow                        |
| Tile Right              | Control + Option + Right Arrow                       |
| Tile Top                | Control + Option + Up Arrow                          |
| Tile Bottom             | Control + Option + Down Arrow                        |
| Tile Top Left           | Control + Option + U                                 |
| Tile Top Right          | Control + Option + I                                 |
| Tile Bottom Left        | Control + Option + J                                 |
| Tile Bottom Right       | Control + Option + K                                 |
| Tile Center             | Control + Option + C                                 |
| Cycle Corners           | Control + Option + U, I, K, J — one corner per press |
| Zoom                    | Control + Option + Z                                 |
| Fill                    | Control + Option + F                                 |
| Return to Previous Size | Control + Option + R                                 |

## Requirements

- macOS
- Logitech MX Creative Console (Keypad and Actions Ring), Logitech Options+, and Logi Plugin Service
- Bun
- Node.js 24 or newer
- A window manager or macOS shortcut configuration that responds to the shortcuts listed above

### macOS Permissions

The first time an action runs, macOS may ask you to allow Logi Options+ or Logi Plugin Service to control System Events.
1. Open **System Settings → Privacy & Security → Automation**.
2. Grant the requested permission.
3. If macOS requests Accessibility access, enable it under **System Settings → Privacy & Security → Accessibility** as well.

## Development

### Install Dependencies

```sh
bun install
```

### Type-Check and Build

```sh
bun run build
```

### Link the Plugin

Link the development build into Logi Plugin Service. It should then appear under **All Actions** in the device configuration screen in Logi Options+.

```sh
bun run link
```

### Watch for Changes

```sh
bun run watch
```

### Unlink the Plugin

Remove the development link when you no longer need it.

```sh
bun run unlink
```

## Package

Create a production build and package it as an `.lplug4` file for distribution or marketplace submission.

```sh
bun run build:pack
```

## Scope

This release includes **Phase 1 — Window Position** and **Phase 2 — Window Size**. Minimize is excluded until its shortcut is verified. Window Arrangements (Phase 3) and Full Screen (Phase 4) are planned for future development.
