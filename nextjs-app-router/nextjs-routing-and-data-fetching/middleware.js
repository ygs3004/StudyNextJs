import {NextResponse} from "next/server";

export function middleware(request) {
    console.log("MIDDLEWARE", request)

    // return NextResponse.redirect()
    return NextResponse.next();
}

export const config = {
    matcher: '/news' // 파비콘, 이미지 등의 미들웨어 적용을 제외함, 페이지 자체는 제외되지 않음
}