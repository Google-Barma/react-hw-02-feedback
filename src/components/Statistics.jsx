export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <section>
      <p>
        good: <span>{good}</span>
      </p>
      <p>
        neutral: <span>{neutral}</span>
      </p>
      <p>
        bad: <span>{bad}</span>
      </p>
      <p>
        total: <span>{total}</span>
      </p>
      <p>
        percentage: <span>{positivePercentage}%</span>
      </p>
    </section>
  );
}
