import classes from './ExamProfile.module.css';
import Cross from '../UI/Icons/Cross';

import profileDemo from '../../assets/profile-demo.jpeg';
import malePhoto from '../../assets/student1Face.jpeg'
import examSignDemo from '../../assets/sign-demo.png';



import CropperModal from '../General/CropperModal';
import { useState } from 'react';
import PenDiv from './PenDiv';
import { Link } from 'react-router-dom';

const ExamProfile = props => {

    const [activateCropper, setActivateCropper] = useState(false);
    const [useUsername, setUseUsername] = useState(false);
    const [tag, setTag] = useState();   

    const [userPhoto, setUserPhoto] = useState(null);
    const [userSign, setUserSign] = useState(null); 

    const cropperCloseHandler = () => {
        setActivateCropper(false);
    }
 
    console.log(userPhoto, userSign);
    const activateCropperHandler = (event) => {
        setTag(event.currentTarget.id ); 
        setActivateCropper(true); 
    }


    const save = (data) => {
        // in data you will get : cropped image file, tag : photo/sign 
        let file = data.file; 
        let tag = data.tag; 
        if (tag==='editPhoto') {
            // this is photo
            let reader = new FileReader(); 
            reader.onload = (e) => { 
                setUserPhoto(e.target.result); //set src for candidate photo
            }
            reader.readAsDataURL(file); 
        } else if(tag==='editSign'){
            // this is sign
            let reader = new FileReader(); 
            reader.onload = (e) => {
                setUserSign(e.target.result); 
            }
            reader.readAsDataURL(file); 
        }
    } 

    const rollNo = 'SE2203300001'  //alloted rollno : fetched from server
    const preFName = 'Kshitij'    // pre available first name : fetched from server
    const preLName = 'Khot'        // pre available Last name  : fetched from server
    const preUsername = 'kshitij31' // users username : fetched from server

    
    return (
        <div className={classes.container}>
            <div className={classes.header}>Confirm your exam profile details</div>
            <div className={classes.profileData} >
                <div className={classes.photo}>
                    <img src={userPhoto===null ? profileDemo : userPhoto } alt="profile" />
                    <div><PenDiv id="editPhoto" class={classes.alignPhotoCam} onClickHandler={activateCropperHandler}/></div>
                    <span>Candidate Photo</span>
                </div>
                <div className={classes.sign}>
                    <img src={userSign===null ? examSignDemo : userSign } alt="sign" />
                    <div ><PenDiv id="editSign" class={classes.alignSignCam} onClickHandler={activateCropperHandler}/></div>
                    <span>Candidate Signature</span>
                </div>
            </div>
            <div className={classes.nameForm}>
                <div className={classes.inputRoll}>
                    <label > Alloted roll number :</label>
                    <input type="text" readOnly="readonly" defaultValue={rollNo} />
                </div>
                {useUsername ?
                    <div className={classes.user}>
                        <label htmlFor="user">Username : </label>
                        <input id="user" type="text" readOnly="readonly" defaultValue={preUsername} />
                    </div>
                    : <div className={classes.name}>
                        <div className={classes.fname}>
                            <label htmlFor="fname">First name </label>
                            <input id="fname" type="text" defaultValue={preFName} />
                        </div>
                        <div className={classes.lname}>
                            <label htmlFor="lname">Last name </label>
                            <input id="lname" type="text" defaultValue={preLName} />
                        </div>
                    </div>
                }
                <div className={classes.divider}>
                    <div></div>  OR  <div></div>
                </div>
                
                    <div className={classes.uname}>
                        {   !useUsername ? 
                            <button onClick={()=> {setUseUsername(true)}}>Use username</button> 
                            :
                            <button onClick={()=> {setUseUsername(false)}}>Use First & Last name</button> 
                        }
                    </div>
                


                <div className={classes.note}>
                    <b style={{ color: 'red' }}>note :</b>  If <b>first name</b> is 'John' & <b>last name</b> is 'Doe' then 'John Doe' will be displayed on leaderboard.
                    if username is used then 'username' will be displayed on leaderboard.
                </div>
                <div className={classes.submit}>
                    <Link to="/exam/instructions">Confirm & Next</Link>
                </div>
            </div>

            {activateCropper ? <CropperModal closeHandler={cropperCloseHandler} tag={tag} src={tag==='editPhoto' ? userPhoto : (tag==='editSign' ? userSign : '' )} save={save}/> : ''} 
        </div>
    )

}

export default ExamProfile; 