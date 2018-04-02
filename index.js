import { render } from 'inferno';

import Gallery from './src/Gallery';
import styles from './src/styles.css';

const mountNode = document.getElementById('root');

render(<Gallery />, mountNode, mountNode.lastChild);

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
