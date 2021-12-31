import React from "react";
import Button from "./Button";

export default ({ section }) => {
    if (!section) return false;

    return (
        <div style={{
            "background": section.background,
            width: "100%", height: "200px", textAlign: "center", paddingTop: "15px"
        }}>
            {section.text}<br />
            { section.buttons.length > 0 && section.buttons.map(button => <Button button={button}/> )}
        </div>
    )
}