import './App.css';
import Footer from './components/footer/Footer';
import Matrix from './components/matrix/matrix';
function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Sudoku Solver</h1>
      <Matrix/>
      <Footer/>
    </div>
  );
}

export default App;
