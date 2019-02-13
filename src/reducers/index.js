import {INCREASE_AMOUNT, DECREASE_AMOUNT, CHANGE_AMOUNT, REMOVE_GOOD} from '../actions'

export default function cart(state = [], action) {
    switch (action.type) {
        case INCREASE_AMOUNT:
            const increaseGoods = state.map(good => {
                if (good.id !== action.id) {
                    return good;
                }

                return Object.assign({}, good, {
                    amount: good.amount + 1
                })
            });

            return [...increaseGoods];

        case DECREASE_AMOUNT:
            const decreaseGoods = state.map(good => {
                if (good.id !== action.id) {
                    return good;
                }

                return Object.assign({}, good, {
                    amount: good.amount - 1
                })
            });

            return [...decreaseGoods];

        case CHANGE_AMOUNT:
            const changeGoods = state.map(good => {
                if (good.id !== action.id) {
                    return good;
                }

                return Object.assign({}, good, {
                    amount: action.value
                })
            });

            return [...changeGoods];

        case REMOVE_GOOD:
            const deleteIndex = state.findIndex(good => good.id === action.id)

            return [
                ...state.slice(0, deleteIndex),
                ...state.slice(deleteIndex + 1)
            ];

        default:
            return state
    }
}