import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Index.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'

class Index extends Component {

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
      <div>
        <h2>Hello World !</h2>
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

export default connect(mapStateToProps)(Index)
