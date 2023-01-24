import gif from '../../giphy.gif';
import Nav from '../layout/Nav';

export default function NotFound() {
  return (
    <>
      <Nav />
      <h1>Route not found!</h1>
      <img src={gif} />
    </>
  );
}
