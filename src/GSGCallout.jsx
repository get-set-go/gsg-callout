import './styles/index.less';

import React from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGCallout extends React.Component {
  render() {
    let _bClass = {
      'callout': true,
      [`callout-${this.props.bStyle}`]: true
    };

    _bClass = classNames(_bClass);

    return(
      <div className={_bClass}>
        {this.props.children}
      </div>
    );
  }
};

GSGCallout.defaultProps = {
  bStyle: 'primary'
};
