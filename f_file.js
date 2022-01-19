import './index.css';
import entry from './s_file.js';
window.onload = function () {
    const body = document.querySelector('body');
    entry(body);
};