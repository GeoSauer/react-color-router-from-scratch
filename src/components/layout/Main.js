import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <Link to={`/rgb/236/11/67`}>
      <h1>Click Here to Begin</h1>
    </Link>
  );
}
