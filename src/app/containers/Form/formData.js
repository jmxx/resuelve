import moment from 'moment';

export default () => {
  return {
    name: {
      label: 'Nombre',
      value: ''
    },
    email: {
      label: 'Email',
      value: ''
    },
    birthdate: {
      label: 'Fecha de Nacimiento',
      value: moment(),
      type: 'datepicker'
    },
    brithplace: {
      label: 'Lugar de Nacimiento',
      value: ''
    },
    postal_code: {
      label: 'Código Postal',
      value: ''
    }
  };
};
