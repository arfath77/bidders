import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
    }
  }

  render() {
    console.log(this.props.children, 'in scroll to top');
    return null;
  }
}

export default withRouter(ScrollToTop);
