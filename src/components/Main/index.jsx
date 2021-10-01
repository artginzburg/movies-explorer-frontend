import { useTitle } from '../../hooks/useTitle';

import Footer from '../Footer';
import Header from '../Header';

import AboutMe from './AboutMe';
import AboutProject from './AboutProject';
import NavTab from './NavTab';
import Portfolio from './Portfolio';
import Promo from './Promo';
import Techs from './Techs';

function Main({ loggedIn }) {
  useTitle('О проекте');

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
