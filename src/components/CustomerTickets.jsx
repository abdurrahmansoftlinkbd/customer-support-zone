import TicketCard from "./TicketCard";
import StatusBanners from "./StatusBanners";
import { Suspense, use, useState } from "react";
import toast from "react-hot-toast";
import TaskStatus from "./TaskStatus";
import Resolved from "./Resolved";

const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

const CustomerTickets = () => {
  const initialTickets = use(ticketsPromise);
  const [tickets, setTickets] = useState(initialTickets);

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddTask = (ticket) => {
    const exists = inProgress.find((t) => t.id === ticket.id);
    const alreadyResolved = resolved.find((t) => t.id === ticket.id);

    if (exists || alreadyResolved) {
      toast.error("Task already processed!");
      return;
    }

    setInProgress((prev) => [...prev, ticket]);
    toast.success("Added to Task Status");
  };

  const handleComplete = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
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
          <TaskStatus
            inProgress={inProgress}
            handleComplete={handleComplete}
          ></TaskStatus>

          <Resolved resolved={resolved}></Resolved>
        </div>
      </div>
    </>
  );
};

export default CustomerTickets;
