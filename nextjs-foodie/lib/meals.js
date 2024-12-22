import sql from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals(){
    // async example 을 위한 코드
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}