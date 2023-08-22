import { Dispatch, FC, SetStateAction } from 'react';
import { Response } from '../../types/Response';
const cross = require('../../image/cross.png');

interface Props {
  response: Response;
  setResponse: Dispatch<SetStateAction<Response | null>>,
};

export const Modal:FC<Props> = ({ response, setResponse }) => {
  return (
    <div className="modal">
      <div className="modal__message">
        <h1 className="modal__title">Thank you <i>{response.name}</i> for your response!</h1>

        <p className="modal__text">We will send a reply to the email you specified <i>{response.email}</i></p>
      </div>
      <img src={cross} alt="cross" className='modal__svg' onClick={() => setResponse(null)}/>
    </div>
  );
};