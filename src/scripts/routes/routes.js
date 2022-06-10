import Artikel from '../views/pages/artikel';
import Beranda from '../views/pages/beranda';
import DataPantauan from '../views/pages/data-pantauan';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/data-pantauan': DataPantauan,
  '/artikel': Artikel,
};

export default routes;
