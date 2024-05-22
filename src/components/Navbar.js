import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userType = localStorage.getItem('userType');

  return (
    <nav>
      <Link to="/">Accueil</Link>
      {userType === 'admin' && <Link to="/user">Utilisateurs</Link>}
      <Link to="/festival">Festivals</Link>
      <Link to="/band">Groupes</Link>
      <Link to="/person">Personnes</Link>
    </nav>
  );
};

export default Navbar;
