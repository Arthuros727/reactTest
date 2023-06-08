import logo from './logo.svg';
import './App.css';
import Bee from "./bee.png";
import Cash from "./cash.jpg";
import Star from "./star.jpg";
import Modal1 from "./modals.js"



function Module() {

    function show(){
        let u = document.getElementById("mod");
        u.style.display="block"

    }
  return (
    <div className='module'>
        <Modal1 />
     <img src={Bee} onClick={show}></img>
     <img src={Cash}></img>
     <img src={Star}></img>

    </div>
  );
}

export default Module;
