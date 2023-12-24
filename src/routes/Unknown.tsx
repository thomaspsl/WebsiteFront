import { useEffect } from "react";

export default function Wrapper(props: any) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        document.title = props.title;
    });
    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/unknown.css'} />

        <div className="content">

            <div className="middle">

                <span>Work in progress</span>

                {/* <h2 className="rotate">You are quite an adventurer</h2>

                <img src={process.env.PUBLIC_URL + '/assets/pictures/qr.png'} alt="Error 404" />

                <div className="courageous rotate">

                    <span>We don't change the good old habits</span>

                    <span>Only for the most courageous among you !</span>

                </div> */}

            </div>
            
        </div>
    </>
    );
}