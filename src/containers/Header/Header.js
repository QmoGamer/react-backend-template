import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { NavHeader, NavRight, SideBar } from '../../components/Header'
import { isEmpty } from '../../utils'

class Header extends Component {

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
      <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"marginBottom": "0"}}>
            
        <NavHeader />

        <NavRight />

        <SideBar />
            
      </nav>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    // npmPackage: state.npmPackage
  }
}

export default connect(mapStateToProps)(Header)
