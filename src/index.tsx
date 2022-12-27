import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "shared/helpers/ThemeProvider/ThemeProvider";
import {Provider} from 'react-redux';
import {store} from "app/provider/storeProvider/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);
