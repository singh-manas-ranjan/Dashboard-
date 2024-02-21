import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import sidebarData from "./data/sidebarData";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleSelectedMenu = (idx: number) => {
    setSelectedMenu(idx);
  };
  return (
    <Box className="dashboard">
      <Navbar />
      <Sidebar
        data={sidebarData}
        selectedMenu={selectedMenu}
        onSelectMenu={handleSelectedMenu}
      />
      <Box className="dashboardContent"></Box>
    </Box>
  );
};

export default App;
