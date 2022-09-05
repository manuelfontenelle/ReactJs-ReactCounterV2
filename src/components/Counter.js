import React from "react"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Counter(props) {
	const { item, index, counters, setCounters } = props

	return (
		<div className="counter">
			<div className="wrapper">
				{item > 0 ? (
					<button
						onClick={() => {
							const copy = [...counters]
							copy[index]--
							setCounters(copy)
						}}
					>
						<FontAwesomeIcon icon="minus" style={{ fontSize: 30 }} />
					</button>
				) : (
					<div className="no-button"></div>
				)}

				<p>{item}</p>
				{item < 10 ? (
					<button
						onClick={() => {
							const copy = [...counters]
							copy[index]++
							setCounters(copy)
						}}
					>
						<FontAwesomeIcon icon="plus" style={{ fontSize: 30 }} />
					</button>
				) : (
					<div className="no-button"></div>
				)}
			</div>
			<div>
				<button
					onClick={() => {
						const copy = [...counters]
						copy[index] = 0
						setCounters(copy)
					}}
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Counter
