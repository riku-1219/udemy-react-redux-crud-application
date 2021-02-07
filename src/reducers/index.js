import { combineReducers } from "redux";
import count from "./count"; // 結合するreducerをインポート

export default combineReducers({ count }); // 結合する。複数の場合でも（それが普通）列挙するだけでok
// export default combineReducers({ foo, bar, baz });