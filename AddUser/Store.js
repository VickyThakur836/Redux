import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
const config = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(config, Reducer)
export const StoreAssign = createStore(persistedReducer, applyMiddleware(thunk))
export const persistedStore = persistStore(StoreAssign)
// export const StoreAssign= createStore(Reducer)