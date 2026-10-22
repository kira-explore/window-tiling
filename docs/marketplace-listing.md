# Marketplace Listing

Use this document for Marketplace fields that require manual entry. Keep the detail page description in sync with the `description` in `LoupedeckPackage.yaml`.

## Teaser Description

Arrange macOS windows from your MX Creative Console Keypad or Actions Ring.

## Detail Page Description

**Kira Window Tiling** adds quick macOS window positioning to your Logitech MX Creative Console Keypad or Actions Ring.

**Actions**
- Tile the active window left, right, top, or bottom.
- Place it in any corner or center it.
- Cycle it through the four corners.

Actions send Control+Option shortcuts through macOS. Configure a compatible window manager or shortcut handler, and allow Logi Plugin Service to control System Events when prompted.

## Release Notes

**Initial release (0.1.0)**
- Adds nine window-position actions and Cycle Corners.
- Triggers macOS Control+Option shortcuts from the MX Creative Console Keypad or Actions Ring.
- Requires a compatible shortcut handler or window manager and macOS Automation permission.

## Remaining Before Submission

- Set the operating system to macOS only. The current Marketplace draft showed both macOS and Windows, but this plugin invokes `/usr/bin/osascript` and does not support Windows.
- After publishing, confirm the GitHub repository includes the MIT `LICENSE` and the Marketplace listing displays the MIT license. The license is configured in the local package metadata and `.lplug4`.
- Provide a Developer EULA, as required by the Logitech Marketplace approval guidelines.
- Publish the README and project files at the configured GitHub homepage. The repository is currently empty online.
