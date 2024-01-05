const FolderIcon = ({ width = 50, height = 50, color = "default" }) => {
  // const hexOpa = (hex, opacity) => {
  //   if (hex.startsWith("#")) {
  //     hex = hex.slice(1);
  //   }
  //   const bigint = parseInt(hex, 16);
  //   const red = (bigint >> 16) & 255;
  //   const green = (bigint >> 8) & 255;
  //   const blue = bigint & 255;

  //   return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  // };
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M242.3 743.4h603.4c27.8 0 50.3-22.5 50.3-50.3V192H192v501.1c0 27.8 22.5 50.3 50.3 50.3z"
          fill="#FFEA00"
        />
        <path
          d="M178.3 807.4h603.4c27.8 0 50.3-22.5 50.3-50.3V256H128v501.1c0 27.8 22.5 50.3 50.3 50.3z"
          fill="#FFFF8D"
        />
        <path
          d="M960 515v384c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V383.8c0-35.3 28.7-64 64-64h344.1c24.5 0 46.8 13.9 57.5 35.9l46.5 95.3H896c35.3 0 64 28.7 64 64z"
          fill={color === "default" ? "#3D5AFE" : color}
        />
        <path
          d="M704 512c0-20.7-1.4-41.1-4.1-61H576.1l-46.5-95.3c-10.7-22-33.1-35.9-57.5-35.9H128c-35.3 0-64 28.7-64 64V899c0 6.7 1 13.2 3 19.3C124.4 945 188.5 960 256 960c247.4 0 448-200.6 448-448z"
          fill={color === "default" ? "#536DFE" : "rgba(255, 255, 255, 0.1)"}
        />
      </svg>
    </div>
  );
};

export default FolderIcon;
