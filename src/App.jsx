import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FolderCreation from "./components/FolderCreation";
import HomeIcon from "./components/HomeIcon";
import Dialog from "./components/Dialog";

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
    // console.log(e.currentTarget);
    const deleteFolder = e.id;
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

  const handleModal = (e) => {
    setCurrEvent(e.currentTarget);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const [renderedFolders, setRenderedFolders] = useState(folders);
  const [folderName, setFolderName] = useState("");
  const [clicked, setClicked] = useState("");
  const [path, setPath] = useState([]);
  const [allFolders, setAllFolders] = useState(folders);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currEvent, setCurrEvent] = useState(null);
  // console.log(isDeleteModalOpen);
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
      <br />
      <Navigation
        handleNavigation={handleNavigation}
        handleDelete={handleModal}
        renderedFolders={renderedFolders}
      />
      <br />
      <br />

      {clicked && (
        <button onClick={resetToHome}>
          <HomeIcon /> <span style={{ color: "#646cff" }}>Home</span>
        </button>
      )}

      <Dialog
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        handleDelete={handleDelete}
        e={currEvent}
      />
    </>
  );
}

export default App;
