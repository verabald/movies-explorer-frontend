import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__head">О проекте</h2>
      <p className="about-project__title">
        Дипломный проект включал 5 этапов
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление <br />
          функциональности и финальные доработки.
        </p>
      </p>
      <p className="about-project__title">
        На выполнение диплома ушло 5 недель
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было <br />
          соблюдать, чтобы успешно защититься.
        </p>
      </p>
      <div className="about-project__box">
        <p className="about-project__row about-project__row_color">1 неделя</p>
        <p className="about-project__row about-project__row_black">4 недели</p>
        <caption className="about-project__caption">Back-end</caption>
        <caption className="about-project__caption">Front-end</caption>
      </div>
    </section>
  );
}

export default AboutProject;
