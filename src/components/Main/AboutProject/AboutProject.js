import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__head">О проекте</h2>
      <article className="about-project__title">
        Дипломный проект включал 5 этапов
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление <br />
          функциональности и финальные доработки.
        </p>
      </article>
      <article className="about-project__title">
        На выполнение диплома ушло 5 недель
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было{' '}
          <br />
          соблюдать, чтобы успешно защититься.
        </p>
      </article>
      <div className="about-project__box">
        <div className="about-project__row about-project__row_color_green">
          1 неделя
        </div>
        <div className="about-project__row about-project__row_color_black">
          4 недели
        </div>
        <p className="about-project__caption">Back-end</p>
        <p className="about-project__caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
