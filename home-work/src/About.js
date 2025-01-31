import { Link } from "@mui/material";

function About({ Children }) {
    return (
        <>
            <h1>About page</h1>
            <p>There is nothing to talk about</p>
            <Link to="/" href="/">Main page</Link>
            {Children}
        </>
    );
}

export default About;