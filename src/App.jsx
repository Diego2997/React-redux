import "./App.css";
import TaskForm from "./components/TaskForm";

import TaskList from "./components/TaskList";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <TaskList />
            <TaskForm />
        </>
    );
}

export default App;
