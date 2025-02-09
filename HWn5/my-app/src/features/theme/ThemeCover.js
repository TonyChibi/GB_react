import { useSelector } from "react-redux";
import { selectTheme } from "./themeSlice";
import { Children } from "react";


function TemeCover({ ...props }) {
    let light = useSelector(selectTheme);
    let style = {
        border: light ? "1px solid black" : "1px solid white",
        background: light ? "white" : "black",
        color: light ? "black" : "white",
    }

    return (
        <div style={style}>
            {Children.map(props.children,
                child => <div style={style}>{child}</div>
            )}
        </div>
    );
}

export default TemeCover;