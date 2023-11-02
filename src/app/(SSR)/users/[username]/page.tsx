import { UnsplashUser } from "@/modals/unsplash-user";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params:{username:string}
}

async function getUser(username:string):Promise<UnsplashUser>{
  const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  if(response.status===404) notFound();
  return await response.json();
}

export async function generateMetadata({params:{username}}:PageProps):Promise<Metadata>{
  const user = await getUser(username);
  return{
    title: user.first_name
  }
}

export default async function Page({params:{username}}:PageProps){
   const user = await getUser(username);
   console.log(user)
  return(
    <div>
        <h1>{user.username}</h1>
        <Image width={128} height={128} src={user.profile_image.large} alt='sdsd'/>
        <p>First name:{user.first_name}</p>
        <p>First name:{user.last_name}</p>
        <a href={'https://unsplash.com/'+user.username}>Unsplash profile</a>
    </div>
  )
}