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

	render({ nextPage }, { n }) {
		let form = _.range(500).map(i => (
			<textarea style={{ height: '30px', width: '30px' }} />
		));
		return (
			<div className="frame">
				{form}
				<button className="secret-button" onClick={this.props.nextPage}>
					onward
				</button>
			</div>
		);
	}
}
