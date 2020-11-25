export default function Button({ name, onLeaveFeedback }) {
  return (
    <button type="button" onClick={() => onLeaveFeedback(name)}>
      {name}
    </button>
  );
}
