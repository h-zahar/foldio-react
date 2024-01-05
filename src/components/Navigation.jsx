import DeleteIcon from "./DeleteIcon";
import FolderIcon from "./FolderIcon";
import SettingsIcon from "./SettingsIcon";

const Navigation = ({
  renderedFolders,
  handleNavigation,
  handleDelete,
  handleChange,
}) => {
  return (
    <>
      {Object.keys(renderedFolders.children).length === 0 && (
        <p>No folder found!</p>
      )}
      {Object.keys(renderedFolders.children).map((f) => {
        return (
          <div key={f} style={{ display: "inline-block" }}>
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
            <button
              id={f}
              style={{
                transform: "translate(-350%, -300%)",
                padding: 0,
                background: "white",
                border: "1px solid transparent",
              }}
              onClick={handleChange}
            >
              <SettingsIcon />
            </button>
            <button id={f} className="delete-btn" onClick={handleDelete}>
              <DeleteIcon width={25} height={25} />
            </button>{" "}
          </div>
        );
      })}
    </>
  );
};

export default Navigation;
