export default function Statistics({ feedbacks, total, positivePercentage }) {
  return (
    <>
      <ul>
        {Object.keys(feedbacks).map(elem => (
          <li key={elem}>
            <p>{elem}:</p>
            <span>{feedbacks[elem]}</span>
          </li>
        ))}
      </ul>
      <p>Total:</p>
      <span>{total}</span>
      <p>Positive feedback:</p>
      <span>{positivePercentage}</span>
    </>
  );
}
