import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/Home'


function App() {
  return (
    <div className="App">
      <Router basename="/lamplight_landing_page" >
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;