'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

function isInvalidTest(text) {
    return (!text || text.trim() === '');
}

export async function shareMeal(formData) {
    // input name 기반
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    }

    if (
        isInvalidTest(meal.title) ||
        isInvalidTest(meal.summary) ||
        isInvalidTest(meal.instructions) ||
        isInvalidTest(meal.creator) ||
        isInvalidTest(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||  meal.image.size === 0
    ) {
        throw new Error('Invalid Input Data');
    }

    await saveMeal(meal);
    redirect('/meals')
}