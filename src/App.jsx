import './styles/tokens.css';
import './styles/base.css';
import StaticLayer from './components/StaticLayer';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <StaticLayer />
      <div className="app-shell">
        <Home />
      </div>
    </>
  );
}
