import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <main>
      <h1 className="main-header">Welcome to Color Router!</h1>
      <p className="main-body">
        You can click the links at the top of the page to display a color and its rgb value, or you
        can enter your own into the url. Have fun!
      </p>
      <Link to={`/rgb/236/11/67`}>
        <h1>
          Click <span>Here</span> to Begin
        </h1>
      </Link>
    </main>
  );
}
