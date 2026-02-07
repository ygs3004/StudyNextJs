import Messages from '@/components/messages';
import {unstable_noStore} from "next/cache";

// react 에서 파일에 해당 변수 명이 있을 경우 자동으로 캐시 설정됨
// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
    // 호출시 캐시 방지
    // unstable_noStore()

    const response = await fetch('http://localhost:8080/messages'
        // , {
        // cache: "force-cache", default 값, 강제 캐시
        // cache: "no-store", 요청을 캐시로 저장 안함
        // next: {
        //     revalidate: 5 // 초 단위로 캐시 유지 설정
        // }}
    );
    const messages = await response.json();

    if (!messages || messages.length === 0) {
        return <p>No messages found</p>;
    }

    return <Messages messages={messages}/>;
}

// 캐시 처리 방법
// 1. fetch 함수에 옵션
// 2. 파일 내에 지정된 변수 명으로 설정 추가
// 3. unable_noStore() 처럼 지정된 메서드 호출로 설정 처리
