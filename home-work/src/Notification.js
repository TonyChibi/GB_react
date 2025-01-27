function Notification({ text, id }) {

    return (
        <div className="notification" id={id} >
            <p className="notification__text">{text}</p>
            <button className="notification__delete_btn">delete</button>
        </div>
    );
}

export default Notification;