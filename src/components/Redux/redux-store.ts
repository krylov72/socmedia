import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";



let rootReducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage:  dialogsReducer
})
export const store = createStore(rootReducers)

export type StoreType = ReturnType <typeof store.getState>