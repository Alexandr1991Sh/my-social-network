import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render';
import state from './components/redux/state';

// Переносим сюда логику rerenderEntireTree из app 
// В state пишем заглушку rerenderEntireTreeCopy

// Функцию subsribe мы вызываем тут и передаем в нее rerenderEntireTree

rerenderEntireTree(state);

reportWebVitals();
