import { v4 as uuid } from "uuid";
import Section from "./Section";
import Notification from "./Notification";
import propTypes from "prop-types";

export default function Statistics({ stats, total, positivePercentage }) {
  return (
    <Section title={"Statistics"}>
      {total > 0 ? (
        <ul>
          {stats.map((stat) => (
            <li key={uuid()}>{stat.join(": ")}</li>
          ))}
          <li>
            total: <span>{total}</span>
          </li>
          <li>
            positive feedback: <span>{positivePercentage}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </Section>
  );
}

Statistics.propTypes = {
  stats: propTypes.arrayOf(propTypes.array),
  total: propTypes.number.isRequired,
  positivePersentage: propTypes.number,
};
