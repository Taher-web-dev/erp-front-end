import STAT from '../../assets/images/stat.png';
import FACT from '../../assets/images/facturation.png';
import CRM from '../../assets/images/crm.png';
import REG from '../../assets/images/reg.png';
import ECH from '../../assets/images/Eche.png';
import PUR from '../../assets/images/achat.png';
import SOL from '../../assets/images/soldes.png';
import STOCK from '../../assets/images/stock.png';
import INV from '../../assets/images/inv.png';
import EMP from '../../assets/images/emp.png';
import PAI from '../../assets/images/paie.png';
import FLOT from '../../assets/images/fleet.png';

export const sales = [
  { name: 'statistiques', path: STAT },
  { name: 'Facturations', path: FACT },
];
export const clients = [
  { name: 'CRM', path: CRM },
  { name: 'Réglements', path: REG },
  { name: 'Echéances', path: ECH },
];
export const fournisseurs = [
  { name: 'Achat', path: PUR },
  { name: 'Soldes Fournisseurs', path: SOL },
];
export const stocks = [
  { name: 'Gestion de stock', path: STOCK },
  { name: 'inventaires', path: INV },
];
export const ressources = [
  { name: 'Employees', path: EMP },
  { name: 'Gestion de Paie', path: PAI },
  { name: 'flot', path: FLOT },
];

export const fcts = [
  { title: 'sales', functions: ['statistiques', 'facturations'], color: 'rgb(228, 111, 120)' },
  { title: 'clients', functions: ['CRM', 'Réglements', 'Echéances'], color: 'rgb(24, 109, 107)' },
  { title: 'fournisseurs', functions: ['Achat', 'Soldes Fournisseurs'], color: 'rgb(96, 134, 158)' },
  { title: 'stocks', functions: ['Gestion de stock', 'Gestion des Inventaires'], color: 'rgb(110, 109, 154)' },
  { title: 'ressources humaines & materielles', functions: ['Employees', 'Gestion de Paie', 'flot'], color: 'rgb(110, 109, 154)' },
];
