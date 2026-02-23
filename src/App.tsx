import React from "react";
import "./App.css";
import coconut from "./assets/coconut.jpg"
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

export default function App(): React.JSX.Element {
    return (
        <div className="App-header">
            <header>
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>
                Behold the coconut.
            </h1>
            <img
                src={coconut}
                alt="The coconut that holds this thing together."
            />
            <ul>
                <li>This is a coconut.</li>
                <li>This coconut holds this project together.</li>
                <li>I will not be answering any further questions.</li>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "50px",
                                    height: "10px",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "50px",
                                    height: "10px",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </ul>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}