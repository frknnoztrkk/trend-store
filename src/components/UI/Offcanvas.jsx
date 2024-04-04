import { Fragment } from "react";
import { ReactDOM } from "react-dom";

import "./Offcanvas.css";

const Offcanvas = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
  };

  const OffcanvasOverlay = (props) => {
    return (
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Offcanvas;
