import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer, InjectedFormProps} from 'redux-form'
import {FormDataType} from "../components/Login/Login";


export type AppPropsType = ReturnType<typeof rootReducer>
interface IProps {
  message: string;
}

const rootReducer = combineReducers<InjectedFormProps<IProps> & any>({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store
export default store