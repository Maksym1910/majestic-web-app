import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './core/app';

const root = document.querySelector('#root');

render(<App />, root);
