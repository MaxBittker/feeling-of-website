import Component from 'inferno-component';

export default class Box extends Component {
	render({ n, nextPage }) {
		if (n <= 0) {
			return (
				<div>
					<button onClick={this.props.nextPage}>onward</button>
				</div>
			);
		}
		return (
			<div className="box">
				<Box n={n - 1} nextPage={this.props.nextPage} />
			</div>
		);
	}
}
