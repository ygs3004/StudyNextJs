import Messages from '@/components/messages';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
      // cache: "force-cache", default 값, 강제 캐시
      // cache: "no-store", 요청을 캐시로 저장 안함
      next: {
          revalidate: 5 // 초 단위로 캐시 유지 설정
      }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
