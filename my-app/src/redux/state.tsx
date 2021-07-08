import {postsType} from "../components/Profile/MyPosts/MyPosts";
import {dialogsTypes} from "../components/Dialogs/DialogItem/DialogItem";
import {messagesTypes} from "../components/Dialogs/Mesages/Message";

export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
}

export type profilePagePropsType = {
    posts: Array<postsType>
}
export type dialogsPagePropsType = {
    messages: Array<messagesTypes>
    dialogs: Array<dialogsTypes>
}





let state: statePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, how are you?', likeCounter: 12},
            {id: 2, message: "It's my first post!", likeCounter: 11},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vadim', src: 'https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/12710983_964566530247627_3244826929122487194_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHc6qaWXObx3pzI_0c7CSEy8qSBVG9ZdfLypIFUb1l18mRJrbCYBymvHMxaf4Nzqz__fvX_UO5PaLo6jXwEU6Ip&_nc_ohc=2b7y0hjeQPsAX_eqiWG&_nc_ht=scontent-waw1-1.xx&oh=bf4ce9035956e3fb719683686becce9f&oe=60E92E75'},
            {id: 2, name: 'Kate', src: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/185091422_3981695545251617_4521395607322535528_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFtBqv2XGkhIiUK-BedM_fvjVV5-fPfjMeNVXn589-Mx6rCtJVnh6mfShXELASByHisISpBhxJ1_5C4KKQU8ci1&_nc_ohc=G6cTACAv2RYAX_Gf9ay&_nc_ht=scontent-waw1-1.xx&oh=5337172f246a06498b29a6d3e1b0d889&oe=60E9DD09'},
            {id: 3, name: 'Alex', src: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg'},
            {id: 4, name: 'Sveta', src: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg'},
            {id: 5, name: 'Dimych', src: 'https://st4.styapokupayu.ru/images/blog_posts/covers/000/136/369_large.jpg?1576853877'},


        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your going?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }

}

export default state