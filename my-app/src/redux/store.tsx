import {postsType} from "../components/Profile/MyPosts/MyPosts";
import {dialogsTypes} from "../components/Dialogs/DialogItem/DialogItem";
import {messagesTypes} from "../components/Dialogs/Mesages/Message";


export type statePropsType = {
  profilePage: profilePagePropsType
  dialogsPage: dialogsPagePropsType
  sidebar: sidebarPropsType
}
export type sidebarPropsType = {}
export type profilePagePropsType = {
  posts: Array<postsType>
  newPostText: string,
  profile: null

}
export type dialogsPagePropsType = {
  messages: Array<messagesTypes>
  dialogs: Array<dialogsTypes>
  newMessageBody: string
}
// export type ReduxStoreType = {
//   subscribe: (observer: () => void) => void
//   getState: () => statePropsType
//   dispatch: (action: ActionsTypes) => void
// }
// export type addPostPropsType = {
//   addPost: () => void
//   rerenderEntireTree: () => void
// }
// export  type StoreType = {
//   _state: statePropsType
//   _callSubscriber: (state: statePropsType) => void
//   subscribe: (observer: () => void) => void
//   getState: () => statePropsType
//   dispatch: (action: ActionsTypes) => void
// }
//
// let store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: 'Hello, how are you?', likeCounter: 12},
//         {id: 2, message: "It's my first post!", likeCounter: 11},
//       ],
//       newPostText: '',
//       profile: null
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: 'Vadim',
//           src: 'https://sun9-75.userapi.com/impf/c630924/v630924802/' +
//             '1446a/s33tSPeU4Ik.jpg?size=720x1080&quality=96&sign=' +
//             'b00fd02c1e71a239a074008d458dcc40&type=album'
//         },
//         {
//           id: 2,
//           name: 'Kate',
//           src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:' +
//             'ANd9GcTirwV3sJSSt0Xf8C43cLbEv2sJR_qWmMpAKnEhdmZbl2b' +
//             '8Cnu8LKZ_CDDvidqsKm4-00k&usqp=CAU'
//         },
//         {
//           id: 3,
//           name: 'Alex',
//           src: 'https://www.interfax.ru/ftproot/photos/' +
//             'photostory/2019/07/09/week4_700.jpg'
//         },
//         {
//           id: 4,
//           name: 'Sveta',
//           src: 'https://www.istockphoto.com/resources/images/' +
//             'PhotoFTLP/Signature-1205756464.jpg'
//         },
//         {
//           id: 5,
//           name: 'Dimych',
//           src: 'https://st4.styapokupayu.ru/images/blog_posts/covers' +
//             '/000/136/369_large.jpg?1576853877'
//         },
//       ],
//       messages: [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How is your going?'},
//         {id: 3, message: 'Yo'},
//         {id: 4, message: 'Yo'},
//         {id: 5, message: 'Yo'},
//       ],
//       newMessageBody: ''
//     },
//     sidebar: {}
//   },
//
//   _callSubscriber () {
//     console.log('State changed')
//   },
//   getState() {
//     return this._state
//   },
//   subscribe(observe) {
//     this._callSubscriber = observe
//   },
//   dispatch(action: ActionsTypes) { // {type: 'ADD POST'}
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//     this._callSubscriber(this._state)
//   }
// }
//
// export default store;
// // @ts-ignore
// window.store = store;