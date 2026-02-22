"use server";

import {createUser} from "@/lib/user";
import {hashUserPassword} from "@/lib/hash";

export async function signup(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    let errors = {};

    if (!email.includes("@")) {
        errors.email = "이메일 형식이 아닙니다."
    }

    if (password.trim().length < 8) {
        errors.password = "비밀번호는 8자 이상 이어야 합니다."
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors
        }
    }

    // create a new user
    const hashedPassword = hashUserPassword(password);
    createUser(email, hashedPassword);
}