const Dialog = ({ isOpen, setIsOpen, handleDelete, e }) => {
  //   console.log(e);
  //   return <></>;
  const handleConfirmation = (isConfirm) => {
    if (isConfirm) handleDelete(e);
    setIsOpen(false);
  };

  if (!isOpen) return <></>;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(8px)",
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "purple",
          maxWidth: "400px",
          padding: 50,
          borderRadius: 5,
          position: "relative",
          top: "30%",
          left: "35%",
        }}
      >
        <div>Do you really want to delete this folder??</div>
        <button
          style={{ margin: "15px 15px" }}
          onClick={() => handleConfirmation(false)}
        >
          NO!
        </button>
        <button onClick={() => handleConfirmation(true)}>Yes</button>
      </div>
    </div>
  );
};

export default Dialog;
