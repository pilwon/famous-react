import FamousUtil from './FamousUtil';
import React from 'react';

class FamousContextWrapper extends React.Component {
  getChildContext() {
    return this.props.context;
  }

  getFamous() {
    return null;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

FamousContextWrapper.childContextTypes = FamousUtil.getContextTypes();

export default FamousContextWrapper;
