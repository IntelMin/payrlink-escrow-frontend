import React, { useEffect, useState } from 'react';
import LoaderSpinner from "react-loader-spinner";

const PageLoading = (props) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (document.getElementsByClassName('whitebg').length > 0) 
      setColor("#25224E");
    else 
      setColor("white");
  }, [])

  return (
    <div className="justify-content-center pb-5 page-loading-bg">
      <div className="presale-loading">
        <LoaderSpinner
          type="ThreeDots"
          color={color}
          height={50}
          width={70}
        />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}

export default PageLoading;