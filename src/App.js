import { Provider } from "react-redux";
import { Route } from 'react-router-dom';


import './gird.css';
import './resetcss.css';
import "./Global.css";


import Container from './components/layout/container';
import Menumobile from "./components/layout/menumobile";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/footer";

import store from './redux/store';

const Home = () => (
  <div className="grid">
    <div className="wide">
      <Menumobile />
      <Container />
      <Menu />
      <Footer />
    </div>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={Home} />
    </Provider>
  );
}

export default App;
