const statusStyles = {
  Open: {
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },
  "In-Progress": {
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-400",
  },
};

const StatusBadge = ({ status }) => {
  const style = statusStyles[status];
  return (
    <span
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style?.badge}`}
    >
      <span className={`w-2 h-2 rounded-full ${style?.dot}`} />
      {status}
    </span>
  );
};

export default StatusBadge;
