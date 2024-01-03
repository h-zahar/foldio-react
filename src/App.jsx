import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FolderCreation from "./components/FolderCreation";
import HomeIcon from "./components/HomeIcon";

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
    setClicked(e.currentTarget.value);
    const tmp = [...path];
    tmp.push(e.currentTarget.value);
    setPath(tmp);
    setRenderedFolders(renderedFolders[e.currentTarget.value]);
  };

  const handleCreate = () => {
    const tmp = { ...renderedFolders };
    tmp[folderName] = {};
    setRenderedFolders(tmp);

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p;
      currentFolder[currentKey] = currentFolder[currentKey] || {};
      currentFolder = currentFolder[currentKey];
    });

    currentFolder[folderName] = {};

    setAllFolders(temp2);
  };

  const handleDelete = (e) => {
    const deleteFolder = e.currentTarget.id;
    const tmp = { ...renderedFolders };
    delete tmp[deleteFolder];

    setRenderedFolders(tmp);

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p;
      currentFolder[currentKey] = currentFolder[currentKey] || {};
      currentFolder = currentFolder[currentKey];
    });

    delete currentFolder[deleteFolder];

    setAllFolders(temp2);
    // console.log(temp2);
  };

  const handleAccess = (e) => {
    if (path[path.length - 1] === path[Number(e.currentTarget.id)]) return;
    let tmp = { ...allFolders };
    path.slice(0, Number(e.currentTarget.id) + 1).forEach((p) => {
      tmp = tmp[p];
    });
    const newPath = path.slice(0, Number(e.currentTarget.id) + 1);
    setPath(newPath);
    setRenderedFolders(tmp);
  };

  const resetToHome = () => {
    setRenderedFolders(allFolders);
    setPath([]);
    setClicked("");
  };

  const [renderedFolders, setRenderedFolders] = useState(folders);
  const [folderName, setFolderName] = useState("");
  const [clicked, setClicked] = useState("");
  const [path, setPath] = useState([]);
  const [allFolders, setAllFolders] = useState(folders);

  return (
    <>
      <h2>
        <span className="brand">Foldio</span>
      </h2>
      <div>
        <span>&quot;Manage your Folders&quot;</span>
      </div>

      <FolderCreation
        handleCreate={handleCreate}
        setFolderName={setFolderName}
      />
      <br />
      <p>
        <strong>
          <span
            className="brand"
            onClick={resetToHome}
            style={{ cursor: "pointer" }}
          >
            @:{" "}
          </span>
          {path.length > 0
            ? path.map((p, i) => {
                return (
                  <button id={i} key={i} onClick={handleAccess}>
                    {" "}
                    / {p}
                  </button>
                );
              })
            : "#Home"}
        </strong>
      </p>
      <Navigation
        handleNavigation={handleNavigation}
        handleDelete={handleDelete}
        renderedFolders={renderedFolders}
      />
      <br />
      <br />

      {clicked && (
        <button onClick={resetToHome}>
          <HomeIcon /> <span style={{ color: "#646cff" }}>Home</span>
        </button>
      )}
    </>
  );
}

export default App;
