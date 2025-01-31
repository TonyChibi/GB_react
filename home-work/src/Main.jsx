import { Link } from "@mui/material";

function Main({ Children }) {
    return (<>
        <h1>Main page</h1>
        <p>there still isn't so much<br /> you can go </p>
        <Link to="/about" href="/about">to about page</Link>
        {Children}
    </>);
}

export default Main;