import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  //let message = "Hello, Word!"

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

			setTasks(data);
		};

		fetchTasks();
	}, []);


  const handleTaskClick = (TaskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === TaskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTask);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (TaskId) => {
    const newTasks = tasks.filter((task) => task.id !== TaskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />

        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />

              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />

        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
