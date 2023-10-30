import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__head">Технологии</h2>
      <div className="techs__box">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__tools">
          <li className="techs__tool">HTML</li>
          <li className="techs__tool">CSS</li>
          <li className="techs__tool">JS</li>
          <li className="techs__tool">React</li>
          <li className="techs__tool">Git</li>
          <li className="techs__tool">Express.js</li>
          <li className="techs__tool">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
