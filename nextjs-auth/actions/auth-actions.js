"use server";

import {createUser} from "@/lib/user";
import {hashUserPassword} from "@/lib/hash";
import {redirect} from "next/navigation";

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
        createUser(email, hashedPassword);
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

    redirect("/training");
}