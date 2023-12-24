import { useEffect } from "react";

export default function Wrapper(props: any) {
  useEffect(() => {
    mouseAnimation();
  });
  return (
    <>
      <div className="mouse">

        <div className="pointer"></div>
        
      </div>
    </>
  );
}

function mouseAnimation() {
  var pointer = document.querySelector(".pointer");
  var mouse = document.querySelector(".mouse");
  var burger = document.querySelector(".hamburger-react");
  var up = document.querySelector(".up");

  document.addEventListener("mousemove", (event) => {
    var mouseX = event.clientX + 15;
    var mouseY = event.clientY + 15;
    mouse!.setAttribute(
      "style",
      "transform:translate(" + mouseX + "px," + mouseY + "px);"
    );
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    if(isMobileDevice){
      mouse!.classList.remove('invisible');
      setTimeout(() => {
        mouse!.classList.add('invisible');
      }, 1000);
    }
  });
  up?.addEventListener("click", (_) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  up?.addEventListener("mouseenter", (_) => {
    pointer?.classList.add("zooming");
  });
  up?.addEventListener("mouseleave", (_) => {
    pointer?.classList.remove("zooming");
  });
  document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("mouseenter", (_) => {
      pointer?.classList.add("zooming");
      element.style.setProperty('--hidden', 'block')
    });
    element.addEventListener("mouseleave", (_) => {
      pointer?.classList.remove("zooming");
    });

    burger?.addEventListener("mouseenter", (_) => {
      pointer?.classList.add("zooming");
    });
    burger?.addEventListener("mouseleave", (_) => {
      pointer?.classList.remove("zooming");
    });
  });
}