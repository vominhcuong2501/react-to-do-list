import React, { useEffect, useState } from 'react'

export default function ChildUseEffect(props) {
  let [number, setNumber] = useState(1);
    console.log("render childUseEffect");

    useEffect(() => {
      // viết cho didupdate
    console.log('didupdate')
      return () => {
        console.log("willunmount")
      }
    }, [number])
    
  return (
    <div>
        <textarea></textarea> <br /> <br />
        <button className='btn btn-success'>Gửi</button>
    </div>
  )
}
