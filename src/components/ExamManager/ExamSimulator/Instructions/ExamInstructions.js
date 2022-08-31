// import classes 
import classes from './ExamInstructions.module.css'

// resources : img/gif etc. 
import sectionctrl from '../../../../assets/app-snips/sectionctrl.gif';
import timer from '../../../../assets/app-snips/timer.gif';
import marking from '../../../../assets/app-snips/marking.png'
import selectingOption from '../../../../assets/app-snips/selecting-option.gif'
import saveNext from '../../../../assets/app-snips/saveNext.gif'
import markedBtn from '../../../../assets/app-snips/markedBtn.gif'
import answeredNa from '../../../../assets/app-snips/answered-na.png'
import quePallete from '../../../../assets/app-snips/que-pallete.png'
import statusPallete from '../../../../assets/app-snips/status-pallete.png'
import candidateProfile from '../../../../assets/app-snips/candidate-profile.png'
import taggingQuestions from '../../../../assets/app-snips/tagging-questions.gif'
import quickSummaryBtn from '../../../../assets/app-snips/quick-summarybtn.png';
import submitBtn from '../../../../assets/app-snips/submit-btn.png';
import quickSummary from '../../../../assets/app-snips/quickSummary.png';

// main component 
const RightFillArrow = props => {
    let styles = {
        marginLeft: '-25px',
        marginRight: '5px'
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styles} width="16" height="16" fill="rgb(168, 76, 255)" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    )
}

