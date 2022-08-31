import classes from './Leaderboard.module.css';

import ReactRoundedImage from "react-rounded-image";
import ReactCountryFlag from "react-country-flag";

// import icons 
import { FaMedal } from 'react-icons/fa';
import { BsFillPinAngleFill } from 'react-icons/bs';
import { RiCopperCoinFill } from 'react-icons/ri';

import myImg from '../../../assets/student1Face.jpeg';

import { useState } from 'react';

const Leaderboard = props => {

    const [subject, setSubject] = useState('all');  // select subject to render leaderboard -- p, c, m OR exam
    const [userPinned, setUserPinned] = useState(false);  // user is pinned or not 
    const [pinBtn, setPinBtn] = useState('pin me on board'); // pin button content

    let x = [
        { rank: 4, username: 'kshitijkhot31', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 176, rewards: '120' },
        { rank: 5, username: 'knowme123', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 174, rewards: '120' },
        { rank: 6, username: 'king432', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 173, rewards: '120' },
        { rank: 7, username: 'ritwik235', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 166, rewards: '120' },
        { rank: 8, username: 'iamcetking', state: 'Telangana', country: 'India', countryCode: "IN", score: 166, rewards: '120' },
        { rank: 9, username: 'rameshk34', state: 'Andhrapradesh', country: 'India', countryCode: "IN", score: 157, rewards: '120' },
        { rank: 10, username: 'don23', state: 'Delhi', country: 'India', score: 154, countryCode: "IN", rewards: '120' },
        { rank: 11, username: 'iamspecial2', state: 'Colorado', country: 'US', countryCode: "US", score: 129, rewards: '120' },
        { rank: 12, username: 'kert123', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 126, rewards: '120' },
        { rank: 13, username: 'sam5', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 124, rewards: '120' },
        { rank: 14, username: 'lalo546', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 122, rewards: '120' },
        { rank: 15, username: 'jaguar24', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 121, rewards: '120' },
        { rank: 16, username: 'john2doe', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 119, rewards: '120' },
        { rank: 17, username: 'small2big', state: 'Maharashtra', country: 'India', countryCode: "IN", score: 112, rewards: '120' },

    ];

    let me = 'don23'; // this user

    // users rank info : this user
    let userRankInfo = {
        rank: 10, username: 'You', state: 'Maharashtra', country: 'India', countryCode: 'IN', score: 154, rewards: '120'
    }

    const selectHandler = (event) => {
        let val = event.target.value;
        setSubject(val); // set this subject , to render leaderboard for -- 
    }

    

    const listUpUser = (ele) => {
        let x = ele.username === me; // this user
        console.log(ele); 
        if (x) {
            return (
                <tr className={`${classes.bodyrow} ${classes.myRow} `} id="me">
                    <td><BsFillPinAngleFill color='rgb(0, 165, 137)' style={{ transform: 'translateY(2px)', marginRight: '3px' }} /> {userRankInfo.rank}</td>
                    <td><UserBar udata={userRankInfo.username} /> </td>
                    <td>{userRankInfo.state}</td>
                    <td><ReactCountryFlag
                        countryCode={userRankInfo.countryCode}
                        style={{
                            fontSize: '1.3em',
                            lineHeight: '1.3em',
                            paddingRight: '10px'
                        }}
                    />{userRankInfo.country}</td>
                    <td>{userRankInfo.score}</td>
                    <td><RiCopperCoinFill size="1.1em" color="orange" /> <div>{userRankInfo.rewards}</div></td>
                </tr>
            )
        } else {
            return (
            <tr className={classes.bodyrow}>
                <td>{ele.rank}</td>
                <td><UserBar udata={ele.username} /> </td>
                <td>{ele.state}</td>
                <td><ReactCountryFlag
                    countryCode={ele.countryCode}
                    style={{
                        fontSize: '1.3em',
                        lineHeight: '1.3em',
                        paddingRight: '10px'
                    }}
                />{ele.country}</td>
                <td>{ele.score}</td>
                <td><RiCopperCoinFill size="1.1em" color="orange" /> <div>{ele.rewards}</div></td>
            </tr>
            )
        }
    }

    return (
        <div className={classes.leaderboard}>
            <div className={classes.control}>

                <div className={classes.filterCtrl}>
                    <span>Select subject : </span>
                    <div className={classes.subjectSelector}>
                        <select name="subject" id="subject" value={subject} onChange={selectHandler}>
                            <option value="all">all</option>
                            <option value="physics">physics</option>
                            <option value="chemistry">chemistry</option>
                            <option value="maths">maths</option>
                        </select>
                    </div>
                </div>
                <button> <a href='#me'> <BsFillPinAngleFill color='white' style={{ transform: 'translateY(2px)', marginRight: '3px' }} /> locate me on board</a> </button>
            </div>
            <div className={classes.leaders}>
                <div className={` ${classes.card} ${classes.lead1}`}>
                    <div className={classes.left}>
                        <FaMedal size="3em" color='gold' />
                        <div className={classes.gold}>
                            Gold
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>To, </div>
                        <UserBar udata="jetrohan23" />
                        <div className={classes.score}>
                            <div>Scored : </div>
                            <div className={classes.marks}><span>196</span> <span>out of</span> <span>200</span></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.card} ${classes.lead1}`}>
                    <div className={classes.left}>
                        <FaMedal size="3em" color='silver' />
                        <div className={classes.silver}>
                            Silver
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>To, </div>
                        <UserBar udata="anuj12345" />
                        <div className={classes.score}>
                            <div>Scored : </div>
                            <div className={classes.marks}><span>194</span> <span>out of</span> <span>200</span></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.card} ${classes.lead1}`}>
                    <div className={classes.left}>
                        <FaMedal size="3em" color='#CD7F32' />
                        <div className={classes.bronze}>
                            Bronze
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>To, </div>
                        <UserBar udata="karannew45" />
                        <div className={classes.score}>
                            <div>Scored : </div>
                            <div className={classes.marks}><span>190</span> <span>out of</span> <span>200</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.leaderTable}>
                <table>
                    <thead className={classes.thead}>
                        <tr className={classes.headers}>
                            <th>Rank</th>
                            <th>user</th>
                            <th>state</th>
                            <th>country</th>
                            <th>score</th>
                            <th>exam rewards</th>
                        </tr>
                    </thead>
                    <tbody className={classes.tbody}>
                        {x.map((ele) => {
                            return listUpUser(ele); 
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const UserBar = props => {

    let uname = props.udata;

    return (
        <div className={classes.userbar}>
            <ReactRoundedImage
                image={myImg}
                roundedColor="#321124"
                imageWidth="25"
                imageHeight="25"
                roundedSize="0"
                borderRadius="70"
            />
            <span>{uname}</span>
        </div>
    )
}

export default Leaderboard; 