import { getPostData } from "@/lib/posts";
import NewsPostPage from "@/screens/news-post";

export default async function NewsPost(props) {
  const { id } = await props.params;
  const post = await getPostData(id);
  return <NewsPostPage post={post} />;
}
