import './App.css';
import Footer from './components/Footer/Footer';
import Go from './components/Go/Go';
import Hero from './components/Hero/Hero';
import Join from './components/Joins/Join';
import Program from './components/Program/Program';
import FunMatch from './components/Reasons/FunMatch';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <FunMatch/>
      <Join/>
      <Go/>
      <Footer/>
    </div>
  );
}

export default App;
