'use client'
import React from 'react';
import { Button } from "react-bootstrap"

interface ErrorPageProps{
 error:Error,
 reset:()=>void
}

export default function Error({error,reset}:ErrorPageProps) {
  return (
    <div>
      Error arrived at server
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}
