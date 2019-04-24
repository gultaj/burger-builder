const config = {
  name: {
    element: 'input',
    config: {
      type: 'text',
      placeholder: 'Enter your name'
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
    label: 'Email',
    value: ''
  },
  street: {
    element: 'input',
    config: {
      type: 'text',
      placeholder: 'Street'
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
    value: ''
  }
};

export default config;
