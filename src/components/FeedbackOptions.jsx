import Button from "./Button";
import { uuid } from "uuidv4";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <section>
      {Object.keys(options).map((key) => (
        <Button name={key} onLeaveFeedback={onLeaveFeedback} key={uuid()} />
      ))}
    </section>
  );
}
