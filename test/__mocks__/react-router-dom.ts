// __mocks__/react-router-dom.ts
import React from 'react';

const rrd = require('react-router-dom');

// Re-export everything
module.exports = {
  ...rrd,
  // Override the default 'useNavigate' hook
  useNavigate: () => jest.fn(),
  // Override other hooks if necessary
};
