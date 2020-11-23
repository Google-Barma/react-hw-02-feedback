export default function StatisticBtn({ label, onIncrement }) {
  return (
    <button type="button" onClick={onIncrement}>
      {label}
    </button>
  );
}
