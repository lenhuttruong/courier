import { Button } from 'reactstrap';
import React from 'react';

function view(props) {
    return (
        <div>
            Count Page
            <Button onClick={() => props.increase()} block color="secondary">Order</Button>
            {props.count}
        </div>
    );
}

export default view;