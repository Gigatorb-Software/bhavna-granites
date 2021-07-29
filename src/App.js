import Hello from "./Hello.js";
// import '../src/Components/css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// // import '../src/Components/css/animate.min.css';
// import '../src/Components/css/fontawesome-all.min.css';
// import '../src/Components/css/fullpage.min.css';
// import '../src/Components/css/jquery.multiscroll.min.css';
// import '../src/Components/css/magnific-popup.css';
// import '../src/Components/css/meanmenu.min.css';
// import '../src/Components/css/nice-select.css';
// import '../src/Components/css/normalize.css';
// import '../src/Components/css/rt-canvas-menu.css';
// import '../src/Components/css/swiper.min.css';
// import '../src/Components/css/style.css';
import Products from './Components/Products.js';
import Disp from './Components/Disp.js';
import 'react-sticky-header/styles.css';
import reactRouterDom from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (

    <div class="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Hello />
          </Route>
        </Switch>
      </Router>
      <Hello />
      <Products />
      <Disp />

    
        

    </div>
    
  );
}

export default App;
