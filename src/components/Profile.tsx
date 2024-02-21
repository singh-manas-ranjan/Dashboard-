import { Box, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Profile = () => {
  return (
    <Box display="flex" gap={10}>
      <Box
        width="35px"
        height="35px"
        bgImage="/pic.svg"
        bgPosition="center"
        bgSize="contain"
      />
      <Box display="grid">
        <Text fontSize="10px">User</Text>
        <Text fontSize="8px" color="#737791">
          Admin
        </Text>
      </Box>
      <ChevronDownIcon />
    </Box>
  );
};

export default Profile;
