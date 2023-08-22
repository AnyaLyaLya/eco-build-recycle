import { Accordion } from '../Accordion';

export const Footer = () => {
  return (
    <footer className='footer' id='faq'>
      <div className='App'>
        <h1 className='footer__title'>
          our services
        </h1>

        <Accordion />
      </div>
    </footer>
  );
};