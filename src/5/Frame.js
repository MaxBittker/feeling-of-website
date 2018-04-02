import Component from 'inferno-component';
import _ from 'lodash';
import Box from './Box';
const d = 29;
const r = d / 2;
export default class Frame extends Component {
	state = { n: 0 };
	lastLoc = 0;
	componentDidMount() {
		document.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScroll);
	}

	onInput = e => {
		this.setState({ n: e.target.value });
	};

	render({ nextPage }, { n }) {
		let sliders = _.range(n + 1).map(i => (
			<input type="range" onInput={this.onInput} value={n} />
		));
		return (
			<div className="frame">
				{sliders}
				{n > 90 && <button onClick={this.props.nextPage}>onward</button>}
			</div>
		);
	}
}
