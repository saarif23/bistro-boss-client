import PropTypes from "prop-types"

/* Defining Prop Types */
/* Thanks to BobbyHadz.com blog */
HorizontalLine.propTypes = {
	className: PropTypes.string,
	chars: PropTypes.number
}
export default function HorizontalLine(props) {
	const {chars, className} = props;
	const isClass = className ? className : ""
	const nonBreakingSpace = '\xa0'
	return (
		<span className={`mx-2 ${isClass}`} style={{textDecoration: "line-through"}}>
			{nonBreakingSpace.repeat(chars)}
		</span>
	)
}