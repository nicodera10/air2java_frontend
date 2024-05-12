//loiacono_nicolas_adj_front/src/components/ConnexionApprouvedPage.js
import { Link } from 'react-router-dom';

const ConnexionApprouvedPage = () => {

  return (
    <div>
      <h1>Connexion réussie</h1>
      <Link to="/user">Voir les users</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/person">Voir les persons</Link><br />
      <Link to="/band">Voir les bands</Link>
    </div>
  );
}

export default ConnexionApprouvedPage;