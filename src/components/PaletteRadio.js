import React from 'react';
// import '../stylesheets/Design.scss';

const PaletteRadio = (props) => {
  const handleClick = () => {
    props.handlePalette({
      name: 'palette',
      value: props.value,
    });
  };

  return (
    <div className='design__radio'>
      <input type='radio' id={props.id} name='color' value={props.value} className='js-input-color' onClick={handleClick} defaultChecked={props.pal.palette === props.id} />
      <label htmlFor={props.id} className='design__paleta'>
        <div className={props.primaryColor}></div>
        <div className={props.secondaryColor}></div>
        <div className={props.tertiaryColor}></div>
      </label>
    </div>
  );
};

export default PaletteRadio;
