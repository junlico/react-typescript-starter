import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
