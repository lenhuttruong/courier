import { CONSTANT } from '../../../store/constant';

export const editActiveTab = activeTab =>
(dispatch, getState) =>
{
    dispatch({type: CONSTANT.ACTIVETAB.EDIT, value: activeTab});
}