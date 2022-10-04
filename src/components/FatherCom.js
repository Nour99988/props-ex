import React from "react";
import SonComp from "./SonComp";

const FatherCom = (props) => {
  //   console.log(props);
  return (
    <>
      <div>FatherCom</div>
      <SonComp length={props.length} />
    </>
  );
};

export default FatherCom;
