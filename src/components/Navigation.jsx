import DeleteIcon from "./DeleteIcon";
import FolderIcon from "./FolderIcon";
import SettingsIcon from "./SettingsIcon";

const Navigation = ({
  renderedFolders,
  handleNavigation,
  handleDelete,
  handleChange,
  getCurrColor,
}) => {
  return (
    <>
      {(!renderedFolders?.children ||
        Object.keys(renderedFolders?.children)?.length === 0) && (
        <p>No folder found!</p>
      )}
      {renderedFolders?.children &&
        Object.keys(renderedFolders?.children)?.map((f) => {
          // console.log(f, getCurrColor(f));
          return (
            <div key={f} style={{ display: "inline-block", marginTop: "60px" }}>
              <button
                className="folder-btn"
                id={f}
                value={renderedFolders.children[f].name}
                onClick={handleNavigation}
              >
                <FolderIcon
                  width={110}
                  height={110}
                  color={renderedFolders.children[f]?.color}
                />
                {renderedFolders.children[f].name}
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
                  renderedFolders.children[f]?.color
                    ? renderedFolders.children[f].color
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
