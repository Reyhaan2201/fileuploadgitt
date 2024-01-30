import React,{useContext} from "react";
import UserContext from "./Context";

function Component3() {
    const user = useContext(UserContext);

    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
}

export default Component3;
