import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export default function Statistics({ feedbacks, total, positivePercentage }) {
  return (
    <>
      <ul>
        {Object.keys(feedbacks).map(elem => (
          <li key={elem} className={styles.statisticsItem}>
            <p className={styles.itemText}>{elem}:</p>
            <span>{feedbacks[elem]}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li className={styles.statisticsItem}>
          <p className={styles.itemText}>Total:</p>
          <span>{total}</span>
        </li>
        <li className={styles.statisticsItem}>
          <p className={styles.itemText}>Positive feedback:</p>
          <span>{positivePercentage}</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
