import React from 'react';
import { Provider } from 'react-redux';
import orderStoryFactory from './store';

// Containers
const Order = React.lazy(() => import('./order'));

const orderStore = orderStoryFactory();

function OrderIndex(props) {
    return (
        <Provider store={orderStore}>
            <Order {...props} />
        </Provider>
    )
}

export default OrderIndex