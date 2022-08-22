import React, { useEffect, useRef, useState } from 'react';
import { LinearProgress } from '@mui/material'

export const FileUploadComponent = () => {
    const [dragactive, setDragActive] = useState(false)
    const [serverImg, setServerImg] = useState();
    const [image, setImage] = useState("");
    const inputRef = useRef(null)
    const [number, setNumber] = useState(0)
    const [start, setStart] = useState(false)

    //handle drag event
    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    //triggers file upload
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            e.target.files = e.dataTransfer.files
            imageChangeHandler(e)
        }
    }

    //trigger the input when the button is clicked
    const onButtonClick = (event) => {
        console.log("clicked")
        event.preventDefault()
        inputRef.current.click();
    }
    // handle Change
    const imageChangeHandler = (event) => {
        
        if (window.FileReader) {
            const fileUploaded = event.target.files[0];
            const reader = new FileReader();
            if (fileUploaded && fileUploaded.type.match("image.*")) {
                reader.readAsDataURL(fileUploaded);
            } else {
                // setImage(image);
                return 0;
            }
            reader.onloadstart = () => {
                setStart(true)
            }
            reader.onloadend = () => {
                setStart(false)
                setImage(reader.result);
            }
            // reader.onload = () => {

            // };
            setServerImg(fileUploaded);
        }
    };

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                if (number === 90) {
                    setNumber(prev => prev)
                } else {
                    setNumber(prev => prev + 5)
                }
            }, 100)
        }
        return () => {
            if (interval !== null) {
                clearInterval(interval)
            }
        }
    }, [number, start])

    console.log(number)
    return (<>
        {start && <LinearProgress variant='determinate' value={number} sx={{
            color: "primary.main"
        }} />}
        <form onDragEnter={handleDrag}>
            <input
                type={"file"}
                accept={"image/*"}
                ref={inputRef}
                multiple={false}
                onChange={(event) => imageChangeHandler(event)}
                style={{
                    display: "none"
                }} />
            <label >

                drag and drop your file down here
                <button onClick={onButtonClick}>Click</button>
            </label>
            <div onDragEnter={handleDrag} style={{
                width: "30rem",
                height: "30rem",
                border: "2px solid red",
            }} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                {image && <img alt={"testing"} src={image} style={{
                    width: "100%",
                    // height: "100%",
                    objectFit: "cover"
                }} />}
            </div>
        </form>
    </>)
}

