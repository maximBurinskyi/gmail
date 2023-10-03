import React from 'react';
import './SendMail.css';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/base';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  closeSendMessage,
  selectSendMessageIsOpen,
} from './features/mailSlice';
// import { TextField } from '@material-ui/core';

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    // <TextField {...register('to')} />
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          //   ref={register({ required: true })}
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          //   ref={register({ required: true })}
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required!</p>
        )}

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          //   ref={register({ required: true })}
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
