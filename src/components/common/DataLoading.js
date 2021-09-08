import React, { useEffect, useState } from 'react';
import LoaderSpinner from "react-loader-spinner";

const DataLoading = (props) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (document.getElementsByClassName('whitebg').length > 0) 
      setColor("#25224E");
    else 
      setColor("white");
  }, [])

  return (
    <LoaderSpinner
      type="Oval"
      color={color}
      height={25}
      width={25}
    />
  )
}

export default DataLoading;