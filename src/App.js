import Header from './Components/Header/Header';
import './App.css';
import SimpleBottomNavigation from './Components/MainNav';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './Components/Page/Home';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
      <Route path='/home' component={Home}/>
    </Container>
    </div>

    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
