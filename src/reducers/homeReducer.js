import _initialState from '../initialstate/home'

export default function reducer(state = _initialState, action) {

    switch (action.type) {

        case 'HANDLE_SLIDER':
            if (action.payload.id === "age"){
                return {
                    ...state,
                    age: action.payload.val
                }
            } else if (action.payload.id === "lifetime"){
                return {
                    ...state,
                    lifetime: action.payload.val
                }
            } else if (action.payload.id === "sign_date"){
                return {
                    ...state,
                    sign_date: action.payload.val
                }
            } else if (action.payload.id === "last_timestamp"){
                return {
                    ...state,
                    last_timestamp: action.payload.val
                } 
            } else {
                return {
                    ...state,
                    gift_price: action.payload.val
                }
            }

            break;
         
        default:
    }

    return state
}