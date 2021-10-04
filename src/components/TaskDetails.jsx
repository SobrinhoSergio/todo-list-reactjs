import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const histoty = useHistory();

  const handleBackButtonClick = () =>{
    histoty.goBack();
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>

      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit
          alias cumque repellat, impedit mollitia est autem sapiente d olorum
          minima cum! Alias suscipit
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
