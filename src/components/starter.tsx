import { useEffect, useState } from "react";

const StarterPage = (props: any) => {
  const [color, setColor] = useState("white");
  useEffect(() => {
    setTimeout(() => {
      setColor("black");
    }, 2000);
  }, []);
  return (
    <div className="showcase">
      <div className="video-container"></div>
      <div className="content" style={{ color: color }}>
        <h1>Shoot For The Stars</h1>
        <h3>Full screen video landing page</h3>
        <button className="button" onClick={() => props.setStart(true)}>
          {" "}
          <span className="actual-text">&nbsp;Get Started&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;&nbsp;
          </span>
        </button>
      </div>
    </div>
  );
};
export default StarterPage;
