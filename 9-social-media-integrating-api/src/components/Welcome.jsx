const WelcomeMessage = ({ onGetPostClick }) => {
    return <>
        <center>
            <h1 className="noPost">No Post</h1>
            <button type="button" className="btn btn-primary" onClick={onGetPostClick} >Primary</button>
        </center>

    </>
}

export default WelcomeMessage;