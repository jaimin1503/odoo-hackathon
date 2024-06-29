import React from "react";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";

const BoardView = ({ tasks }) => {
  return (
    <>
      <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
        {tasks?.map((task, index) => {
          const key = `${task._id}_${index}`;
          return (
            <Link to={`task/${task._id}`} key={key}>
              <TaskCard task={task} key={index} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BoardView;
