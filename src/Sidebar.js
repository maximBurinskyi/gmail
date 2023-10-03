import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
// import AddIcon from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SidebarOption from './SidebarOption';
// import StarIcon from '@mui/icons-material/StarIcon';
import StarIcon from '@mui/icons-material/Star';
import {
  AccessTime,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import DouIcon from '@mui/icons-material/Duo';
import PnoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={MailOutlinedIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DouIcon />
          </IconButton>
          <IconButton>
            <PnoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
