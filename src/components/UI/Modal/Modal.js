import React from 'react';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} closed={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default Modal;
