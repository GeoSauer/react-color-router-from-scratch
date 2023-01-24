import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="header">
      <ul>
        <li>
          <NavLink to="/rgb/236/11/67">Red Crayola</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/88/53/94">English Violet</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/122/231/199">Aquamarine</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/214/255/183">Tea Green</NavLink>
        </li>
        <li>
          <NavLink to="/rgb/255/246/137">Canary</NavLink>
        </li>
      </ul>
    </header>
  );
}
