import Icon from "../assets/icons/delete-icon.svg";

const DeleteIcon = ({ width = 50, height = 50 }) => {
  return (
    <div>
      <img src={Icon} width={width} height={height} />
    </div>
  );
};

export default DeleteIcon;
