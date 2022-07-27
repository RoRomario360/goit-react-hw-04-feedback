import PropTypes from 'prop-types';
import css from './Notification.module.css';
export default function Notification({ message }) {
  return (
    <div>
      <h2 className={css.notify}>{message}</h2>
    </div>
  );
}

Notification.propType = {
  message: PropTypes.string,
};
