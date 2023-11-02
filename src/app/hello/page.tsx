import React from 'react'

export default async function page() {
   await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(3);
    },5000)
})
// throw Error("error");
  return (
    <div>
      Hello
    </div>
  )
}
