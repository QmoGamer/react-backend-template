import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Login.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'

class Login extends Component {

  static fetchData({ params, store, url }) {
    // return store.dispatch( fetchPackage(url, params.name) )
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    // this.setState({ loading: true })
  }

  componentWillReceiveProps (nextProps) {
    // this.setState({
    //   loading: !isEmpty(nextProps.params.npmPackage)
    // })
  }

  componentDidMount () {
    // this.props.dispatch(fetchPackage(location.origin, this.props.params.name))
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                  <h3 className="panel-title">Please Sign In</h3>
              </div>
              <div className="panel-body">
                <form role="form">
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control" placeholder="Account" name="account" type="text" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" name="password" type="password" />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                      </label>
                    </div>
                    <a href="/" className="btn btn-lg btn-success btn-block">Login</a>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    // npmPackage: state.npmPackage
  }
}

export default connect(mapStateToProps)(Login)
