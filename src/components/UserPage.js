import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Link to="/person">Voir les persons</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/band">Voir les bands</Link>
    </div>
  );
}

export default UserPage;
