import React from 'react';
import Typography from '@mui/material/Typography';
import Header from './header';
import Package from './package';
import IMG from '../../assets/images/overall_activity.jpg';
import './splash.css';
import Footer from './footer';
import Functionnalities from './functionalities';
import {
  sales, clients, fournisseurs, stocks, ressources, fcts,
} from './splashHelper';

const Splash = () => (
  <div className="splash-wrapper">
    <div className="splash-inf">
      <Header />
      <div className="over-all-presentation">
        <Typography variant="h3" className="text-presentation" style={{ fontWeight: '900' }}>
          Optimisez la gestion commerciale de votre entreprise
          <br />
          <Typography variant="h6" style={{ fontWeight: '400' }}>
            Une fonctionnalité pour chaque besoin.
          </Typography>
        </Typography>
        <div className="img-pres-wrapper">
          <img src={IMG} alt="presentation" className="img-presentation" />
        </div>
      </div>
      <div className="empty-seperator" />
      <Package
        nbr={0}
        name="ventes"
        services={sales}
      />
      <Package
        nbr={1}
        name="clients"
        services={clients}
      />
      <Package
        nbr={2}
        name="fournisseurs"
        services={fournisseurs}
      />
      <Package
        nbr={3}
        name="stock"
        services={stocks}
      />
      <Package
        nbr={4}
        name="Ressources humaines"
        services={ressources}
      />
    </div>
    <Footer />
    <Functionnalities fcts={fcts} />
  </div>
);
export default Splash;
