import React from './node_modules/react';
import classNames from './node_modules/classnames';

function Footer() {
  return (
    <React.Fragment>
      <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs.</span>
      <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
    </React.Fragment>
  );
}

export default Footer;