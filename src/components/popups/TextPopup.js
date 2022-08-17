import React, {useState} from "react";
import './style/popups.css'

/**
 * Anchor-like text that spawns a popup message when user hovers over text.
 * TODO: Middleware to replace specific text with this element. Text will be skill names from the skills.json file.
 * TODO: Middleware will parse incoming props text, picking out words that are the same as skill names.
 * TODO: Once found, skill data is given to this component, rendered, and this component will be returned to the end-component rather than the original word.
 * @returns {JSX.Element}
 * @constructor
 */
const TextPopup = (props) => {

    const text = "test";
    const header = "Header";
    const description = "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription"
    const [show, setShow] = useState(false);

    const popup = () => {
        return (<div style={{
                position: "absolute",
                bottom: "1.2%",
                backgroundColor: "white",
                maxWidth: "30%",
                overflowWrap: "break-word"
            }}>
                <div className={"ui segment"}>
                    <h3 className={"ui header"}>{header}</h3>
                    <div className={"content"}>{description}</div>
                </div>
            </div>
        );
    }

    const hoverText = () => {
        return (<div>
            {show ? popup() : null}
            <button
                type="button"
                className="link-button"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                {text}
            </button>
        </div>);
    }

    return (<div style={{flexDirection:"row", display:"flex", alignContent:"flex-start"}}><p>{text}</p>{hoverText()}<p>{text}</p></div>);
}
export default TextPopup;
