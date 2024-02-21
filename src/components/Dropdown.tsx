import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const countries = ["IND", "RUS", "USA", "UK"];

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("IND");

  const handleItemClick = (item: string) => {
    setSelectedOption(item);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rightIcon={<ChevronDownIcon />}
          size="md"
          className="menuBtn"
          cursor="pointer"
        >
          {selectedOption}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <List spacing={3}>
            {countries.map((country) => (
              <ListItem
                onClick={() => handleItemClick(country)}
                key={country}
                width={50}
                cursor="pointer"
              >
                {country}
              </ListItem>
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
