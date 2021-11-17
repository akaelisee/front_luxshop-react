import React from 'react'
import Row from '../components/row'
import request from '../services/requests'
import BannerHim from '../assets/img/businessman-checking-time.jpg'

const ProductHim = () => {
  return (
    <div>
      <Row
        title='LOOKS POUR LUI'
        fetchUrl={request.fetchHim}
        banniereImage={BannerHim}
      />
    </div>
  )
}

export default ProductHim
