
import './App.css';
import Products from "./Components/Products";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'




import Hello from "./Hello.js";
import $ from 'jquery';
import '../src/components/css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/components/css/animate.min.css';
// import '../src/components/css/fontawesome-all.min.css';
import '../src/components/css/fullpage.min.css';
import '../src/components/css/jquery.multiscroll.min.css';
import '../src/components/css/magnific-popup.css';
import '../src/components/css/meanmenu.min.css';
import '../src/components/css/nice-select.css';
import '../src/components/css/normalize.css';
import '../src/components/css/rt-canvas-menu.css';
import '../src/components/css/swiper.min.css';
import '../src/components/css/style.css';
import './components/Disp'
import './Components/Products';


import './App.css';
import Disp from "./components/Disp";

function App() {
  return (

    <div className="App">
      <Hello />
      <Products/>
      <Disp />
  </div>
    

  );
}

export default App;
