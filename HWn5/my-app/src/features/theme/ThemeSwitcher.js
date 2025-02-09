import { useDispatch, useSelector } from "react-redux";
import { selectTheme, switchTheme } from "./themeSlice";



function ThemeSwitcher() {
    let light = useSelector(selectTheme);

    let dispatch = useDispatch();

    return (<div>
        <button onClick={() => dispatch(switchTheme())}>{light ? "dark" : "light"}</button>

    </div>);
}

export default ThemeSwitcher;