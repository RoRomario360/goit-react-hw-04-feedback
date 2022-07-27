import PropTypes from 'prop-types';
import css from './Section.module.css';
export default function Section({ title, children }) {
  return (
    <section>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node,
};
