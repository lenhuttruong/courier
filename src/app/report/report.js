import { Container } from 'reactstrap';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import * as router from 'react-router-dom';

import {
    AppBreadcrumb2 as AppBreadcrumb
  } from '@coreui/react';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function Report() {
    return (
        <div>        
        <AppBreadcrumb appRoutes={routes} router={router} />
        <Container fluid>
            <Suspense fallback={loading()}>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                        ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Suspense>
        </Container>
        </div>
    );
}

export default Report;