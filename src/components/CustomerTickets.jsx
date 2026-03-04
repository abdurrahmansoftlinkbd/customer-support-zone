import TicketCard from "./TicketCard";
import StatusBanners from "./StatusBanners";
import { Suspense, use, useState } from "react";
import toast from "react-hot-toast";

const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
};

const ticketsPromise = fetchTickets();

const CustomerTickets = () => {
  const tickets = use(ticketsPromise);

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // task status
  const handleAddTask = (ticket) => {
    const exists = inProgress.find((t) => t.id === ticket.id);
    if (exists) {
      toast.error("Already added!");
      return;
    }

    setInProgress([...inProgress, ticket]);
    toast.success("Added to Task Status");
  };

  // complete task
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success("Task Completed!");
  };

  return (
    <>
      <StatusBanners
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="container w-11/12 mx-auto flex flex-col lg:flex-row gap-6 py-16">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
          {/* tickets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Suspense
              fallback={
                <span className="loading loading-spinner loading-md"></span>
              }
            >
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onClick={() => handleAddTask(ticket)}
                />
              ))}
            </Suspense>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-72 xl:w-80 flex flex-col gap-5">
          {/* task status */}
          <div>
            <h2 className="text-2xl text-[#34485A] font-bold mb-4">
              Task Status
            </h2>
            {inProgress.length === 0 && (
              <p className="text-[#627382]">
                Select a ticket to add to Task Status
              </p>
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

          {/* resolved */}
          <div>
            <h2 className="text-2xl text-[#34485A] font-bold mb-4">
              Resolved Task
            </h2>
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
        </div>
      </div>
    </>
  );
};

export default CustomerTickets;
