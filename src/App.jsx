import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

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

  const handleNavigation = (e) => {
    setRenderedFolders(renderedFolders[e.target.value]);
  };

  const handleCreate = () => {
    const tmp = { ...renderedFolders };
    tmp[folderName] = {};
    setRenderedFolders(tmp);
    setFolderName("");
  };

  const [renderedFolders, setRenderedFolders] = useState(folders);
  const [folderName, setFolderName] = useState("");

  return (
    <>
      <h4>
        <span className="brand">Foldio</span> - Manage your Folders
      </h4>
      <Navigation
        handleNavigation={handleNavigation}
        renderedFolders={renderedFolders}
      />
      <br />
      {/* create btn */}
      <input
        className="input-field"
        placeholder="Folder Name"
        onChange={(e) => setFolderName(e.target.value)}
      ></input>
      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>
    </>
  );
}

export default App;
