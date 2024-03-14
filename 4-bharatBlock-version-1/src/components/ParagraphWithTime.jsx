function ParagraphWithTime() {
    let time = new Date();
    return <div>
        <center>
            <p className="lead">
                This is the CurrentTime  :  {time.toLocaleDateString()} - {time.toLocaleTimeString()};
            </p>
        </center>
    </div>;
}

export default ParagraphWithTime;