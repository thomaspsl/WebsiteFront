import { Header } from "../layout/Header"
import { Main } from "../layout/Main";
import { Footer } from "../layout/Footer"

import { useEffect } from "react";

const Wavy = {start: "#1A1A1B", end: "#727272", duration: 2500};

export default function Wrapper(props: any) {
    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <Header data={Wavy} />

            <Main />
        
        <Footer data={Wavy} />    
    </>
    );
}