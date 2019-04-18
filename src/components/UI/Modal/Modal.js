import React from 'react';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = props => {
  const attachedClasses = [
    classes.Modal,
    props.show ? classes.Show : classes.Hide
  ];
  return (
    <React.Fragment>
      <Backdrop show={props.show} closed={props.modalClosed} />
      <div className={attachedClasses.join(' ')}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
