import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title || 'Title'}</h2>

      <ul className={s.list}>
        {stats.map(elem => (
          <li className={s.item} key={elem.id}>
            <span className={s.label}>{elem.label}</span>
            <span className={s.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
