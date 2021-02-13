import { combineReducers } from "redux";
import events from "./events"; // 結合するreducerをインポート

export default combineReducers({ events }); // 結合する。複数の場合でも（それが普通）列挙するだけでok
// export default combineReducers({ foo, bar, baz });