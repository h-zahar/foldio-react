const Navigation = ({ renderedFolders, handleNavigation }) => {
  return (
    <>
      {Object.keys(renderedFolders).length === 0 && <p>No folder found!</p>}
      {Object.keys(renderedFolders).map((f) => {
        return (
          <button key={f} value={f} onClick={handleNavigation}>
            {f}
          </button>
        );
      })}
    </>
  );
};

export default Navigation;
