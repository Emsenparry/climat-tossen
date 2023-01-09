import './App.scss';
// SCSS
// import styles from './components/partials/footer/footer.module.scss'

// Components
import { Header } from './components/partials/header/header'
import { Main } from './components/partials/main/main'
// import Footer from './components/partials/footer/footer'

const App = () => {
  return (
    <div>
      <Header />
      <p>“Alle er vi en del af problemet såvel som af løsningen, og vores medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven for udslippet af drivhusgasser. Effekten af indsatsen afhænger af, hvor mange der trækker i den rigtige retning.”</p>
      <Main />
    </div>
  );
}

export default App;
