import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Blockquote from '../src';

describe('<Blockquote /> component', function() {

  it('should blockquote exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Blockquote />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
