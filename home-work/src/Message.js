import './style.css';

function Message({ text, otherText }) {

    return (
        <>
            <p class="text">{text}</p>
            <p class="text">{otherText}</p>
        </>

    );
}

export default Message;