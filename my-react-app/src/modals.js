import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import logo from './logo.svg';
import './App.css';
import Module from "./module.js"

function Modal1() {
    function get(){
       let one = document.getElementById('n1').value
      let two = document.getElementById('n2').value

      console.log("name : "+  one + "email : "+ two)

    }

    function close(){
        let id = document.getElementById("mod");
        id.style.display="none"
    }
    return (
      <div
      id='mod'
        className="modal show"
        style={{ display: 'none', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton id='close' onClick={close}>
            <Modal.Title>BEEEEEEEEE</Modal.Title>
          </Modal.Header >
  
          <Modal.Body id='bod'>
            
                <p>name</p>
                <input name='name'id='n1' type='text'></input>
                <p>email</p>
                <input name="email" id="n2" type='text'></input>

                <button type='submit' onClick={get}>ok</button>
           
          </Modal.Body>
  
          <Modal.Footer id='bod'>
           
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

export default Modal1;
