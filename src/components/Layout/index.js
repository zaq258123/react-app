import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import './style.css'
import ImageWorkspace from '../ImageWorkspace'

class Layout extends Component {
  render() {
    return (
      <div className="layout bg-secondary">
        <Container className="d-flex flex-column justify-content-center align-items-center" fluid="md">
          <ImageWorkspace></ImageWorkspace>
        </Container>
      </div>
    )
  }
}

export default Layout
