import React from "react";

const Resolved = ({ resolved }) => {
  return (
    <div>
      <h2 className="text-2xl text-[#34485A] font-bold mb-4">Resolved Task</h2>
      {resolved.length === 0 && (
        <p className="text-[#627382]">No resolved tasks yet.</p>
      )}
      {resolved.map((task) => (
        <div key={task?.id} className="card bg-[#E0E7FF] shadow-sm mb-3">
          <div className="card-body p-2 gap-3">
            <div className="p-2">
              <h4 className="text-lg font-medium">{task?.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resolved;
