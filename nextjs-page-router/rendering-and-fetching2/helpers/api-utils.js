export async function getAllEvents() {
    const url = process.env.FIREBASE_URL + "/events.json";
    const response = await fetch(url);
    console.log(url);
    console.log(response);
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}