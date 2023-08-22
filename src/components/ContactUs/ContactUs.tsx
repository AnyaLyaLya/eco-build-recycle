import { Dispatch, FC, SetStateAction, useState } from "react";
import { validateEmail, validateName } from "../../utils/validation.utils";
import { Response } from "../../types/Response";
const earth = require('../../image/earth.png');

interface Props {
  onSubmit: Dispatch<SetStateAction<Response | null>>,
}

export const ContactUs:FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (isNameValid && isEmailValid) {
      const userData = {
        name,
        email,
        message,
      };

      console.log(userData);

      onSubmit(userData);
      setEmail('');
      setName('')
      setMessage('');
      setNameError('');
      setEmailError('');
      setMessage('');
    } else {
      if(!isNameValid) {
        setNameError('Please enter a valid name.');
      }
      if (!isEmailValid) {
        setEmailError('Please enter a valid email address.');
      }
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError('');
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  
  return (
    <div className="contact" id="contact-us">
      <h2 className="contact__title">
        Contact Us
      </h2>

      <div className="contact__content">
        <img 
          src={earth} 
          alt="earth" 
          title="earth" 
          className="contact__image"
        />

        <form action="post" className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form--field">
            <label className="contact__label">
              {nameError}
            </label>

            <input
              id="name-input" 
              type="text" 
              className="contact__input" 
              placeholder="Name" 
              required
              value={name}
              onChange={handleNameChange}
            />
          </div>
          
          <div className="contact__form--field">
            <label 
              htmlFor="#email-input"
              className="contact__label"
            >
              {emailError}
            </label>

            <input 
              id="email-input"
              type="email" 
              className="contact__input" 
              placeholder="Email" 
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <textarea 
            className="contact__textarea" 
            placeholder="Message..."
            value={message}
            onChange={handleMessageChange}
          />

          <button type='submit' className='contact__button'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};