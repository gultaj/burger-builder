import React, { Component } from 'react';
import config from './formConfig';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';
import Spinner from 'components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import checkValidity from 'validation/checkValidity';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';
import axios from 'axios-order';
import * as authActions from 'store/actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
var queryString = require('query-string');

class Auth extends Component {
  state = {
    form: null,
    invalid: null,
    isInvalidForm: true,
    isSignup: true
  };

  componentWillMount() {
    const form = Object.fromEntries(
      Object.keys(config).map(key => [key, config[key].value])
    );
    const invalid = Object.fromEntries(
      Object.keys(config)
        .filter(key => Boolean(config[key].validation))
        .map(key => [key, null])
    );
    this.setState({ form, invalid });
  }

  handleChange = event => {
    const { name, value } = event.target;
    const invalid = { ...this.state.invalid };
    if (Boolean(config[name].validation)) {
      invalid[name] = checkValidity(value, config[name].validation);
    }
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      },
      isInvalidForm: Object.keys(invalid).some(
        key => invalid[key] || invalid[key] === null
      ),
      invalid
    });
  };

  handleSwitchForm = () => {
    this.setState({
      isSignup: !this.state.isSignup
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitAuth(this.state.form, this.state.isSignup);
  };

  render() {
    console.log(this.props);
    const redirect_to = queryString.parse(this.props.location.search)
      .redirect_to;
    const inputs = Object.keys(config).map(key => (
      <Input
        element={config[key].element}
        config={config[key].config}
        value={this.state.form[key]}
        label={config[key].label}
        invalid={this.state.invalid[key]}
        key={key}
        name={key}
        onChange={this.handleChange}
      />
    ));
    return (
      <React.Fragment>
        {this.props.isAuth && <Redirect to={redirect_to || '/'} />}
        <div className={classes.Auth}>
          <h2>{this.state.isSignup ? 'Sign Up' : 'Sign In'}</h2>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <form onSubmit={this.handleSubmit}>
              {inputs}
              <Button type="Success" disabled={this.state.isInvalidForm}>
                {this.state.isSignup ? 'REGISTER' : 'LOGIN'}
              </Button>
            </form>
          )}
          <Button type="Danger" clicked={this.handleSwitchForm}>
            SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = dispatch => ({
  onSubmitAuth: (authData, isSignup) =>
    dispatch(authActions.auth(authData, isSignup))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Auth, axios));
