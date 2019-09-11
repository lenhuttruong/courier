import { CONSTANT } from '../../store/order/constant';

export const addActiveTab = activeTab =>
(dispatch, getState) =>
{
    dispatch({type: CONSTANT.ACTIVETAB.ADD, value: activeTab});
}

export const editActiveTab = activeTab =>
(dispatch, getState) =>
{
    dispatch({type: CONSTANT.ACTIVETAB.EDIT, value: activeTab});
}