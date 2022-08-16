import React from "react";

/**
 * Anchor-like text that spawns a popup message when user hovers over text.
 * TODO: Middleware to replace specific text with this element. Text will be skill names from the skills.json file.
 * TODO: Middleware will parse incoming props text, picking out words that are the same as skill names.
 * TODO: Once found, skill data is given to this component, rendered, and this component will be returned to the end-component rather than the original word.
 * @returns {JSX.Element}
 * @constructor
 */
const TextPopup = () => {

    const renderComp = () => {
        return (<div>
                <div className="ui icon button"
                     data-content="The default theme's basic popup removes the pointing arrow."
                     data-variation="basic">
                    <i className="add icon"></i>
                </div>
            </div>
        );
    }

    return (<div>{renderComp()}</div>);
}
export default TextPopup;
