import "./App.css";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <header>
        <h1>Навигация</h1>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/counter">Счетчик</Link>
            </li>
          </ul>
        </nav>
        <span className="Platform">PLATFORM: {__PLATFORM__}</span>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
