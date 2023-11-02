import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {Alert} from '@/components/bootstrap'

export const metadata: Metadata = {
    title: "Static Page",
  };

export default async function page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id="+process.env.UNSPLASH_ACCESS_KEY);
    const image:UnsplashImage = await response.json();
    // console.log(image.width,image.height,image.urls.raw)
    const width = Math.min(500,image.width)
    const height = (width/image.width) * image.height;  
    return (
    <div className="d-flex flex-column align-items-center">
      <Alert>This page fetches and caches data at build time. Even though the Unspalsh API always returns a new image, we see the same image after refreshing the page untill we compile the project again</Alert>
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
