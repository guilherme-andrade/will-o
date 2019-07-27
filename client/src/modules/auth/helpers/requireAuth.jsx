import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function requireAuth(Component) {
  function AuthenticatedComponent(props) {
    const { isLoggedIn, history } = props;
    if (!isLoggedIn) {
      history.push('/login')
    }
    return isLoggedIn ? <Component {...props} /> : null;
  }

  AuthenticatedComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    user: PropTypes.object
  };

  const mapStateToProps = state => ({
    isLoggedIn: state.loggedIn,
    user: state.user
  });

  return withRouter(
    connect(mapStateToProps)(AuthenticatedComponent)
  );
}
