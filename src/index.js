import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoProvider } from './context/Context';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

root.render(
    <TodoProvider>
        <App/>
    </TodoProvider>
);