import { v4 as uuidv4 } from "uuid";
import Section from "./Section";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Section title={"Please leave feedback"}>
      {Object.keys(options).map((key) => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(key)}
          key={uuidv4()}
        >
          {key}
        </button>
      ))}
    </Section>
  );
}
