---

name: Logi Actions SDK
description: Use when editing or reviewing this project's Logitech Actions SDK integration.
applyTo: "**/*.ts,**/_.json,**/_.yaml,**/*.yml"
---

For Logitech Actions SDK questions, consult the current official documentation before relying on assumptions:
- Start with the [AI-friendly documentation setup](https://logitech.github.io/actions-sdk-docs/ai-friendly-documentation-setup/) and use [`llms.txt`](https://logitech.github.io/actions-sdk-docs/llms.txt) as the index.
- This project uses the Node.js/TypeScript SDK. Prefer the [Node.js SDK docs](https://logitech.github.io/actions-sdk-docs/nodejs/introduction.md), [creating an action](https://logitech.github.io/actions-sdk-docs/nodejs/creating-action.md), [CommandAction API](https://logitech.github.io/actions-sdk-docs/nodejs/api/classes/CommandAction.md), and [PluginSDK API](https://logitech.github.io/actions-sdk-docs/nodejs/api/classes/PluginSDK.md) when relevant.
- Fetch individual Markdown pages by using their `.md` URLs. Use [`llms-full.txt`](https://logitech.github.io/actions-sdk-docs/llms-full.txt) only when its size fits the available context.
- Re-fetch hosted docs when current SDK behavior matters; do not copy the documentation into this repository.
- The local `PluginApi.xml` reference is for the C# SDK and is not shipped with macOS. Do not apply it as Node.js API documentation.
