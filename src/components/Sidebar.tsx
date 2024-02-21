import { Box, Text } from "@chakra-ui/react";

interface DataProp {
  data: {
    name: string;
    icon: string;
  }[];
  selectedMenu: number;
  onSelectMenu: (idx: number) => void;
}
const Sidebar = ({ data, selectedMenu, onSelectMenu }: DataProp) => {
  return (
    <Box className="menu">
      {data.map(({ name, icon }, idx: number) => (
        <Box
          as="button"
          className={selectedMenu === idx ? "menuItems active" : "menuItems"}
          key={idx}
          onClick={() => onSelectMenu(idx)}
        >
          <Box className="imgContainer" bgImage={icon} />
          <Text>{name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
