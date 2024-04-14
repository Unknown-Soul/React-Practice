import { useEffect } from "react";
import { useState } from "react";

function ParagraphWithTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date());
        },1000);

        return () =>{
            clearInterval(intervalId);
        }
    })

    return <div>
        <center>
            <p className="lead">
                This is the CurrentTime  :  {time.toLocaleDateString()} - {time.toLocaleTimeString()};
            </p>
        </center>
    </div>;
}

export default ParagraphWithTime;