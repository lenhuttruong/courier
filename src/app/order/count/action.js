import { CONSTANT } from '../../../store/constant';

export const increase = () =>
(dispatch, getState) => {
    const action = {
        type: CONSTANT.COUNT
    }
    dispatch(action);
};