import React from "react";
import { Input } from './components/Input'
import { TaskList } from './components/TaskList'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Input />
			</header>
				<TaskList />
		</div>
	);
}

export { App };