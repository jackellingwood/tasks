import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface HalveDoubleButtonsProps {
    // The type is "a function that consumes a number and returns nothing"
    setValue: (value: number) => void;
    value: number;
}

function Doubler({
    setValue,
    value,
}: HalveDoubleButtonsProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setValue,
    value,
}: HalveDoubleButtonsProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setValue={setValue} value={value}></Doubler>
            <Halver setValue={setValue} value={value}></Halver>
        </div>
    );
}
