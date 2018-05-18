import React      from 'react';
import { hot }    from 'react-hot-loader';
import DatePicker from 'react-datepicker';
import classes    from './Input.styl';
import 'react-datepicker/dist/react-datepicker.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [ classes.Input ];

  switch (props.type) {
    case 'datepicker':
      inputElement = (
        <DatePicker
          selected={ props.value }
          onChange={ props.onChange }
          className={ inputClasses.join(' ') }
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={ props.value } onChange={ props.onChange }
          className={ inputClasses.join(' ') }>
          {
            props.options.map((option) => (
              <option key={ option.value } value={ option.value }>
                { option.displayValue }
              </option>
            ))
          }
        </select>
      );
      break;
    case 'input':
    default:
      inputElement = (
        <input value={ props.value } onChange={ props.onChange } onBlur={ props.onBlur }
          className={ inputClasses.join(' ') } />
      );
  }

  return (
    <div className={ classes.InputContainer }>
      <label className={ classes.Label }>{ props.label }</label>
      { inputElement }
    </div>
  )
};


export default hot(module)(input);
