import { CycleCornersAction } from "./actions/cycle-corners.action";
import { windowPositionActions } from "./actions/window-position.actions";
import { windowSizeActions } from "./actions/window-size.actions";

const windowTilingActions = [
	...windowPositionActions,
	new CycleCornersAction(),
	...windowSizeActions,
];

export default windowTilingActions;