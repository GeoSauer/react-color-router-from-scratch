import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  return (
    <header className="header">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink className="red" to="/rgb/236/11/67">
        Red Crayola
      </NavLink>
      <NavLink className="violet" to="/rgb/88/53/94">
        English Violet
      </NavLink>
      <NavLink className="aquamarine " to="/rgb/122/231/199">
        Aquamarine
      </NavLink>
      <NavLink className="green" to="/rgb/214/255/183">
        Tea Green
      </NavLink>
      <NavLink className="canary" to="/rgb/255/246/137">
        Canary
      </NavLink>
    </header>
  );
}
