import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import './style.css'

function Detail() {
  let {slug: productSlug, id: productId} = useParams();
  let location = useLocation();
  console.log('location', location);

  return (
    <div className="detail">
      DETAIL {productSlug} {productId}
    </div>
  )
}

export default Detail