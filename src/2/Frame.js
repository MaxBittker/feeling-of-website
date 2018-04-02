import Component from 'inferno-component';
import _ from 'lodash';
const d = 29;
const r = d / 2;
export default class Frame extends Component {
	state = { n: 30 };
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
	render({ nextPage }, { n = 8 }) {
		let rows = _.map(_.range(d * 4), x => (
			<div>
				{_.map(_.range(d), y => (
					<input type="radio" checked={this.checked(x, y)} />
					// <img src="a" />
				))}
			</div>
		));
		return (
			<div className="frame">
				{rows}
				<button onClick={nextPage}>onward</button>
			</div>
		);
	}
}
