import classes from './QPallateDesc.module.css';
import Round from './Round';
import Dot from '../../UI/Icons/Dot';
import { useSelector } from 'react-redux';

const QPallateDesc = props => {

    const data = useSelector((state) => {
        let x = state.queBank; // queBank array
        let start, end; 
        let answered=0, notAnswered=0, notVisited=0, markedTvl=0, answeredMarked=0 ; 
        switch (state.activeSection) {
            case 0:
                start = 0; end = 49; 
                break;
            case 1:
                start = 50; end = 99;
                break;
            case 2:
                start = 100; end = 149; 
                break;
        }

        for (let i = start; i <= end; i++) {
            switch (x[i].status) {
                case 'A':
                    answered++; 
                    break;
                case 'NA':
                    notAnswered++; 
                    break;
                case 'NV':
                    notVisited++; 
                    break;
                case 'MTVL':
                    markedTvl++; 
                    break;
                case 'AM':
                    answeredMarked++; 
                    break;
            }
        }

        return {
            answered, notAnswered, notVisited, markedTvl, answeredMarked
        }
    }); 

    return (
        <div className={classes.container}>
            <div className={classes.desc}>
                <div className={classes.descC}>
                    <Round index={data.notVisited} status="NV" demo={true} />
                    <span>not visited</span>
                </div>
                <div className={classes.descC}>
                    <Round index={data.answered} status="A" demo={true} />
                    <span>answered</span>
                </div>
                <div className={classes.descC}>
                    <Round index={data.notAnswered} status="NA" demo={true} />
                    <span>not answered</span>
                </div>

            </div>
            <div className={classes.desc}>
                <div className={classes.descC}>
                    <Round index={data.markedTvl} status="MTVL" demo={true} />
                    <span>marked for review</span>
                </div>
                <div className={classes.descC}>
                    <Round index={data.answeredMarked} status="AM" demo={true} />
                    <span>marked & answered (will be considered for evaluation)</span>
                </div>
            </div>
            <div className={classes.descI}>
                <p>Note :&nbsp; <Dot/>&nbsp; below represents current question</p>
            </div>
        </div>
    )

}

export default QPallateDesc; 