import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TextField, MenuItem } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderProps } from '../models/header.models';
import LogoutIcon from '@mui/icons-material/Logout';
const Header = ({
  leftContainer,
  logOut,
  name,
  search = false,
}: HeaderProps): ReactElement => {
  return (
    <HeaderContainer>
      <CmsTitle>{leftContainer}</CmsTitle>
      {search && (
        <SearchArea>
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </SearchArea>
      )}
      {!search && <div></div>}
      <SelectArea>
        <TextField
          select
          variant="standard"
          style={{ width: '70px' }}
          value={name?.slice(0, 5)}
          placeholder={name}
        >
          <MenuItem>{name}</MenuItem>
          <MenuItem onClick={logOut}>
            log out
            <LogoutIcon />
          </MenuItem>
        </TextField>
      </SelectArea>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 12px;
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 999;
`;

const CmsTitle = styled.span`
  font-family: Roboto, arial, helvetica, sans-serif;
  font-size: 20px;
  color: #000000;
  font-weight: bold;
`;

const SearchArea = styled.div``;
const SelectArea = styled.div`
  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
