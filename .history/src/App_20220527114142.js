import { Provider } from "react-redux";

import './gird.css';
import './resetcss.css';
import "./Global.css";


import Container from './components/layout/container';
import Menumobile from "./components/layout/menumobile";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/footer";

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="grid">
        <div className="wide">
          <Menumobile />
          <Container />
          <Menu />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
