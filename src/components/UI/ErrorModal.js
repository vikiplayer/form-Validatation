import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import Classes from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={Classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button onClick={props.onConfirm}>okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;