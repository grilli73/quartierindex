import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { theme } from './theme/theme';
import App from './App';
import { store } from './state/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
     <MuiThemeProvider theme={theme}>
        <App />
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
