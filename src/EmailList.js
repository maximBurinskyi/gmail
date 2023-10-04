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
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import { db } from './firebase';
import Section from './Section';

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshop) =>
        setEmails(
          snapshop.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

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
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
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
