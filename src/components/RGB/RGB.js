import { useParams } from 'react-router-dom';
import Nav from '../layout/Nav';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <>
      <Nav />
      <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        <h1>
          rgb ({r}, {g}, {b})
        </h1>
      </div>
    </>
  );
}
