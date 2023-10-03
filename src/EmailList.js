import {
  ArrowDropDown,
  CheckBox,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  Inbox,
  KeyboardHideOutlined,
  LocalOfferOutlined,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaiList__settingsRight">
          <IconButton>
            <ChevronLeftOutlined />
          </IconButton>
          <IconButton>
            <ChevronRightOutlined />
          </IconButton>
          <IconButton>
            <KeyboardHideOutlined />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__section">
        <Section Icon={Inbox} title="primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferOutlined} title="Promotions" color="green" />
      </div>
      <div className="emaiList__list">
        <EmailRow
          title="Twich"
          subject="Hey fellow streamer!!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Twich"
          subject="Hey fellow streamer!!!"
          description="This is a test This is a test This is a test This is a test This is a test This is a test This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
