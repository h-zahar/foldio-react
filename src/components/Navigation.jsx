import DeleteIcon from "./DeleteIcon";
import FolderIcon from "./FolderIcon";

const Navigation = ({ renderedFolders, handleNavigation, handleDelete }) => {
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
              <FolderIcon width={110} height={110} />
              {renderedFolders.children[f].name}
            </button>
            <button id={f} className="delete-btn" onClick={handleDelete}>
              <DeleteIcon width={25} height={25} />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Navigation;
