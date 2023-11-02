'use client'

import axios from 'axios';
import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import styles from './search.module.css'

export default function SearchPage() {
  const [imagesArray, setImagesArray] = useState<null | Array<any>>(null);
  
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const query = formData.get("query")?.toString().trim();
      if(query){
        const {data} = await axios.get(`api/search?query=${query}`)
        console.log(data.result.results)
        setImagesArray(data.result.results)
      }
    }
  return (
    <>
    <div>
      <Form onSubmit={handleSubmit}>
         <Form.Group className='mb-3' controlId='search-input' >
          <Form.Label>Search Query</Form.Label>
          <Form.Control name='query'
          placeholder='Eg. cats, dogs...'/>
         </Form.Group>
         <Button type='submit' className='mb-3'>Search</Button>
      </Form>
    </div>
    <div>
       {
        imagesArray!==null ? (<div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
         {
          imagesArray.map((image)=>{
            const width = Math.min(500,image.width)
            const height = (width/image.width) * image.height;  
          return(
            <div   key={image.urls.raw}  style={{overflow:'hidden',width:'250px',height:'250px',margin:'0.25rem'}}>
            <Image
            width={250}
            height={250}
            alt={image.alt_description}
            src={image.urls.raw}
            className={styles.image}
            />
            </div>
          )
          })
         }
        </div>) : (<></>)
       }
    </div>
    </>
  )
}
