import DeleteIcon from "./DeleteIcon";
import FolderIcon from "./FolderIcon";

const Navigation = ({ renderedFolders, handleNavigation, handleDelete }) => {
  return (
    <>
      {Object.keys(renderedFolders).length === 0 && <p>No folder found!</p>}
      {Object.keys(renderedFolders).map((f) => {
        return (
          <div key={f} style={{ display: "inline-block" }}>
            <button className="folder-btn" value={f} onClick={handleNavigation}>
              <FolderIcon width={110} height={110} />
              {f}
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
