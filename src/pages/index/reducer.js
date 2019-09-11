import { CONSTANT } from '../../store/order/constant';

export const history = (state = [], action) => {
    switch (action.type) {
        case CONSTANT.HISTORY.ADD:
            return [
                ...state,
                action.value
            ];
        // case CONSTANT.HISTORY.EDIT:
        //     return [
        //         ...state,
        //         action.value
        //     ];
        // case CONSTANT.HISTORY.REMOVE:
        //     return [
        //         ...state,
        //         action.value
        //     ];
        default:
            return state;
    }
};