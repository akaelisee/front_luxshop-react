import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import bannierebracelets from '../assets/img/bracelets-image.jpg'

const Bracelets = () => {
  return (
    <div>
      <Row
        title='Bracelets'
        fetchUrl={request.fetchBracelets}
        banniereImage={bannierebracelets}
      />
    </div>
  )
}

export default Bracelets
