import classes from './CropperModal.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FileUploader } from "react-drag-drop-files";
//import from packages :- 
import { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

//IMPORT COMPONENTS : CUSTOM 
import Cross from '../UI/Icons/Cross';
import Modal from '../UI/Modal';

const fileTypes = ["JPEG", "PNG", "JPG"];

const CropperModal = props => {

    const CropperRef = useRef(null);
    // show starter if no image available already
    // props.src === null  - if true then no image available already, so show starter
    console.log('image present ?',props.src!==null); 
    const [showStarter, setShowStarter] = useState(props.src === null); 

    
    // file uploaded : original
    const [file, setFile] = useState(null); // no file initially
    const [fileErr, setFileErr] = useState(false); 
    const [src, setSrc] = useState(props.src); // image url to display 

    const [fileToSave, setFileToSave] = useState(null); 

    const handleChange = (file) => {
        setFile(file);
        console.log(file); 
      };

    // let url = '';
    // const onCropHandler = () => {
    //     const ImgElement = CropperRef.current;
    //     const cropper = ImgElement.cropper;
    //     let myFile;
    //     let url;
    //     cropper.getCroppedCanvas().toBlob((blob) => {
    //         console.log(blob);
    //         myFile = new File([blob], 'image.jpeg', { type: blob.type });  //create a file
    //         url = URL.createObjectURL(myFile);
    //     });
    // }

  
    const fileErrorHandler = (err) => {
        console.log(err);
        setFileErr(true);  
    }
    

    useEffect(()=> {
        if(!fileErr && file!==null) { 
            setShowStarter(false);
            let reader = new FileReader(); 
            reader.onload = (e) => {
                setSrc(e.target.result); 
            } 
            reader.readAsDataURL(file); 
        } else if(src===null){
            setShowStarter(true); //  image picker/uploader
        }

    },[fileErr,file,src]); 

    // button handlers 
    // 1. change image handler
    // 2. save image handler
    const selectNewHandler = (event) => {
        // clear current image
        setSrc(null);
        setFile(null);  
    }

    const saveHandler = (event) => {
        // save this image to show as photo
        // get cropped image file :-- 
        const ImgElement = CropperRef.current;
        const cropper = ImgElement.cropper;


        cropper.getCroppedCanvas().toBlob((blob) => {
            let myFile = new File([blob], 'image.jpeg', { type: blob.type });  //create a file
            let data = {
                file : myFile, 
                tag : props.tag
            }
            props.save(data); 
        });

        // close modal 
        props.closeHandler(); 
    }
   
    let uploaderContent = '';
    uploaderContent = (
        <div className={classes.uploadArea}>
            <FontAwesomeIcon icon="cloud-upload-alt" size="2x" color="rgb(79, 155, 255)"/>
            {   file==null ? 
                <p><b>upload</b> OR <b>Drop</b> image file here.</p> :
                fileErr  ?
                <p style={{color : 'red'}}> <b> {file.type} </b>files not supported! </p> : ''
            }
        </div>
    )
    const header = (<Cross filled={false} className={classes.cross} onClick={props.closeHandler} />);
    return (
        <Modal header={header}>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    {
                        showStarter ? 
                            <div className={classes.starter}>
                                <FileUploader 
                                handleChange={handleChange} name="file" types={fileTypes} 
                                hoverTitle = "Drop here"
                                onTypeError = {fileErrorHandler}
                                classes = {`${classes.fileArea}`}
                                children = {uploaderContent}
                                />
                            </div>
                            :
                            <Cropper
                                src={src}
                                // style={{ height: 400, width: '90%' }}
                                //cropper.js options
                                initialAspectRatio={16 / 9}
                                guides={true}
                                zoomable={false}
                                responsive={true}
                                center={false}
                                background={false}
                                rotatable={true}
                                modal={false}
                                // crop={onCropHandler}
                                ref={CropperRef}
                            />
                    }
                </div>
                <div className={classes.control}>
                    { src!==null && <button className={classes.selectNewBtn} onClick={selectNewHandler}>Select new</button> }
                    <button className={classes.saveBtn} onClick={saveHandler}> Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default CropperModal; 





// NOTE : 
/* 
    HAVE LOOK AFTER SERVER SIDE WORK : THERE WILL BE SOME BUGS 
    CODE WORKING FOR CLIENT SIDE JUST WELL. 
*/