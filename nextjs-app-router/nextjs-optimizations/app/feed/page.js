import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// generateMetadata 함수 명으로 dynamic metadata nextJs 설정
export async function generateMetadata() {
    const posts = await getPosts();
    const numberOfPosts = posts.length;
    return {
        title: `총 ${numberOfPosts}개의 포스트가 있습니다`,
        description: "Latest Post Description Here, 검색시 표시"
    }
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
