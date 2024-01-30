import React,{useState} from "react";
import UserContext from "./Context";
import Component3 from "./Component3";


function Componet1() {
    const [user, setUser] = useState("Anyone");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component3/>
      </UserContext.Provider>
    );
}

export default Componet1;
