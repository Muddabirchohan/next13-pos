import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, Suspense } from "react";
import Link from 'next/link';
import Image from "next/image";

// Next.js fetch API in action
async function loadPosts() {
  const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
  return res.json();
}

export const  loadPost = async (id: string) => {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
  return res.json();
}

const PostList = async () => {
  const posts = await loadPosts();


  return (
    <div className="flex justify-center flex-wrap gap-4">
      
      {posts?.photos?.map((post: { id: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; url: string | undefined; }) => (
        <div  className="post-listing">
          
          <h3 className="post-title">
          <Link
            href="/[productId]" as={`/products/${post.id}`}
          >
            {post.title}
            </Link>
            </h3>
          <p className="text-xl font-bold underline">
            <Image src={post.url} width={300} height={250}/>
          </p>
        </div>
      ))}
    </div>
  );
};

const Index = async () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <PostList />
      </Suspense>
    </>
  );
};

export default Index


