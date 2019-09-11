import React from 'react';
import { Provider } from 'react-redux';
import reportStoryFactory from './store';

// Containers
const Report = React.lazy(() => import('./report'));

const reportStore = reportStoryFactory();

function OrderIndex(props) {
    return (
        <Provider store={reportStore}>
            <Report {...props} />
        </Provider>
    )
}

export default OrderIndex