'use client';

import classes from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const [pickImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file)
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickImage && <p>No image picked yet</p>}
                {pickImage &&
                    <Image
                        src={pickImage}
                        alt="The image selected by the user."
                        fill
                    />}
            </div>
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name="image"
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button
                className={classes.button}
                type="button"
                onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>

    </div>;
};