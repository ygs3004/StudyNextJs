export default function ModalDefaultPage() {
    // layout.js 에서 {modal}로 표시중, (.)image 에서 인터셉팅 하지 않았을 경우에도
    // 렌더링할 내용이 없다는 것을 Nextjs 에 알리기 위한 기본 값이 필요하므로 null 값 리턴하는 page.js 필요
    return null
};