import { CONSTANT } from '../../store/constant';

export const addHistory = history =>
(dispatch, getState) =>
{
    dispatch({type: CONSTANT.HISTORY.ADD, value: history});
}