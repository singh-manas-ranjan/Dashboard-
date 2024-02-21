import {
  Box,
  Text,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <Box className="navbar">
      <Box>
        <Text as="h3" className="semiBold">
          Dashboard
        </Text>
      </Box>
      <Box>
        <InputGroup>
          <Input
            type="text"
            className="searchBox"
            placeholder="Search here..."
          ></Input>
          <InputLeftElement>
            <Icon className="searchIcon">
              <FaSearch size="S" color="#5D5FEF" />
            </Icon>
          </InputLeftElement>
        </InputGroup>
      </Box>
      <Box>
        <Dropdown />
      </Box>
      <Profile />
    </Box>
  );
};

export default Navbar;
