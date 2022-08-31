import classes from './SummaryTable.module.css'; 

const SummaryTable = props => {
    // this is time analysis in which we will show intime, overtime analysis for each subject catagorized in intime
    
    let data = props.data; 

    console.log(data); 
    let a = [0,0,0,0,0]  // total array of each catagory
    let b = []; 
    let count; 
    let total = 0; 
    data.forEach(item => {
        count = 0; 
        a[0] += item.answered; 
        a[1] += item.notAnswered; 
        a[2] += item.marked; 
        a[3] += item.answeredMarked; 
        a[4] += item.notVisited; 
        count = item.answered + item.notAnswered + item.marked + item.answeredMarked + item.notVisited;
        total += count;  
        b.push(count); 
    });

    const done = props.isPCDone;   // pc completed or not ? 

    return (
        <div className={classes.container}>
            <table>
                <thead>
                <tr className={classes.head}>
                    <th></th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Mathematics</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr className={`${classes.catagory1} ${classes.cat}`}>
                    <th>Answered</th>
                    <td>{data[0].answered}</td>
                    <td>{data[1].answered}</td>
                    <td>{done ? data[2].answered : '---'}</td>
                    <td className={classes.tot}>{a[0]}</td>
                </tr>
                <tr className={`${classes.catagory2} ${classes.cat}`}>
                    <th>Not answered</th>
                    <td>{data[0].notAnswered}</td>
                    <td>{data[1].notAnswered}</td>
                    <td>{done ? data[2].notAnswered : '---'}</td>
                    <td className={classes.tot}>{a[1]}</td>
                </tr>
                <tr className={`${classes.catagory3} ${classes.cat}`}>
                    <th>Marked for review</th>
                    <td>{data[0].marked}</td>
                    <td>{data[1].marked}</td>
                    <td>{done ? data[2].marked : '---' }</td>
                    <td className={classes.tot}>{a[2]}</td>
                </tr>
                <tr className={`${classes.catagory4} ${classes.cat}`}>
                    <th>Answered & Marked for review</th>
                    <td>{data[0].answeredMarked}</td>
                    <td>{data[1].answeredMarked}</td>
                    <td>{done ? data[2].answeredMarked : '---'}</td>
                    <td className={classes.tot}>{a[3]}</td>
                </tr>
                <tr className={`${classes.catagory5} ${classes.cat}`}>
                    <th>Not visited</th>
                    <td>{data[0].notVisited}</td>
                    <td>{data[1].notVisited}</td>
                    <td>{done ? data[2].notVisited : '---' }</td>
                    <td className={classes.tot}>{done ? a[4] : a[4]-data[2].notVisited}</td>
                </tr>
                <tr className={classes.total}>
                    <th>Total</th>
                    <td>{b[0]}</td>
                    <td>{b[1]}</td>
                    <td>{done ? b[2] : '---'}</td>
                    <td>{done ? total : total-b[2]}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SummaryTable; 