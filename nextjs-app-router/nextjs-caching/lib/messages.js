import sql from 'better-sqlite3';
import {cache} from "react";
import {unstable_cache as nextCache} from "next/cache";

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

// cache() 함수로 감 쌀경우 단일 요청 주기에서 캐시 처리
// unstable_cache => Data 캐시 처리
export const getMessages = nextCache(
    cache(function getMessages() {
        console.log('Fetching messages from db');
        return db.prepare('SELECT * FROM messages').all();
    }), ["messages"], {
        // revalidate: 5,
        tags: ["msg"],
    }
)



