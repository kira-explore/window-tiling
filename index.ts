import { PluginSDK } from "@logitech/plugin-sdk";
import windowTilingActions from "./src/windowTiling-actions";

const pluginSDK = new PluginSDK();

for (const action of windowTilingActions) {
	pluginSDK.registerAction(action);
}

await pluginSDK.connect();