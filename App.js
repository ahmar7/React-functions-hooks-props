import { useState, useEffect } from "react";
import "./App.css";
import Propsis from "./props";

function App() {
  useEffect(() => {
    console.log("I'm available on any render");
  });
  useEffect(() => {
    console.log("I'm available on 1st render");
  }, []);

  // useEffect(() => {
  //   console.log("I'm available on state change");
  // }, [name]);

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  const [obj, setobj] = useState({
    school: "educator",
    rollono: 89,
  });
  const [name, setname] = useState("ahmar");
  const [email, setemail] = useState("ahmar@gmail.com");

  const outdate = () => {
    setname("ahmar");
    setemail("ahmarjabbar@gmail.com");
  };
  const updatename = () => {
    setname("ali");
    setemail("aliraza@gmail.com");
  };
  const objupdate = () => {
    setobj({
      ...obj,
      school: "almustafa",
      rollono: 10,
    });
  };

  return (
    <div>
      <Propsis name="ahmar jabbar" email="ahmarjabbar7@gmail.com" />
      <h1> React Hooks</h1>
      <h1> {name}</h1>
      <h1> {email}</h1>
      <h1>{obj.school}</h1>
      <h1>{obj.rollono}</h1>
      <button onClick={objupdate}>Update OBJ</button>
      <button onClick={updatename}>UPDATE</button>
      <br />
      <button onClick={outdate}>OUTDATE</button>
      <br />
      <button onClick={() => setname("ali")}>NAME UPDATE</button>
      <br />
      <button onClick={() => setemail("ali@gmail.com")}>EMAIL UPDATE</button>
    </div>
  );
}

export default App;
