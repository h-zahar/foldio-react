import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FolderCreation from "./components/FolderCreation";
// import HomeIcon from "./components/HomeIcon";
import Dialog from "./components/Dialog";
import Settings from "./components/Settings";

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
    localStorage.setItem("path", JSON.stringify(tmp));
    // console.log(renderedFolders);
    setRenderedFolders(renderedFolders.children[e.currentTarget.id]);
    localStorage.setItem(
      "renderedFolders",
      JSON.stringify(renderedFolders.children[e.currentTarget.id])
    );
  };

  const getFName = (fN, og, i) => {
    i = !i ? 0 : i;

    const foundD = !renderedFolders?.children
      ? []
      : Object.values(renderedFolders.children).filter((f) => f.name === fN);

    if (foundD.length === 0) return fN;
    return getFName(og + ` (${i + 1})`, og, ++i);
  };

  const handleCreate = (nFName = "") => {
    const fId = new Date().getTime();

    if (nFName.trim() === "" || nFName === null) {
      return alert("No Folder Created!!");
    }

    // if (renderedFolders.children[path[path.length - 1][0]] === nFName) {
    //   nFName = "bla vla";
    // }
    // console.log(renderedFolders.children);

    const fName = getFName(nFName, nFName, null) || folderName;
    const tmp = { ...renderedFolders };
    !tmp?.children ? (tmp.children = {}) : null;
    tmp.children[fId] = { name: fName, children: {} };
    setRenderedFolders(tmp);
    localStorage.setItem("renderedFolders", JSON.stringify(tmp));

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p[0];
      currentFolder.children[currentKey] =
        currentFolder.children[currentKey] || {};
      currentFolder = currentFolder.children[currentKey];
    });

    !currentFolder?.children ? (currentFolder.children = {}) : null;
    currentFolder.children[fId] = { name: fName, children: {} };

    setAllFolders(temp2);
    localStorage.setItem("allFolders", JSON.stringify(temp2));
  };

  const handleDelete = (e) => {
    // console.log(e.currentTarget);
    const deleteFolder = e.id;
    const tmp = { ...renderedFolders };
    delete tmp.children[deleteFolder];
    // console.log(tmp);
    setRenderedFolders(tmp);
    localStorage.setItem("renderedFolders", JSON.stringify(tmp));

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p[0];
      currentFolder.children[currentKey] =
        currentFolder.children[currentKey] || {};
      currentFolder = currentFolder.children[currentKey];
    });

    delete currentFolder.children[deleteFolder];

    setAllFolders(temp2);
    localStorage.setItem("allFolders", JSON.stringify(temp2));
    // console.log(temp2);
  };

  const handleSettings = (e, value) => {
    const changedFolder = e;
    const tmp = { ...renderedFolders };
    tmp.children[changedFolder].color = value;
    // console.log(tmp);
    setRenderedFolders(tmp);
    localStorage.setItem("renderedFolders", JSON.stringify(tmp));

    const temp2 = { ...allFolders };

    let currentFolder = temp2;

    path.map((p) => {
      const currentKey = p[0];
      currentFolder.children[currentKey] =
        currentFolder.children[currentKey] || {};
      currentFolder = currentFolder.children[currentKey];
    });

    currentFolder.children[changedFolder].color = value;

    setAllFolders(temp2);
    localStorage.setItem("allFolders", JSON.stringify(temp2));
  };

  const handleAccess = (e) => {
    if (path[path.length - 1] === path[Number(e.currentTarget.id)]) return;
    let tmp = { ...allFolders };
    path.slice(0, Number(e.currentTarget.id) + 1).forEach((p) => {
      tmp = tmp.children[p[0]];
    });
    const newPath = path.slice(0, Number(e.currentTarget.id) + 1);
    setPath(newPath);
    localStorage.setItem("path", JSON.stringify(newPath));
    setRenderedFolders(tmp);
    localStorage.setItem("renderedFolders", JSON.stringify(tmp));
  };

  const resetToHome = () => {
    setRenderedFolders(allFolders);
    localStorage.setItem("renderedFolders", JSON.stringify(allFolders));
    setPath([]);
    localStorage.setItem("path", JSON.stringify([]));
    // setClicked("");
  };

  const handleModal = (e) => {
    setCurrEvent(e.currentTarget);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleChangeModal = (e) => {
    setCurrNewEvent(e.currentTarget);
    setIsSettingsModalOpen(!isSettingsModalOpen);
  };

  const getCurrColor = (e) => {
    const key = e;
    console.log(renderedFolders.children[key]);
    return renderedFolders.children[key]?.color;
  };

  const [renderedFolders, setRenderedFolders] = useState({});
  const [folderName, setFolderName] = useState("");
  // const [clicked, setClicked] = useState("");
  const [path, setPath] = useState([]);
  const [allFolders, setAllFolders] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currEvent, setCurrEvent] = useState(null);
  const [currNewEvent, setCurrNewEvent] = useState(null);

  const [folderColor, setFolderColor] = useState("default");
  // console.log(path);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  useEffect(() => {
    const frs = JSON.parse(localStorage.getItem("allFolders"));
    const rFrs = JSON.parse(localStorage.getItem("renderedFolders"));
    const pth = JSON.parse(localStorage.getItem("path"));
    const fc = JSON.parse(localStorage.getItem("folderColor"));

    if (frs === null || Object.keys(frs.children)?.length === 0) {
      // setAllFolders(folders);
      // localStorage.setItem("allFolders", JSON.stringify(folders));
      // setRenderedFolders(folders);
      // localStorage.setItem("renderedFolders", JSON.stringify(folders));
      // setPath([]);
      // setFolderColor("default");
      // localStorage.setItem("path", JSON.stringify([]));
    } else {
      setAllFolders(frs);
      setRenderedFolders(rFrs);
      setPath(!pth ? [] : pth);
      setFolderColor(fc);
    }
  }, []);

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
        folderName={folderName}
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
          <span className="brand">@: </span>#Root{" "}
        </span>
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
        {/* </strong> */}
      </p>
      <br />
      <Settings
        isOpen={isSettingsModalOpen}
        handleChange={handleSettings}
        setIsOpen={setIsSettingsModalOpen}
        folderColor={folderColor}
        setFolderColor={setFolderColor}
        e={currNewEvent}
        getCurrColor={getCurrColor}
      />
      <Navigation
        handleNavigation={handleNavigation}
        handleDelete={handleModal}
        handleChange={handleSettings}
        renderedFolders={renderedFolders}
        getCurrColor={getCurrColor}
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
