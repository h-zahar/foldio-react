import DeleteIcon from "./DeleteIcon";
import FolderIcon from "./FolderIcon";
// import SettingsIcon from "./SettingsIcon";

const Navigation = ({
  renderedFolders,
  handleNavigation,
  handleDelete,
  handleChange,
  // getCurrColor,
  order,
}) => {
  let tempFolders = { ...renderedFolders };

  if (tempFolders?.children && order === 1) {
    let tmp = { name: tempFolders.name, children: {} };
    Object.keys(tempFolders.children)
      .map((t) => [t, tempFolders.children[t].name])
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach((t) => {
        tmp.children[t[0]] = tempFolders.children[t[0]];
      });
    tempFolders = { ...tmp };
  } else if (tempFolders?.children && order === 2) {
    let tmp = { name: tempFolders.name, children: {} };
    Object.keys(tempFolders.children)
      .map((t) => [t, tempFolders.children[t].name])
      .sort((a, b) => a[1].localeCompare(b[1]))
      .reverse()
      .forEach((t) => {
        tmp.children[t[0]] = tempFolders.children[t[0]];
      });
    tempFolders = { ...tmp };
  }

  // tempFolders?.children &&
  //   console.log(
  //     Object.keys(tempFolders.children)
  //       .map((t) => [t, tempFolders.children[t].name])
  //       .sort((a, b) => a[1].localeCompare(b[1]))
  //   );

  return (
    <>
      {(!tempFolders?.children ||
        Object.keys(tempFolders?.children)?.length === 0) && (
        <p>No folder found!</p>
      )}
      {tempFolders?.children &&
        Object.keys(tempFolders?.children)?.map((f) => {
          // console.log(f, getCurrColor(f));
          return (
            <div key={f} style={{ display: "inline-block", marginTop: "60px" }}>
              <button
                className="folder-btn"
                id={f}
                value={tempFolders.children[f].name}
                onClick={handleNavigation}
              >
                <FolderIcon
                  width={110}
                  height={110}
                  color={tempFolders.children[f]?.color}
                />
                {tempFolders.children[f].name}
              </button>
              {/* <button
              id={f}
              style={{
                transform: "translate(-350%, -300%)",
                padding: 0,
                background: "white",
                border: "1px solid transparent",
              }}
              onClick={(e) => handleChange(e)}
            > */}
              <button id={f} className="delete-btn" onClick={handleDelete}>
                <DeleteIcon width={25} height={25} />
              </button>
              {/* <div style={{}}> */}
              {/* <label htmlFor="colorpicker">Color:</label> */}
              <input
                type="color"
                id="colorpicker"
                className="custom-picker"
                style={{
                  transform: "translate(-290%, -310%)",
                  cursor: "pointer",
                }}
                defaultValue={
                  tempFolders.children[f]?.color
                    ? tempFolders.children[f].color
                    : "#536DFE"
                }
                onChange={(event) => handleChange(f, event.target.value)}
              />
              {/* </div> */}
              {/* </button> */}
            </div>
          );
        })}
    </>
  );
};

export default Navigation;
