import { useState, useRef, useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Spline from "@splinetool/react-spline";
import Work from "./Work";
import Education from "./Education";
import useWindowSize from "./hooks/useWindowSize";
import "./index.css";
function App() {
  const size = useWindowSize();
  const sectionRef = useRef(null);
  const [handleIndex, setHandleIndex] = useState(null);
  const iframe =
    '<iframe style="opacity: 0;" onload="this.style.opacity = 1;"  src="https://my.spline.design/untitled-9e64c38075f924578a00ca701db69a54/" frameborder="0" loading="lazy" width="100%" height="1200px" ></iframe>';

  const iframe2 =
    '<iframe  style="opacity: 0;" onload="this.style.opacity = 1;" src="https://my.spline.design/untitledcopy-0ff0b51e415823e1a93344c88015d779/" frameborder="0" loading="lazy" width="100%" height="1200px" ></iframe>';

  const iframe3 =
    '<iframe  style="opacity: 0;" onload="this.style.opacity = 1;" src="https://my.spline.design/untitled-d08b8ca09cbe10b4a4a00486e089b082/" frameborder="0" loading="lazy" width="100%" height="1200px" ></iframe>';

  function handleScroll(i) {
    console.log(i);
    setHandleIndex(i);
  }

  useEffect(() => {
    console.log("handleIndex before scrolling", handleIndex);
    if (sectionRef.current) {
      console.log("scroll to ", handleIndex);
      sectionRef.current.scrollIntoView();
      setHandleIndex(null);
    }
  }, [handleIndex]);
  return (
    <div className="holder">
      <Header onClick={handleScroll} />
      <Content onClick={handleScroll} />
      <Iframe
        iframe={size.width > 1300 ? iframe2 : iframe}
        cnprop={size.width > 1300 ? "splinerLarge" : "spliner"}
      />
      <TechStack ref={handleIndex === 0 ? sectionRef : null} />
      <Work ref={handleIndex === 1 ? sectionRef : null} />
      <Education ref={handleIndex === 2 ? sectionRef : null} />
      <Contact ref={handleIndex === 3 ? sectionRef : null} />
      <Iframe iframe={iframe3} cnprop={"spliner2"} />
      <div className="splineBlock"></div>
    </div>
  );
}

function Iframe(props) {
  return (
    <div
      className={props.cnprop}
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default App;
