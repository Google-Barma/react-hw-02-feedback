export default function FeedbackValue({ label, value }) {
  return (
    <p>
      {label}:{" "}
      <span>{label === "Positive feedback" ? value + "%" : value}</span>
    </p>
  );
}
