import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* Provider: Oluşturulan yapının özel bir React componenti formunda tanımlanmasını sağlar. */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
