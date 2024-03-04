import logo from './logo.svg';
import './App.css';
import backgroundImage from './assets/img/back1.jpg'; // Import the image
import { NavBar } from "./components/NavBar";
import { Skills } from './components/Skills';




function App() {
  return (


    <div className="App">
                            <NavBar/>


      <div className="hello_there">

      </div>


      <div className='back_end'>
              <div className="main_div">
        <div className="inside_panel">

          <div>
          </div>
          <div>
            
          </div>
        </div>

        <div className="ip2 "> 


          <div className="ip22 px-3 py-3">
            <h1  class="txt1"    >Hello There... <br></br>I'am Mrinmoy Bordoloi</h1>
          </div>

          <div className='port'>
            <h3>Welcome to my Portfolio</h3>
          </div>




        </div>

            <img src={backgroundImage}  className="port2" alt='h1'></img>

            <div className='bge'>
            
            </div>
      </div>

      </div>

      <div>
        <Skills/>
      </div>

    </div>
  );
}

export default App;
