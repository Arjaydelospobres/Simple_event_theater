import { Fragment } from "react";

import MainHeader from "./main-header";

function Layout(props) {
  return (
    //Fragment is alternative for this <></> it also a fragment
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
