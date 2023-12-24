import { Squash as Hamburger } from 'hamburger-react'
import React, { useEffect } from "react";

export default function Wrapper(props: any) {
    
    var [isOpen, setOpen] = React.useState(false);

    useEffect(() => {
        window.addEventListener("resize", _ =>{
            if(window.innerWidth >= 950 && document.querySelector('.header')?.classList.contains('hamburgerOpen')){
                setOpen(false);
                document.querySelector('.header')?.classList.remove('hamburgerOpen');
            };
        });
        document.querySelectorAll('button').forEach(element => {
            element.addEventListener('click', _ =>{
                setTimeout( () => {
                    document.querySelectorAll('.header')?.forEach(ele => {
                        ele.classList.remove('hamburgerOpen');
                    });
                    setOpen(false);
                }, 1000);
            })
        });
        if(isOpen){
            document.querySelector('.header')?.classList.add('hamburgerOpen');
            document.querySelector('.effect')?.setAttribute('style', 'display: flex !important')
        }
        else
            document.querySelector('.header')?.classList.remove('hamburgerOpen');
    });
    return (
    <>
        <Hamburger rounded toggled={isOpen} toggle={setOpen} />
    </>
    );
}