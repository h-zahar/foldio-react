import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FolderCreation from "./components/FolderCreation";
// import HomeIcon from "./components/HomeIcon";
import Dialog from "./components/Dialog";

function App() {
  // const folders1 = {
  //   folder1: {},
  //   folder2: {},
  //   folder3: {
  //     sub1: {},
  //     sub2: {
  //       subsub1: {},
  //     },
  //   },
  // };

  const folders = {
    name: "root",
    children: {
      id1: {
        name: "folder1",
        children: {},
      },
      id2: {
        name: "folder2",
        children: {},
      },
      id3: {
        name: "folder3",
        children: {
          id4: {
            name: "sub1",
            children: {},
          },
          id5: {
            name: "sub2",
            children: {
              id6: {
                name: "subsub1",
                children: {},
              },
            },
          },
        },
      },
    },
  };

  // const testFolders = {
  //   id1: {
  //     name: "whdnc",
  //     desc: "kwjbdc",
  //     child: {
  //       id21: {
  //         name: "ljnk",
  //         desc: "kwjdn",
  //         child: {},
  //       },
  //       id31: {
  //         name: "lkjh",
  //         desc: "kjbwd",
  //         child: {
  //           id41: {
  //             desc: "",
  //             child: {},
  //           },
  //         },
  //       },
  //     },
  //   },
  //   id2: {
  //     name: "jkn",
  //     desc: "kjb",
  //     child: {},
  //   },
  // };

  // let obj = {
  //   id1: {title: 'Folder 1', parent: 0, child:['id2','id4']},
  //   id2: {title: 'Folder 1 1', parent: 'id1', child:[]},
  //   id3: {title: 'Folder 2', parent: 0, child:[]},
  //   id4: {title: 'Folder 2 1', parent: 'id1', child:[]},
  // }

  // <Folder parent={id1} />

  const handleNavigation = (e) => {
    // setClicked(e.currentTarget.value);
    const tmp = [...path];
    tmp.push([e.currentTarget.id, e.currentTarget.value]);
    setPath(tmp);
    // console.log(renderedFolders);
    setRenderedFolders(renderedFolders.children[e.currentTarget.id]);
  };

  const handleCreate = () => {
    const fId = new Date().getTime();
    const tmp = { ...renderedFolders };
    tmp.children[fId] = { name: folderName, children: {} };
    setRenderedFolders(tmp);

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p[0];
      currentFolder.children[currentKey] =
        currentFolder.children[currentKey] || {};
      currentFolder = currentFolder.children[currentKey];
    });

    currentFolder.children[fId] = { name: folderName, children: {} };

    setAllFolders(temp2);
  };

  const handleDelete = (e) => {
    // console.log(e.currentTarget);
    const deleteFolder = e.id;
    const tmp = { ...renderedFolders };
    delete tmp.children[deleteFolder];
    // console.log(tmp);
    setRenderedFolders(tmp);

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p[0];
      currentFolder.children[currentKey] =
        currentFolder.children[currentKey] || {};
      currentFolder = currentFolder.children[currentKey];
    });

    delete currentFolder[deleteFolder];

    setAllFolders(temp2);
    // console.log(temp2);
  };

  const handleAccess = (e) => {
    if (path[path.length - 1] === path[Number(e.currentTarget.id)]) return;
    let tmp = { ...allFolders };
    path.slice(0, Number(e.currentTarget.id) + 1).forEach((p) => {
      tmp = tmp.children[p[0]];
    });
    const newPath = path.slice(0, Number(e.currentTarget.id) + 1);
    setPath(newPath);
    setRenderedFolders(tmp);
  };

  const resetToHome = () => {
    setRenderedFolders(allFolders);
    setPath([]);
    // setClicked("");
  };

  const handleModal = (e) => {
    setCurrEvent(e.currentTarget);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const [renderedFolders, setRenderedFolders] = useState(folders);
  const [folderName, setFolderName] = useState("");
  // const [clicked, setClicked] = useState("");
  const [path, setPath] = useState([]);
  const [allFolders, setAllFolders] = useState(folders);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currEvent, setCurrEvent] = useState(null);

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
        {/* <strong> */}
        <span
          // className="brand"
          onClick={resetToHome}
          style={{ cursor: "pointer" }}
        >
          <span className="brand">@: </span>#Root {/* </span> */}
          {path.length > 0 &&
            path.map((p, i) => {
              // let tmp = { ...allFolders };
              // const fName = tempFolders.children[p].name;
              // tempFolders = tempFolders.children[p];
              return (
                <button id={i} key={i} onClick={handleAccess}>
                  {" "}
                  / {p[1]}
                </button>
              );
            })}
        </span>
        {/* </strong> */}
      </p>
      <br />
      <Navigation
        handleNavigation={handleNavigation}
        handleDelete={handleModal}
        renderedFolders={renderedFolders}
      />
      <br />
      <br />

      {/* {clicked && (
        <button onClick={resetToHome}>
          <HomeIcon /> <span style={{ color: "#646cff" }}>Home</span>
        </button>
      )} */}

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
