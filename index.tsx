import * as React from 'react';
import reactToWebComponent from 'react-to-webcomponent';
import * as ReactDOM from 'react-dom/client';

import App from './App';

const LoginButton = reactToWebComponent(App, React, ReactDOM);
customElements.define('login-button', LoginButton);
