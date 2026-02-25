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