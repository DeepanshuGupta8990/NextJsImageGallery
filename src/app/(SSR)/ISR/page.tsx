import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {Alert} from '@/components/bootstrap'

export const metadata: Metadata = {
    title: "ISR Page",
  };

// export const revalidate = 0;

export default async function page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id="+process.env.UNSPLASH_ACCESS_KEY,{
    //   cache: 'no-cache'
    next:{revalidate:35}
    });
    const image:UnsplashImage = await response.json();
    // console.log(image.width,image.height,image.urls.raw)
    const width = Math.min(500,image.width)
    const height = (width/image.width) * image.height;  
    console.log(image.urls.raw)
    return (
    <div className="d-flex flex-column align-items-center">
      <Alert>This page users <strong>incremental static regenration</strong>. A new Image is fetched every 15 seconds</Alert>
      <Image
      width={width}
      height={height}
      src={image.urls.raw}
      alt={image.alt_description}
      className="rounded shadow mw-100 h-100"
      />
       by <Link href={'/users/'+image.user.username}>{image.user.username}</Link>
    </div>
  )
}
