import Component from 'inferno-component';
import { createElement } from 'inferno-create-element';
import { cloneVNode } from 'inferno-clone-vnode';

import _ from 'lodash';
import Frame1 from './1/Frame';
import Frame2 from './2/Frame';
import Frame3 from './3/Frame';
import Frame4 from './4/Frame';
import Frame5 from './5/Frame';
import Frame6 from './6/Frame';
import Frame7 from './6/Frame';
import Frame8 from './6/Frame';
const d = 29;
const r = d / 2;

const Pages = [
	Frame1,
	Frame2,
	Frame3,
	Frame4,
	Frame5,
	Frame6,
	Frame7,
	Frame8,
].map(i => createElement(i));

export default class Gallery extends Component {
	state = { page: 4 };

	nextPage = () => {
		console.log('advance');
		this.setState(({ page }) => ({ page: page + 1 }));
	};

	render({}, { page }) {
		console.log(page);
		return cloneVNode(Pages[page], { nextPage: this.nextPage });
	}
}
