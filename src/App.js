import logo from './logo.svg';
import './App.css';
import TextInfo from './components/TextInfo';
import ComponentA from './components/ComponetA';
import Nav from './components/Nav';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Title></Title>
      <TextInfo/>
      <ComponentA/>
      
    </div>
  );
}

export default App;
