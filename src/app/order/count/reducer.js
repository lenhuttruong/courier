import { CONSTANT } from '../../../store/constant';

export const count = (state = 0, action) => {
    switch (action.type) {
        case CONSTANT.COUNT:
            return ++state;
        default:
            return state;
    }
}