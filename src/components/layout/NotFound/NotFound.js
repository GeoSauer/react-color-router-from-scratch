import gif from '../../../giphy.gif';
import Nav from '../Nav/Nav';

import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Route not found!</h1>
        <h2>Please make sure to only type digits between 0and 255 in the url :)</h2>
        <img className="gif" src={gif} />
      </div>
    </>
  );
}
