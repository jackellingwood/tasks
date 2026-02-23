import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function change() {
        if (qType === "multiple_choice_question") {
            setQType("short_answer_question");
        } else {
            setQType("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {qType === "multiple_choice_question" ?
                "  Multiple Choice"
            :   "  Short Answer"}
        </div>
    );
}
