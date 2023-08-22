export const Bunner = () => {
  return (
    <div className='bunner'>
      <div className='bunner__content' id="about">
        <img 
          className="bunner__recycle"
          src="/recycle.svg" 
          alt="recycle" 
          title='recycle' 
        />

        <h1 className='bunner__title'>
          <p className='bunner__title--accent'>Eco-partner </p> 
          in construction: Removal and 
          <p className='bunner__title--accent'> ecological </p>
          processing of waste 
        </h1>

        <p className='bunner__text'>
          We invite you to contact us for more detailed information or to use our services. Help us preserve nature for future generations!
        </p>
      </div>

      <div className="bunner__image-block">
        <img 
          src="/bunner.jpeg" 
          alt='EcoVin' 
          title='EcoVin'
          className='bunner__img'
        />

        <a href="/" className='bunner__button'>
          order a service
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="bunner__button--svg">
            <circle cx="44.7704" cy="44.7704" r="44.7704" fill="#7CB83F"/>
            <circle cx="44.7704" cy="44.7704" r="44.2704" stroke="#7CB83F"/>
            <path d="M30.3062 59.2346L60.6123 28.9285M60.6123 28.9285H30.3062M60.6123 28.9285V59.2346" stroke="white" stroke-width="2"/>
          </svg>
        </a>
      </div>
    </div>
  );
};