import React from 'react';
import { Link } from 'react-router-dom';

const FestivalPage = () => {
  return (
    <div>
      <h1>Festival Page</h1>
      <Link to="/person">Voir les persons</Link><br />
      <Link to="/user">Voir les users</Link><br />
      <Link to="/band">Voir les bands</Link>
    </div>
  );
}

export default FestivalPage;
