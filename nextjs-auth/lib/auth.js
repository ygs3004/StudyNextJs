import {Lucia} from "lucia";
import {BetterSqlite3Adapter} from "@lucia-auth/adapter-sqlite";
import db from "@/lib/db";
import {cookies} from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
    user: "users", // table name
    session: "sessions", // table name
});

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false, // nextJs 에서 사용시 false 로 설정, 공식 문서 참조
        attributes: {
            secure: process.env.NODE_ENV === "production" // Https 설정
        }
    }
});

export async function createAuthSession(userId) {
    const session = await lucia.createSession(userId, {})
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}

export async function verifyAuth(userId) {
    const sessionCookie =  cookies().get(lucia.sessionCookieName);

    if (!sessionCookie) {
        return {
            user: null,
            session: null
        }
    }

    const sessionId = sessionCookie.value;
    if(!sessionId){
        return {
            user: null,
            session: null
        }
    }

    const result = await lucia.validateSession(sessionId);

    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }

        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies.set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            )
        }
    } catch (error){
    }

    return result;
}