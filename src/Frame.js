import Component from 'inferno-component';
import Box from './Box';

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
		console.log(d);
		this.setState({ n: this.state.n + d });
	};

	render({}, { n = 8 }) {
		return (
			<div className="frame">
				<Box n={n} />
			</div>
		);
	}
}
