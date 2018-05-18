import React        from 'react';
import { hot }      from 'react-hot-loader';
import classes      from './Form.styl';
import formdata     from './formData';

import Input        from '@/components/ui/Input/Input.jsx';

class Form extends React.Component {
  state = {
    formData: formdata()
  };

  inputChangeHandler(event, inputId) {
    const value = event.target ? event.target.value : event;
    const formData = { ...this.state.formData };
    const formElement = { ...formData[inputId], value };
    formData[inputId] = formElement;

    this.setState({ formData });
  }

  inputBlurHandler(event, inputId) {
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const formElements = [];
    for (let key in this.state.formData) {
      formElements.push({ key, config: this.state.formData[key] });
    }

    return (
      <div className={ classes.FormContainer }>
        <form className={ classes.Form } onSubmit={ (event) => this.onSubmit(event) }>
          {
            formElements.map((formEl) => (
              <Input
                key={ formEl.key }
                value={ formEl.config.value }
                label={ formEl.config.label }
                type={ formEl.config.type }
                onBlur={ (event) => this.inputBlurHandler(event, formEl.key) }
                onChange={ (event) => this.inputChangeHandler(event, formEl.key) } />
            ))
          }
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default hot(module)(Form);
