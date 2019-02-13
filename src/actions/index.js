export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const REMOVE_GOOD = 'REMOVE_GOOD';

export function increaseAmount(id) {
    return (dispatch) => {
        dispatch({
            type: INCREASE_AMOUNT,
            id
        })
    }
}

export function decreaseAmount(id) {
    return (dispatch) => {
        dispatch({
            type: DECREASE_AMOUNT,
            id
        })
    }
}

export function changeAmount(id, value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_AMOUNT,
            id,
            value
        })
    }
}

export function removeGood(id) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_GOOD,
            id
        })
    }
}