function StatCard({ number, label }) {
  return (
    <div className="stat glass">
      <span className="stat__number">{number}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default StatCard;