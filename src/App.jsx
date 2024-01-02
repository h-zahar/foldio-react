import { useState } from "react";
import "./App.css";

function App() {
  const folders = {
    folder1: {},
    folder2: {},
    folder3: {
      sub1: {},
      sub2: {
        subsub1: {},
      },
    },
  };

  const handleAccess = (e) => {
    // if (clicked.length === 0) {
    // console.log(Object.keys(renderedFolders[e.target.value]));
    // setClicked(e.target.value);
    setRenderedFolders(renderedFolders[e.target.value]);
    // }
  };

  // const [clicked, setClicked] = useState("");
  // console.log("tar", clicked);

  const [renderedFolders, setRenderedFolders] = useState(folders);

  return (
    <>
      <h4>Manage your Folders</h4>
      {Object.keys(renderedFolders).length === 0 && <p>No folder found!</p>}
      {Object.keys(renderedFolders).map((f) => {
        return (
          <button key={f} value={f} onClick={handleAccess}>
            {f}
          </button>
        );
      })}
    </>
  );
}

export default App;
