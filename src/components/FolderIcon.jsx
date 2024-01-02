import Icon from "../assets/icons/folder-icon.svg";

const FolderIcon = ({ width = 50, height = 50 }) => {
  return (
    <div>
      <img src={Icon} width={width} height={height} />
    </div>
  );
};

export default FolderIcon;
