import React, { useState } from 'react'
import SolveByHoc from './SolveByHoc'

function LikeImage({like,handel}) {

  /*const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = ()=>{
    setLikeImageCounter(props.like+1);
  }*/

  return (
    <div>
      <button onClick={handel}>Like Image {like}</button>
    </div>
  )
}

export default SolveByHoc(LikeImage)