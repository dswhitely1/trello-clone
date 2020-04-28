import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from "./store";
import App from './components/app.component';

const EnhancedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

render(<EnhancedApp />, document.getElementById('root'));
