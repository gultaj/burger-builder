const checkValidity = (value, rules) => {
  if (!(rules instanceof Object)) return;
  let isInvalid = [];
  if (Boolean(rules.required)) {
    isInvalid.push(value.trim() === '');
  }
  if (Boolean(rules.minLength)) {
    isInvalid.push(value.length < rules.minLength);
  }
  if (Boolean(rules.maxLength)) {
    isInvalid.push(value.length > rules.maxLength);
  }
  if (Boolean(rules.isEmail)) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isInvalid.push(!pattern.test(value));
  }
  if (Boolean(rules.isNumeric)) {
    const pattern = /^\d+$/;
    isInvalid.push(!pattern.test(value));
  }
  return isInvalid.some(rule => rule);
};

export default checkValidity;
