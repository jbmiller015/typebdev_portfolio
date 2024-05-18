import React, {useState, useEffect} from "react";

const UNMOUNTED = "unmounted";
const EXITED = "exited";
const ENTERING = "entering";
const ENTERED = "entered";
const EXITING = "exiting";

const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0}
};

const Slider = ({expanded, duration, children, className, style}) => {
    const [status, setStatus] = useState(UNMOUNTED);

    useEffect(() => {
        if (expanded) {
            performEnter();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let nextStatus = null;

        if (expanded) {
            if (status !== ENTERING && status !== ENTERED) {
                nextStatus = ENTERING;
            }
        } else {
            if (status === ENTERING || status === ENTERED) {
                nextStatus = EXITING;
            }
        }

        updateStatus(nextStatus);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expanded]);

    const updateStatus = (nextStatus) => {
        if (nextStatus !== null) {
            if (nextStatus === ENTERING) {
                performEnter();
            } else {
                performExit();
            }
        } else if (status === EXITED) {
            setStatus(UNMOUNTED);
        }
    };

    const performEnter = () => {
        setStatus(ENTERING);
        setTimeout(() => {
            setStatus(ENTERED);
        }, 0);
    };

    const performExit = () => {
        setStatus(EXITING);
        setTimeout(() => {
            setStatus(EXITED);
        }, duration);
    };

    if (status === UNMOUNTED) {
        return null;
    }

    return (
        <div
            className={className}
            style={{
                ...style,
                transition: `opacity ${duration}ms ease-in-out`,
                opacity: 0.1,
                ...transitionStyles[status]
            }}
        >
            {children}
        </div>
    );
};

Slider.defaultProps = {
    show: false,
    duration: 300
};

export default Slider;
