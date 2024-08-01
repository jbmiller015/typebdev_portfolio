import React, {useState} from "react";
import './style/popups.css'

/**
 * Anchor-like text that spawns a popup message when user hovers over text.
 * TODO: middleware to replace specific text with this element. Text will be skill names from the skills.json file.
 * TODO: middleware will parse incoming props text, picking out words that are the same as skill names.
 * TODO: Once found, skill data is given to this component, rendered, and this component will be returned to the end-component rather than the original word.
 * @returns {JSX.Element}
 * @constructor
 */
const TextPopup = (props) => {

    const {word, data} = props;


    const test = {
        "React": {
            "description": "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
            "exp": {
                "years": 3,
                "notes": "React is one of my favorite ways to build apps and websites! The way components stack and interact with one another just makes sense to me."
            },
            "icon": {
                "name": "fa-brands fa-react"
            }
        }
    }

    const text = word
    const header = word
    const description = data ? data.description : ""
    const [show, setShow] = useState(false);

    const popup = () => {
        return (<div style={{
                position: "absolute",
                bottom: "10%",
                backgroundColor: "white",
                width: "200%",
                overflowWrap: "break-word",
                zIndex: "100"
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
                onMouseEnter={() => setTimeout(() => {
                    setShow(true);
                }, 350)}
                onMouseLeave={() => setShow(false)}>
                {text}
            </button>
        </div>);
    }

    return hoverText()
}
export default TextPopup;
