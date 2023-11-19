import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo.jpg'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = (props) => {
  const options = [
    {"link": "about", "name": "About"}
  ];

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <h className="flex w-full border-b border-black py-2" >
      <div className="h-full w-full flex items-center px-2">
          <Link href="/">
            <Image src={logo} width="80" height="65" alt="logo" href="/" />
          </Link>
          <div className="px-1"><a className=""><b>Queen Bee Crew</b></a></div>
          <div className="ml-auto">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <a className="flex w-full justify-center" href={option.link}>{option.name}</a>
              ))}
            </Menu>
          </div>
      </div>
    </h>
  )
}

export default Header