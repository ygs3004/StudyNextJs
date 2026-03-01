"use server";

import {createUser, getUserByEmail} from "@/lib/user";
import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {redirect} from "next/navigation";
import {createAuthSession} from "@/lib/auth";

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
    try {
        const id = createUser(email, hashedPassword);
        await createAuthSession(id)
        redirect("/training");
    } catch (error){
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: "이미 존재하는 이메일입니다.",
                }
            }
        }
        throw error;
    }

}

export async function login(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const existingUser = getUserByEmail(email);

    if(!existingUser) {
        return {
            errors: {
                email: "Please check your credentials"
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password);

    if(!isValidPassword) {
        return {
            errors: {
                password: "Please check your credentials"
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect("/training");
}

export async function auth(mode, prevState, formData) {
    if (mode === "login") {
        return login(prevState, formData);
    }

    return signup(prevState, formData);
}