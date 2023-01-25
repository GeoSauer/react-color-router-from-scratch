import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';

import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();

  return (
    <>
      <Nav />
      <div className="color-display" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        <h1>
          rgb ({r}, {g}, {b})
        </h1>
      </div>
    </>
  );
}
