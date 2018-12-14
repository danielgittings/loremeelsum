import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Luckiest Guy:400', 'Open Sans:400'],
  },
});

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
