import './App.scss';

// Components
import { Header } from './components/partials/header/header'
import { Main } from './components/partials/main/main'
import { Footer } from './components/partials/footer/footer';
import { BrowserRouter } from 'react-router-dom'

// Router
import AppRouter from './components/App/AppRouter/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <p className='subText'>“Alle er vi en del af problemet såvel som af løsningen, og vores medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven for udslippet af drivhusgasser. Effekten af indsatsen afhænger af, hvor mange der trækker i den rigtige retning.”</p>
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
