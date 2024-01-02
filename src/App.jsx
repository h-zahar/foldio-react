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

  const [renderedFolders, setRenderedFolders] = useState(folders);

  return (
    <>
      <h4>Manage your Folders</h4>
      <Navigation
        handleNavigation={handleNavigation}
        renderedFolders={renderedFolders}
      />
    </>
  );
}

export default App;
