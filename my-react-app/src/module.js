import logo from './logo.svg';
import './App.css';
import Bee from "./bee.png";
import Cash from "./cash.jpg";
import Star from "./star.jpg";


function Module() {
  return (
    <div className='module'>
     <img src={Bee}></img>
     <img src={Cash}></img>
     <img src={Star}></img>

    </div>
  );
}

export default Module;
