import React from 'react';
import { Link } from 'react-router-dom';

const PersonPage = () => {
  return (
    <div>
      <h1>Person Page</h1>
      <Link to="/user">Voir les users</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/band">Voir les bands</Link>
    </div>
  );
}

export default PersonPage;
