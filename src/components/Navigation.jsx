import FolderIcon from "./FolderIcon";

const Navigation = ({ renderedFolders, handleNavigation }) => {
  return (
    <>
      {Object.keys(renderedFolders).length === 0 && <p>No folder found!</p>}
      {Object.keys(renderedFolders).map((f) => {
        return (
          <button
            key={f}
            className="folder-btn"
            value={f}
            onClick={handleNavigation}
          >
            <FolderIcon width={50} height={50} />
            {f}
          </button>
        );
      })}
    </>
  );
};

export default Navigation;
