import React,{useState} from 'react'

function SolveByHoc(WrappedComponent) {

    return function component(){
                const [likeCounter, setLikeCounter] = useState(0);
                const handleCount = ()=>{
                    setLikeCounter(likeCounter+1);
                }
    

        return (
            <div>
            <WrappedComponent like={likeCounter} handel={handleCount}/>
            </div>
        )
    }

}

export default SolveByHoc;