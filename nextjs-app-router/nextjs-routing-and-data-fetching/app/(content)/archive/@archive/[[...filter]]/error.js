"use client"
// error 는 서버가 에러일때도 보여주는 페이지로 use client 사용

export default function FilterError({error}) {
    return <div id="error">
        <h2>An error occurred!</h2>
        <p>{error.message}</p>
    </div>
};