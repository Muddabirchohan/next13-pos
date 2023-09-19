// pages/photos/[productId].js

import { loadPost } from "../page";


const SinglePhoto = async ({params }) => {
  // Your component code here

  const {productId} = params

  const data = await loadPost(productId); // Fetch the post by productId

  if (!data.success) {
    return <div>Error: {data.message}</div>;
  }
  return <>
     <div className="container">
      <h1 className="photo-title">{data.photo.title}</h1>
      <p className="photo-description">{data.photo.description}</p>
      <img className="photo-image" src={data.photo.url} alt={data.photo.title} />
      <p className="message">Photo fetched successfully</p>
    </div>
  </>

};

export default SinglePhoto;


