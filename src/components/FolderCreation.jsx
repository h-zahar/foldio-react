const FolderCreation = ({ handleCreate, folderName, setFolderName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let fName = folderName;
    if (folderName === "")
      fName = prompt("You missed to name your folder. What would be called?");
    handleCreate(fName);
    setFolderName("");
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-field"
        placeholder="Folder Name"
        onChange={(e) => setFolderName(e.target.value)}
      ></input>
      <button className="create-btn" type="submit">
        Create
      </button>
    </form>
  );
};

export default FolderCreation;
