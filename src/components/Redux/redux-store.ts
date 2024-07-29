
import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { usersReducer } from "./usersReducer";



let rootReducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage:  dialogsReducer,
    usersPage:usersReducer
})
export const store = createStore(rootReducers)
export type RootType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store

export type StoreType = ReturnType <typeof store.getState>

