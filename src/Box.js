import Component from 'inferno-component';

export default class Box extends Component {
	render({ n }) {
		if (n <= 0) {
			return <p>Hi</p>;
		}
		return (
			<div className="box">
				<Box n={n - 1} />
			</div>
		);
	}
}
