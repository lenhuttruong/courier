import { CONSTANT } from '../../store/order/constant';

export const addHistory = history =>
(dispatch, getState) =>
{
    dispatch({type: CONSTANT.HISTORY.ADD, value: history});
}