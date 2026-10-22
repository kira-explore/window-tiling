# AI Coding Instructions — Kira Window Tiling

## Project Overview

This repository contains `kira-window-tiling`, a macOS plugin for Logitech devices built with TypeScript, Node.js, and the Logi Actions SDK.

## Authoritative Documentation

Use Logitech's official documentation as the source of truth:
- **Documentation index:** https://logitech.github.io/actions-sdk-docs/llms.txt
- **Complete documentation:** https://logitech.github.io/actions-sdk-docs/llms-full.txt
- **Documentation setup guide:** https://logitech.github.io/actions-sdk-docs/ai-friendly-documentation-setup/

## Documentation Rules

1. Consult `llms.txt` to find the relevant documentation page.
2. Prefer Node.js SDK documentation for this TypeScript plugin.
3. Read the relevant Markdown page before changing SDK-specific code or configuration.
4. Use `llms-full.txt` when a question spans multiple sections or the relevant page is difficult to locate.
5. Do not assume C# examples or APIs apply to Node.js.
6. Check the installed SDK and toolkit versions in `package.json` before relying on version-specific behaviour.
7. Verify action-icon naming, asset discovery, packaging, metadata, and plugin capabilities against official documentation or the installed SDK/toolkit implementation.
8. If the documentation does not establish something, explain what remains unverified instead of guessing.

## Project Conventions

- Use TypeScript and the existing Logitech Node.js SDK.
- Follow the existing build, type-check, and packaging scripts.
- Preserve the current project structure unless a change is necessary.
- Avoid native Swift helpers unless explicitly requested.
- Avoid adding dependencies when the existing SDK or toolkit can handle the task.

## Validation

After changing code or configuration, run the relevant checks:

```bash
bun run typecheck
bun run build
```

For packaging changes, also run the repository's packaging script and verify the generated plugin package.
