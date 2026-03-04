import { CiCalendar } from "react-icons/ci";
import StatusBadge from "./StatusBadge";

const priorityStyles = {
  "HIGH PRIORITY": "text-red-500",
  "MEDIUM PRIORITY": "text-yellow-500",
  "LOW PRIORITY": "text-green-600",
};

const TicketCard = ({ ticket, onClick }) => (
  <div
    onClick={onClick}
    className="card bg-white border-none cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
  >
    <div className="card-body p-4 gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-base text-base-content leading-snug">
          {ticket.title}
        </h3>
        <div className="shrink-0">
          <StatusBadge status={ticket?.status} />
        </div>
      </div>

      <p className="text-sm text-base-content/60 leading-relaxed">
        {ticket.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-3 text-xs">
          <span
            className={`font-bold tracking-wide ${priorityStyles[ticket.priority]}`}
          >
            {ticket.id} {ticket.priority}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-base-content/50">
          <span>{ticket.assignee}</span>
          <span className="flex items-center gap-1">
            <CiCalendar size={13} />
            {ticket?.createdAt}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default TicketCard;