const ExamInstructions = props => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                You are  welcome in <span>MHT-CET Open challenge (PCM): week 2</span>
                <p>Please read the following instructions carefully. scroll down if needed.</p>
            </div>
            <ol className={classes.list}>
                <li> <RightFillArrow /> This exam/test is divided into two sections as given below,
                    <div>Section - I : Physics + Chemistry</div>
                    <div>Section - II : Mathematics</div>
                </li>
                <li>
                    <RightFillArrow /> Both sections <b>(Section-I & Section - II)</b> has alloted time of 90 minutes each.
                </li>
                <li>
                    <RightFillArrow /> During first 90 minutes <b>Section - I</b> will remain active (unlocked). Candidates are allowed to attempt
                    Physics and Chemistry in this section. During this time <b>Section - II</b> will remain locked.
                </li>
                <li>
                    <RightFillArrow /> After successfull completion of <b>Section - I</b> i.e. after first 90 minutes from start of exam, <b>Section - II</b> becomes active (unlocked)
                    and Candidates are allowed to attempt Mathematics in this section. During these 90 minutes <b>Section - I </b> will remain locked.
                </li>
                <li>
                    <RightFillArrow />  During <b>Section - I</b> candidate can navigate between Physics and Chemistry using 'subject navigation' as shown below. for 'how to do ?'  refer <i>Interface guide</i>.
                    <div style={{ textAlign: "center" }}> <img src={sectionctrl} alt="sectionctrl" title="subject navigation demo" width="40%" /> </div>
                </li>
                <li>
                    <RightFillArrow /> For both sections <b>(Section - I & Section - II)</b> timer of 90 minutes is provided. These timers show remaining time as minutes:seconds as shown below.
                    Timer is present near top right corner in left panel of exam interface. for details of timers refer <i>Interface guide</i>.
                    <div style={{ textAlign: "center" }}><img src={timer} alt="timer img" title="timer demo" width="15%" /></div>
                </li>
                <li>
                    <RightFillArrow /> In <b>Section - I (Physics & Chemistry)</b> , '1' Mark will be awarded for each correct answer, and '0' negative marking is followed for incorrect answers.
                </li>
                <li>
                    <RightFillArrow /> In <b>Section - II (Mathematics)</b> , '2' Marks will be awarded for each correct answer, and '0' negative marking is followed for incorrect answers.
                </li>
                <li>
                    <RightFillArrow /> Morever for each question marking scheme is displayed for each question on top of that question as shown below.
                    <div style={{ textAlign: "center" }}><img src={marking} alt="marking scheme img" title="marking scheme demo" width="50%" /></div>
                </li>
                <li>
                    <RightFillArrow /> By clicking on option candidate can select/deselect option as given below.
                    <div style={{ textAlign: "center" }}><img src={selectingOption} alt="selecting option img" title="selecting option demo" width="50%" /></div>
                </li>
                <li>
                    <RightFillArrow /> To save selected response candidate should click <b>'save & next'</b> button. as given below.
                    <div style={{ textAlign: "center" }}><img src={saveNext} alt="save & next img" title="save next demo" width="20%" /></div>
                </li>
                <li>
                    <RightFillArrow /> Candidate can mark questions for review later by clicking on <b>'mark for review & next'</b>, as given below.
                    <div style={{ textAlign: "center" }}><img src={markedBtn} alt="marked button img" title="marked button demo" width="30%" /></div>
                </li>
                <li>
                    <RightFillArrow /> By clicking on <b>'previous'</b> button candidate can just move to previous question.
                </li>
                <li>
                    <RightFillArrow /> <b> 'Not visited' </b> Question marked as <b>'white' </b> circle. <b>'answered'</b> Question marked as <b>'green filled'</b> circle. <b>'not answered'</b> Question marked as <b>'red filled'</b> circle. <b>'marked for review'</b> questions marked as <b>'purple filled'</b> circle. <b>'marked for review but answered'</b> questions marked as <b>'purple filled circle with green dot'</b>, as show in below image.
                    <div style={{ textAlign: "center" }}><img src={quePallete} alt="question pallete img" title="answered, not answered demo" width="40%" /></div>
                </li>
                <li>
                    <RightFillArrow /> You can view current subject's status in right panel above question pallete.
                    <div style={{ textAlign: "center" }}><img src={statusPallete} alt="status pallete img" title="status pallete demo" width="30%" /></div>
                    let's say Physics is active section then according to above status pallete 49 questions are not visited, 0 answered questions, 1 not answered questions, 0 marked for review questions, 0 marked for review but answered questions.
                </li>
                <li>
                    <RightFillArrow /> Candidate can view his/her <b>'exam profile information'</b> in right panel. candidate name, date of exam, exam rollno will be displayed there.
                    <div style={{ textAlign: "center" }}><img src={candidateProfile} alt="candidate profile img" title="candidate profile demo" width="40%" /></div>
                </li>
                <li>
                    <RightFillArrow /> If candidate enables <b>'tagging'</b> feature before exam then, he/she can tag questions as given below. <b>Tagged</b> questions will be available for rivision/practice in <b>'tags'</b> section in application.
                    <div style={{ textAlign: "center" }}><img src={taggingQuestions} alt="tagging questions img" title="tagging questions demo" width="40%" /></div>
                </li>
                <li>
                    <RightFillArrow /> During exam candidate can view overall exam summary using <b>'quick summary'</b> feature. To view quick summary click <b>'Quick Summary'</b> button present in right panel, as shown below.
                    <div style={{ textAlign: "center" }}><img src={quickSummaryBtn} alt="quick summary button img" title="quick summary demo" width="40%" /></div>
                </li>
                <li>
                    <RightFillArrow /> After clicking <b>'Quick summary'</b> candidate can see quick summary window as given below. In quick summary overall answered, not answered, marked for review catogaries can be viewed as shown below.
                    <div style={{ textAlign: "center" }}><img src={quickSummary} alt="quick summary img" title="quick summary demo" width="50%" /></div>
                </li>
                <li>
                    <RightFillArrow /> <b>'Submit'</b> button is locked during both sections of exam. <b>'Submit'</b> button will gets unlocked 10 minutes before end of exam during which candidate can submit exam.
                    <div style={{ textAlign: "center" }}><img src={submitBtn} alt="summary button img" title="submit button demo" width="40%" /></div>
                </li>
                <li>
                    <RightFillArrow /> If at end candidate failed to click submit button then also exam will be automatically submited and your responses will evaluated.
                </li>
                <li>
                    <RightFillArrow /> If candidate wants to delete/clear answered question, then he/she should deselect the selected option and then click <b>'save & next'</b>.
                </li>
                <li>
                    <RightFillArrow /> Please <b>be aware</b> about following activities during exam time.
                    <ol className={classes.list}>
                        <li style={{color : 'red'}}>
                            <RightFillArrow /> Do not refresh the page during exam time, otherwise your exam data may lossed. 
                        </li>
                        <li style={{color : 'red'}}>
                            <RightFillArrow /> Do not try to change tab in your browser, doing other activities in your device. Our system is capable of detecting such activities. after <b>THREE</b> such attempts your exam will be automatically submitted. Further in this case <b>NEGATIVE exam points</b> will be awarded, which offcourse degrade candidate's profile rank.
                        </li>
                    </ol>
                </li>

            </ol>
        </div>
    )

}


// export our component 
export default ExamInstructions; 