import React, { useState } from "react"
// import "./index.css"
import "./App.css"

// Components
import Counter from "./components/Counter"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStopwatch, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
library.add(faStopwatch, faPlus, faMinus)

function App() {
	const [counters, setCounters] = useState([0])

	return (
		<>
			<header>
				<FontAwesomeIcon
					icon="stopwatch"
					style={{ color: "#1b17e9", marginRight: 20 }}
				/>
				<span>React Counter v2</span>
			</header>

			<main>
				<section>
					{counters.length < 3 && (
						<button
							onClick={() => {
								if (counters.length < 3) {
									let copy = [...counters]
									copy.push(0)
									setCounters(copy)
								}
							}}
						>
							Add counter
						</button>
					)}
				</section>

				<section>
					{counters.map((item, index) => {
						return (
							<Counter
								item={item}
								key={index}
								index={index}
								counters={counters}
								setCounters={setCounters}
							/>
						)
					})}
				</section>
			</main>
			<footer>
				<div>
					<span>Made with </span>
					<a target="blank" href="https://fr.reactjs.org/">
						React
					</a>
					<span> by </span>
					<a
						target="blank"
						href="https://fr.linkedin.com/in/manuel-fontenelle-b406b563"
					>
						Manuel Fontenelle
					</a>
				</div>
			</footer>
		</>
	)
}

export default App
