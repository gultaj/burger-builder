const config = {
  email: {
    element: 'input',
    config: {
      type: 'email',
      placeholder: 'Your email'
    },
    validation: {
      required: true,
      isEmail: true
    },
    label: 'Email',
    value: ''
  },
  password: {
    element: 'input',
    config: {
      type: 'password',
      placeholder: 'Password'
    },
    validation: {
      required: true,
      minLength: 6
    },
    label: 'Password',
    value: ''
  }
};

export default config;
