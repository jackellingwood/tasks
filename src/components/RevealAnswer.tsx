import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    function toggleShow() {
        setShow(!show);
    }

    return (
        <div>
            <Button onClick={toggleShow}>Reveal Answer</Button>
            {show && "  42"}
        </div>
    );
}
