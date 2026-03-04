const StatusBanners = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="container w-11/12 mx-auto flex flex-col sm:flex-row gap-5 pt-16">
      {/* progress */}
      <div
        className="flex-1 rounded-lg flex flex-col items-center justify-center gap-5 p-6 py-16"
        style={{
          background: "linear-gradient(135deg, #632EE3, #9F62F2)",
        }}
      >
        <span className="text-white text-2xl">In-Progress</span>
        <span className="text-white text-6xl font-semibold">
          {inProgressCount}
        </span>
      </div>

      {/* resolved */}
      <div
        className="flex-1 rounded-lg flex flex-col items-center justify-center gap-5 p-6 py-16"
        style={{
          background: "linear-gradient(135deg, #54CF68, #00827A)",
        }}
      >
        <span className="text-white text-2xl">Resolved</span>
        <span className="text-white text-6xl font-semibold">
          {resolvedCount}
        </span>
      </div>
    </div>
  );
};

export default StatusBanners;
