import { CONSTANT } from '../../store/order/constant';

export const activeTab = (state = [], action) => {
    switch (action.type) {
        case CONSTANT.ACTIVETAB.ADD:
            return action.value;
        case CONSTANT.ACTIVETAB.EDIT:
            return action.value;
        // case CONSTANT.HISTORY.REMOVE:
        //     return [
        //         ...state,
        //         action.value
        //     ];
        default:
            return state;
    }
};