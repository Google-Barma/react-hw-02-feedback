export default function FeedbackValue({ label, value }) {
  return (
    <div>
      <p>
        {label}:{" "}
        <span>{label === "Positive feedback" ? value + "%" : value}</span>
      </p>
    </div>
  );
}
