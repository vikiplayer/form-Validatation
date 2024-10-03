import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
    <div className={Classes.backdrop} onClick={props.onConfrim}/>
    <Card className={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button onClick={props.onConfrim}>ok</Button>
      </footer>
    </Card>
    </div>
  );
}

export default ErrorModal;
