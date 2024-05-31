import React, { useState } from 'react'
import SolveByHoc from './SolveByHoc'

function LikePost({like,handel}) {

  /*const [likePostCounter, setPostCounter] = useState(0);

  const handlePostCount = ()=>{
    setPostCounter(likePostCounter+1);
  }*/

  return (
    <div>
      <button onClick={handel}>Like Post {like}</button>
    </div>
  )
}

export default SolveByHoc(LikePost)
