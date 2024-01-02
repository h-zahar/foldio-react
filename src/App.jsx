import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FolderCreation from "./components/FolderCreation";

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
    setClicked(e.target.value);
    setRenderedFolders(renderedFolders[e.target.value]);
  };

  const handleCreate = () => {
    const tmp = { ...renderedFolders };
    tmp[folderName] = {};
    setRenderedFolders(tmp);
    setFolderName("");
  };

  const resetToHome = () => {
    setRenderedFolders(folders);
    setClicked("");
  };

  const [renderedFolders, setRenderedFolders] = useState(folders);
  const [folderName, setFolderName] = useState("");
  const [clicked, setClicked] = useState("");

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
      <FolderCreation
        handleCreate={handleCreate}
        setFolderName={setFolderName}
      />
      <br />

      {clicked && <button onClick={resetToHome}>{"<-"} Home</button>}
    </>
  );
}

export default App;
