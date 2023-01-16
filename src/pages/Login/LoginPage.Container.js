import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getError, getIsLoading, loginAction } from "../../redux/reducers/login";

import LoginPage from './Login.Component';


const mapStateToProps = createStructuredSelector({
  error: getError,
  loading: getIsLoading
})

const mapDispatchToProps = {
  login: loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);