import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box
} from '@chakra-ui/react';

function HoverMenu() {
  // Using Box to wrap Menu for handling onMouseLeave at the outer div level
  return (
    <Box>
      <Menu isOpen={true} gutter={0}>
        {({ isOpen, onClose }) => (
          <>
            <MenuButton
              as={Button}
              onMouseEnter={() => {
                if (!isOpen) onClose(); // Close any other open menus or handle hover differently
              }}
              onMouseLeave={onClose}
              variant="ghost"
            >
              Actions
            </MenuButton>
            <MenuList
              onMouseEnter={() => {
                if (!isOpen) onClose(); // Keep the menu open on hover
              }}
              onMouseLeave={onClose} // Close when cursor leaves the menu list
            >
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
}

export default HoverMenu;
