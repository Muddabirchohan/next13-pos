// pages/photos/[productId].js

import Image from "next/image";
import { loadPost } from "../page";


const SinglePhoto = async ({params }) => {
  // Your component code here

  const {productId} = params

  const data = await loadPost(productId); // Fetch the post by productId

  if (!data.success) {
    return <div>Error: {data.message}</div>;
  }

  if(!data.photo){
    return <> ...loading </>
  }


  return <>
     <div className="container">
      <h1 className="photo-title">{data.photo.title}</h1>
      <p className="photo-description">{data.photo.description}</p>
      <Image className="photo-image" src={data.photo.url} alt={data.photo.title} width={350} height={300}/>
      <p className="message">Photo fetched successfully</p>
    </div>
  </>

};

export default SinglePhoto;


