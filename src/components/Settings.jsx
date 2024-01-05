const Settings = ({
  isOpen,
  setIsOpen,
  //   folderColor,
  //   setFolderColor,
  handleChange,
  e,
  getCurrColor,
}) => {
  //   console.log(folderColor);
  if (!isOpen) return <></>;
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        zIndex: "10",
        // background: "rgba(0, 0, 0, 0.4)",
        // width: "100vw",
        // height: "100%",
        backdropFilter: "blur(20%)",
      }}
    >
      <div style={{ position: "relative", top: "45%" }}>
        {/* <label htmlFor="colorpicker">Color:</label> */}
        <input
          type="color"
          id="colorpicker"
          className="custom-picker"
          defaultValue={getCurrColor(e) ? getCurrColor(e) : "#000fff"}
          style={{ cursor: "pointer" }}
          onChange={(event) => handleChange(e, event.target.value)}
          onBlur={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Settings;
