const config = {
  name: {
    element: 'input',
    config: {
      type: 'text',
      placeholder: 'Enter your name'
    },
    validation: {
      required: true
    },
    label: 'Name',
    value: ''
  },
  email: {
    element: 'input',
    config: {
      type: 'email',
      placeholder: 'Your email'
    },
    validation: {
      required: true
    },
    label: 'Email',
    value: ''
  },
  street: {
    element: 'input',
    config: {
      type: 'text',
      placeholder: 'Street'
    },
    validation: {
      required: true
    },
    label: 'Street',
    value: ''
  },
  postalCode: {
    element: 'input',
    config: {
      type: 'text',
      placeholder: 'Postal code'
    },
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5
    },
    label: 'Postal code',
    value: ''
  },
  deliveryMethod: {
    element: 'select',
    config: {
      options: [
        { value: 'fastest', title: 'Fastest' },
        { value: 'cheapest', title: 'Cheapest' }
      ]
    },
    label: 'Delivery method',
    value: 'fastest'
  }
};

export default config;
