import React from 'react'
import {Spinner} from '@/components/bootstrap'

export default function Loading() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:'center',width:"100%",height:"100%"}}>
         <Spinner animation='border' className='d-block m-auto'/>
    </div>
  )
}
