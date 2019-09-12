import { CONSTANT } from '../../../store/constant';

export const aside = (state = {activeTab: '1'}, action) => {
    switch (action.type) {
        case CONSTANT.ACTIVETAB.EDIT:
            return {
                ...state,
                activeTab: action.value
            };
        default:
            return state;
    }
};