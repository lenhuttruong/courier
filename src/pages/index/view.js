import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import classNames from 'classnames';

// sidebar nav config
import navigation from '../../nav';
// routes config
import routes from '../../routes';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

const Aside = React.lazy(() => import('./aside'));
const Footer = React.lazy(() => import('./footer'));
const Header = React.lazy(() => import('./header'));
const OrderIndex = React.lazy(() => import('../../app/order'));
const ReportIndex = React.lazy(() => import('../../app/report'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const signOut = (e, history) => {
  e.preventDefault();
  history.push('/login');
}

function view(props){
    return (
        <div className="app">
          <AppHeader fixed>
            <Suspense  fallback={loading()}>
              <Header onLogout={e=>signOut(e, props.history)}/>
            </Suspense>
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <Suspense>
              <AppSidebarNav navConfig={navigation} {...props} router={router}/>
              </Suspense>
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <div className="main">
              <Suspense fallback={loading()}>
                  <Switch>
                      <Route exact path="/order" name="Order Index" render={props => <OrderIndex {...props}/>} />
                      <Route exact path="/report" name="Report Index" render={props => <ReportIndex {...props}/>} />
                  </Switch>
              </Suspense>
            </div>
            <AppAside fixed>
              <Suspense fallback={loading()}>
                <Aside />
              </Suspense>
            </AppAside>
          </div>
          <AppFooter>
            <Suspense fallback={loading()}>
              <Footer />
            </Suspense>
          </AppFooter>
        </div>
      );
}

export default view;