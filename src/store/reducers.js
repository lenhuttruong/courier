import { orderReducers } from '../app/order/orderReducers';
import { layoutReducers } from '../app/layout/layoutReducers';

const reducers = {
    ...orderReducers,
    ...layoutReducers
};

export default reducers;