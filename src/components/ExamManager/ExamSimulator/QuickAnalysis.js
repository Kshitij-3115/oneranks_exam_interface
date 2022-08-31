import classes from './QuickAnalysis.module.css';

import SummaryTable from './SummaryTable';
import Cross from '../../UI/Icons/Cross';
import Timer from './Timer';

import Modal from '../../UI/Modal';
import AnalysisCircle from './AnalysisCircle';

import { useSelector } from 'react-redux';

const QuickAnalysis = props => {

    const obj = useSelector((state) => {
        let queBank = state.queBank; //all questions
        // radius of analysis circles  r = 60 
        let c = 2*Math.PI*60;  // req to calculate dasharray,dashoffset for circles

        // object that keeps count of each que status 
        // and arr is array of such count object : 3 items -- pcm 
        let arr = []; 
        let obj = {
            p : [], 
            c : [], 
            m : []
        } // object that stores dashedarray and dashoffset for each subject

        let count = {
            answered : 0, 
            notAnswered : 0, 
            marked : 0, 
            answeredMarked : 0, 
            notVisited : 0
        }
        let i=0; //for indexing in forEach loop here
        queBank.forEach(element => {

            switch (element.status) {
                case 'A':
                    count.answered++; 
                    break;
                case 'NA':
                    count.notAnswered++; 
                    break;
                case 'MTVL':
                    count.marked++; 
                    break;
                case 'AM':
                    count.answeredMarked++; 
                    break;
                case 'NV':
                    count.notVisited++; 
                break;
            }

            if (i===49 || i===99 ) {
                //physics over 
                arr.push(count); 
                count = {
                    answered : 0, 
                    notAnswered : 0, 
                    marked : 0, 
                    answeredMarked : 0, 
                    notVisited : 0
                    }; //initialize 
            }
            i++; 
        });
        arr.push(count); //for maths section 

        // now count of all section is finished;  
        // calculate the dasharray and dashoffset for circles
    
        let j=0; 
        arr.forEach(element => {
            let x = []; 
            let dim = []; 
            let pct; 
            i=0; 
            for (const key in element) {
                pct = (element[key]/50)*c;   //arc length for dashed array
                x = [] 
                x.push(pct); 
                x.push(c-pct); 
                x.push(i*pct);  // 0*pct : c1, 1*pct : c2, 2*pct : c3 , 3*pct : c4, 4*pct : c5 
                dim[i] = x;
                i++;  
            } 

            if (j===0){
                //p 
                obj.p = dim; 
            } else if (j===1) {
                //c 
                obj.c = dim; 
            } else if (j===2) {
                //m 
                obj.m = dim 
            }
            j++; 
        });

        return obj = {...obj, arr : arr,isPCDone : state.isPCDone};  
    });

    const header = (<Cross filled={false} className={classes.cross} onClick={props.closeHandler} />);
    return (
        <Modal header={header}>
            <div className={classes.container}>
                <div className={classes.header}>
                    Quick exam summary
                </div>
                <div className={classes.content}>
                    <div className={classes.circles}>
                        <AnalysisCircle subject="Physics" dimData={obj.p} />
                        <AnalysisCircle subject="Chemistry" dimData={obj.c}/>
                        <AnalysisCircle subject="Maths" dimData={obj.m} isPCDone={obj.isPCDone}/>
                    </div>
                    <SummaryTable data = {obj.arr} isPCDone={obj.isPCDone}/>
                    <div className={classes.note}>
                        Note : Complete analysis will be available after successful submission of exam. 
                    </div>
                </div>

            </div>
        </Modal>

    )
}

export default QuickAnalysis; 