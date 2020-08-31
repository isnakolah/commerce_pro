import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    axios.get("/").then(res => setState(res.data));
  }, []);

  const { text } = state.response;
  return (
    <div className="jumbotron text-center font-weight-bold">
      <p>{text}</p>
    </div>
  );
};

export default App;
