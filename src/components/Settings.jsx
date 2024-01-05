const Settings = ({
  isOpen,
  setIsOpen,
  folderColor,
  setFolderColor,
  handleChange,
  e,
}) => {
  //   console.log(folderColor);
  if (!isOpen) return <></>;
  return (
    <div style={{ width: 400, padding: 20, background: "pink" }}>
      <label htmlFor="colorpicker">Color:</label>
      <input
        type="color"
        id="colorpicker"
        defaultValue={
          folderColor === "default" || folderColor === null
            ? "#000fff"
            : folderColor
        }
        style={{ cursor: "pointer", background: "pink" }}
        onChange={(event) => handleChange(e, event.target.value)}
      />
    </div>
  );
};

export default Settings;
