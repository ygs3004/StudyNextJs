"use server";
// use server가 서버에서 만 코드가 포함 되는 것을 보장 하지 않음

import {storePost, updatePostLikeStatus} from "@/lib/posts";
import {redirect} from "next/navigation";
import {uploadImage} from "@/lib/cloudinary";
import {revalidatePath} from "next/cache";

export async function createPost(prevState, formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let errors = [];

    if (!title || title.trim().length === 0) {
        errors.push("제목은 필수입니다.")
    }

    if (!content || content.trim().length === 0) {
        errors.push("내용은 필수입니다.")
    }

    if (!image || image.size === 0) {
        errors.push("이미지는 필수입니다.")
    }

    if (errors.length > 0) {
        return {
            errors
        }
    }

    let imageUrl;
    try{
        imageUrl = await uploadImage(image)
    }catch (error){
        throw new Error(
            "이미지 업로드에 실패했습니다."
        )
    }

    await storePost({
        imageUrl,
        title,
        content,
        userId: 1,
    });

    redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
    await updatePostLikeStatus(postId, 2);
    // NextJs 클라이언의 캐시를 비워서 최신화
    revalidatePath("/", "layout");
}