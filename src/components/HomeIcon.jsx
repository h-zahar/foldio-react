import Icon from "../assets/icons/home-icon.svg";

const HomeIcon = ({ width = 50, height = 50 }) => {
  return (
    <div>
      <img src={Icon} width={width} height={height} />
    </div>
  );
};

export default HomeIcon;
