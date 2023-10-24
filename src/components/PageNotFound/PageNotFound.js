import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button className="page-not-found__link" onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
