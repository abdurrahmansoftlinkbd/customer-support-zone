import React from "react";

const TaskStatus = ({ inProgress, handleComplete }) => {
  return (
    <div>
      <h2 className="text-2xl text-[#34485A] font-bold mb-4">Task Status</h2>
      {inProgress.length === 0 && (
        <p className="text-[#627382]">Select a ticket to add to Task Status</p>
      )}
      {inProgress.map((task) => (
        <div key={task?.id} className="card bg-white shadow-sm mb-3">
          <div className="card-body p-2 gap-3">
            <div className="p-2">
              <h4 className="text-lg font-medium mb-3">{task?.title}</h4>
              <button
                onClick={() => handleComplete(task)}
                className="btn btn-block border-none bg-green-600 text-white hover:bg-green-700"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
