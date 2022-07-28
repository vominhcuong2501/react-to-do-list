import { ADD_COMMENT } from "../Types/FacebookType";

const stateDefault = {
    comments: [
        {name: 'Tiêu Viêm', content: "hi ! Chi", avatar: `https://i.pravatar.cc?u=Google`},
        {name: 'Vân Chi', content: "hi ! Viêm", avatar: `https://i.pravatar.cc?u=Facebook`},
        {name: 'Mỹ Đỗ Toa', content: "hi ! Viêm", avatar: `https://i.pravatar.cc?u=Youtube`}
    ]
}

export const FacebookReducer = (state =stateDefault, {type, payload}) => {
    switch(type) {
        case ADD_COMMENT: {
            state.comments = [...state.comments, payload];
            return {...state}
        }
    }
    return {...state}
}

