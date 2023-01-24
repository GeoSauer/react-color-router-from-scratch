import gif from '../../../giphy.gif';
import Nav from '../Nav/Nav';

import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Route not found!</h1>
        <img className="gif" src={gif} />
      </div>
    </>
  );
}
