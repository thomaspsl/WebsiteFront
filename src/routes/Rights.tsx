import { useEffect } from "react";

export default function Wrapper(props: any) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        document.title = props.title;
        document.querySelectorAll("button").forEach((element) => {
          if (element?.classList.contains("current"))
            element?.classList.remove("current");
        });
        document.querySelectorAll("#rights").forEach((element) => {
          element?.classList.add("current");
        });
      });
    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/rights.css'} />

        <div className="content">

            <div className="middle">

                <span>Work in progress</span>

            </div>

            <div className="middle">

                <span>Work in progress</span>

            </div>
            
        </div>
    </>
    );
}