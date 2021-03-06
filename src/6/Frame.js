import Component from 'inferno-component';
import _ from 'lodash';
import Box from './Box';
const d = 29;
const r = d / 2;
export default class Frame extends Component {
	state = { n: 1 };
	lastLoc = 0;
	componentDidMount() {
		document.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		let { scrollY } = window;
		let diff = scrollY - this.lastLoc;
		this.lastLoc = scrollY;
		let d = diff < 0 ? -1 : 1;
		this.setState({ n: this.state.n + d });
	};
	checked = (x, y) => {
		const { n } = this.state;
		x -= r;
		y -= r;
		let d = x * x + y * y - r * r;
		return Math.sin(n * 0.1 + d * 2) > 0.5;
	};
	render({ nextPage }, { n }) {
		return (
			<div className="frame">
				<Box n={n} nextPage={nextPage} />
			</div>
		);
	}
}
