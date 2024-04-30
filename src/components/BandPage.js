import React from 'react';
import { Link } from 'react-router-dom';

const BandPage = () => {
  return (
    <div>
      <h1>Band Page</h1>
      <Link to="/person">Voir les persons</Link><br />
      <Link to="/user">Voir les users</Link><br />
      <Link to="/festival">Voir les festivals</Link>
    </div>
  );
}

export default BandPage;
