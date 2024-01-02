const FolderCreation = ({ handleCreate, setFolderName }) => {
  return (
    <>
      <input
        className="input-field"
        placeholder="Folder Name"
        onChange={(e) => setFolderName(e.target.value)}
      ></input>
      <button className="create-btn" onClick={handleCreate}>
        Create
      </button>
    </>
  );
};

export default FolderCreation;
