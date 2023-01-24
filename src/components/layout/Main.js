import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <Link to={`/rgb`}>
      <h1>Click Here to Begin</h1>
    </Link>
  );
}
