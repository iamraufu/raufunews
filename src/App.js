import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
