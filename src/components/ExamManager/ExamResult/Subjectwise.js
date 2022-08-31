import classes from './Subjectwise.module.css';
import ovClasses from './Overall.module.css';  // ovClasses are imported from 'overall' component ovClasses


import { useParams } from 'react-router-dom';


import { GiBullseye, GiAchievement, GiTargetDummy } from 'react-icons/gi';
import { FaStar, FaCaretRight } from 'react-icons/fa';
import { BiTrophy } from 'react-icons/bi';
import { MdOutlineTimelapse } from 'react-icons/md';

// components
import AccuracyScoreMeter from './AccuracyScoreMeter';
import OverallScoreDistribution from './OverallScoreDistribution';
import CorrectIncorrectGen from './CorrectIncorrectGen';
import TimeAttemptDistribution from './TimeAttemptDistribution';

const Subjectwise = props => {

    // class for marks scored tab :- 
    let marksClass, alphaClass, iconText; 

    // subject wise analysis : p,c,m 
    const subObj = useParams();
    const subject = subObj.value;

    // depending upon subject render different data :- p,c,m 
    // analysis data of all subjects will be availabel after server request in this component itself
    // we will structure data array/object here -- after 

    // declare all variables here --------------
    // 1. subjectwise result distribution across correct/incorrect/unattempted (srd)
    let srdLabels, srdTitle, srdDatasets, srdRadius;
    // 2. intime overtime attempts distribution (iod)
    let iodLabels, iodDatasets, iodTitle, iodScales;
    iodScales = {
        x: {},
        y: {
            min: 0,
            max: 50,
            ticks: {
                stepSize: 5
            }
        }
    }
    // 3. to show questions levelwise score attempts distribution (qld)
    let qldLabels, qldDatasets, qldTitle, qldScales;
    // 4. to show score distribution across 11th and 12th standerds  (sds)
    let sdsLabels, sdsDatasets, sdsTitle, sdsRadius;
    // 5. to show standerdwise attempts distribution  (sad)
    let sadLabels, sadDatasets, sadTitle, sadScales;

    qldScales = {
        x: {},
        y: {
            min: 0,
            max: 50,
            ticks: {
                stepsize: 5
            }
        }
    }
    // distribute data depending upon the subjects. 
    switch (subject) {
        case 'physics':
            marksClass = ovClasses.p; 
            alphaClass = ovClasses.alphaP; 
            iconText = 'P'; 
            // fill data for physics
            //srd data
            srdLabels = ['correct', 'incorrect', 'unattempted'];
            srdDatasets = [
                {
                    data: [35, 10, 5],
                    backgroundColor: [
                        'rgb(0, 230, 172,0.8)',
                        'rgb(255, 108, 108,0.8)',
                        'rgb(143, 204, 255)'
                    ],
                    borderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ],
                    hoverBorderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ]
                }
            ];
            srdTitle = {
                display: false,
                title: 'result across number of questions'
            };
            srdRadius = {
                cutout: '0%',
                radius: '40%'
            }

            // iod data
            iodLabels = ['Intime', 'Overtime'];
            iodDatasets = [
                {
                    data: [20, 15],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [12, 3],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            iodTitle = {
                display: true,
                text: 'Intime & Overtime attempts'
            };
            // qld data
            qldLabels = ['Easy', 'Medium', 'Hard'];
            qldDatasets = [
                {
                    data: [10, 15, 10],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [5, 6, 4],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            qldTitle = {
                display: true,
                text: 'Level wise result'
            }

            // sds data
            sdsLabels = ['11th', '12th'];
            sdsDatasets = [
                {
                    data: [16, 34],
                    backgroundColor: [
                        '#ff82bc',
                        '#8e8eff',
                    ],
                    borderColor: [
                        '#B33771',
                        '#3B3B98',
                    ],
                    hoverBorderColor: [
                        'rgb(208, 167, 255)',
                        'rgb(121, 224, 255)',
                    ]
                }
            ];
            sdsTitle = {
                display: false,
                text: 'Standerwise marks distribution'
            };
            sdsRadius = {
                cutout: '0%',
                radius: '50%'
            }

            // sad label
            sadLabels = ['11th', '12th'];
            sadDatasets = [
                {
                    data: [5, 24],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183, 0.8)',
                },
                {
                    data: [10, 11],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            sadTitle = {
                display: true,
                text: 'Standerdwise attmpts distribution'
            };
            sadScales = {
                x: {},
                y: {
                    min: 0,
                    max: 50,
                    ticks: {
                        stepSize: 5
                    }
                }
            };


            break;
        case 'chemistry':
            marksClass = ovClasses.c; 
            alphaClass = ovClasses.alphaC; 
            iconText = 'C'; 
            // fill data for chemistry
            // srd data
            srdLabels = ['correct', 'incorrect', 'unattempted'];
            srdDatasets = [
                {
                    data: [30, 15, 5],
                    backgroundColor: [
                        'rgb(0, 221, 166,0.8)',
                        'rgb(255, 108, 108,0.8)',
                        'rgb(143, 204, 255)'
                    ],
                    borderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ],
                    hoverBorderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ]
                }
            ];
            srdTitle = {
                display: false,
                title: 'result across number of questions'
            };
            srdRadius = {
                cutout: '0%',
                radius: '40%'
            }
            // iod data
            iodLabels = ['Intime', 'Overtime'];
            iodDatasets = [
                {
                    data: [20, 15],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [12, 3],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            iodTitle = {
                display: true,
                text: 'Intime & Overtime attempts'
            };

            // qld data
            qldLabels = ['Easy', 'Medium', 'Hard'];
            qldDatasets = [
                {
                    data: [10, 15, 10],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [5, 6, 4],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            qldTitle = {
                display: true,
                text: 'Level wise result'
            }
            // sds data
            sdsLabels = ['11th', '12th'];
            sdsDatasets = [
                {
                    data: [16, 34],
                    backgroundColor: [
                        '#ff82bc',
                        '#8e8eff',
                    ],
                    borderColor: [
                        '#B33771',
                        '#3B3B98',
                    ],
                    hoverBorderColor: [
                        'rgb(208, 167, 255)',
                        'rgb(121, 224, 255)',
                    ]
                }
            ];
            sdsTitle = {
                display: false,
                text: 'Standerwise marks distribution'
            };
            sdsRadius = {
                cutout: '0%',
                radius: '50%'
            }

            // sad label
            sadLabels = ['11th', '12th'];
            sadDatasets = [
                {
                    data: [11, 21],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183, 0.8)',
                },
                {
                    data: [4, 14],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            sadTitle = {
                display: true,
                text: 'Standerdwise attmpts distribution'
            };
            sadScales = {
                x: {},
                y: {
                    min: 0,
                    max: 50,
                    ticks: {
                        stepSize: 5
                    }
                }
            };
            break;
        case 'maths':
            marksClass = ovClasses.m; 
            alphaClass = ovClasses.alphaM; 
            iconText = 'M'; 
            // fill data for maths
            // srd data
            srdLabels = ['correct', 'incorrect', 'unattempted'];
            srdDatasets = [
                {
                    data: [32, 12, 6],
                    backgroundColor: [
                        'rgb(0, 221, 166,0.8)',
                        'rgb(255, 108, 108,0.8)',
                        'rgb(143, 204, 255)'
                    ],
                    borderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ],
                    hoverBorderColor: [
                        'rgb(0, 126, 94)',
                        'rgb(209, 0, 0)',
                        'rgb(0, 116, 211)'
                    ]
                }
            ];
            srdTitle = {
                display: false,
                title: 'result across number of questions'
            };
            srdRadius = {
                cutout: '0%',
                radius: '40%'
            };
            // iod data 
            iodLabels = ['Intime', 'Overtime'];
            iodDatasets = [
                {
                    data: [20, 15],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [12, 3],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            iodTitle = {
                display: true,
                text: 'Intime & Overtime attempts'
            };

            // qld data
            qldLabels = ['Easy', 'Medium', 'Hard'];
            qldDatasets = [
                {
                    data: [10, 15, 10],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183,0.8)',
                },
                {
                    data: [5, 6, 4],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            qldTitle = {
                display: true,
                text: 'Level wise result'
            }

            // sds data 
            sdsLabels = ['11th', '12th'];
            sdsDatasets = [
                {
                    data: [39, 61],
                    backgroundColor: [
                        '#ff82bc',
                        '#8e8eff',
                    ],
                    borderColor: [
                        '#B33771',
                        '#3B3B98',
                    ],
                    hoverBorderColor: [
                        'rgb(208, 167, 255)',
                        'rgb(121, 224, 255)',
                    ]
                }
            ];
            sdsTitle = {
                display: false,
                text: 'Standerdwise marks distribution'
            };
            sdsRadius = {
                cutout: '0%',
                radius: '50%'
            }

            // sad label
            sadLabels = ['11th', '12th'];
            sadDatasets = [
                {
                    data: [5, 27],
                    label: 'correct',
                    backgroundColor: 'rgb(44, 221, 183, 0.8)',
                },
                {
                    data: [10, 8],
                    label: 'incorrect',
                    backgroundColor: 'rgb(255, 175, 175)'
                }
            ];
            sadTitle = {
                display: true,
                text: 'Standerdwise attmpts distribution'
            };
            sadScales = {
                x: {},
                y: {
                    min: 0,
                    max: 50,
                    ticks: {
                        stepSize: 5
                    }
                }
            };
            break;
    };


    return (
        <div className={ovClasses.container}>
            <div className={ovClasses.row}>
                <div className={ovClasses.card}>
                    <span className={`${ovClasses.alphaIcon} ${alphaClass}`}>{iconText}</span>
                    <div>
                        <span className={ovClasses.title}>Score in {subject[0].toUpperCase() + subject.slice(1)}</span>
                        <div className={`${ovClasses.content} ${marksClass}`}>
                            36 / 50
                        </div>
                        {/* <span className={ovClasses.title}>OR</span>
                        <div className={`${ovClasses.content} ${ovClasses.m}`}>
                            78 %
                        </div> */}
                    </div>
                </div>
                <div className={ovClasses.card}>
                    <GiAchievement color='rgb(0, 187, 146)' size="3.0em" className={ovClasses.iconAlign} />
                    <div>
                        <span className={ovClasses.title}>Percentile achieved </span>
                        <div className={`${ovClasses.content} ${ovClasses.total}`}>
                            69.53
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
                <div className={ovClasses.card}>
                    <BiTrophy color='rgb(0, 187, 146)' size="3.0em" className={ovClasses.iconAlign} />
                    <div>
                        <span className={ovClasses.title}>Rank secured </span>
                        <div className={`${ovClasses.content} ${ovClasses.total}`}>
                            211
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
                <div className={ovClasses.card}>
                    <MdOutlineTimelapse color='rgb(255, 146, 44)' size="2.5em" className={`${classes.iconAlign} ${classes['exam-beh-back']}`} />
                    <div>
                        <span className={ovClasses.title}>Preference given</span>
                        <div className={`${ovClasses.content} ${classes['beh-rating']}`}>
                            23.2 %
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={ovClasses.row}>
                <div className={ovClasses.ocard}>
                    <div>
                        <div className={ovClasses.DataTabletitle}>Overall attempt details</div>
                        <div>
                            <table className={ovClasses.dataTable}>
                                <tbody>
                                    <tr>
                                        <td># of questions </td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>150</td>
                                    </tr>
                                    <tr>
                                        <td>Answered</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>136</td>
                                    </tr>
                                    <tr>
                                        <td>Not answered </td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Marked for review</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Answered & marked for review</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Not visited</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={ovClasses.ocard}>
                    <div className={ovClasses.DataTabletitle}>Accuracy score</div>
                    <AccuracyScoreMeter />
                </div>
                <div className={classes.cCard}>
                    <div className={ovClasses.DataTabletitle}> # of questions as result</div>
                    <OverallScoreDistribution labels={srdLabels} datasets={srdDatasets} title={srdTitle} layout={srdRadius} />
                </div>
            </div>
            <div className={ovClasses.row}>
                <div className={ovClasses.barcard}>
                    <CorrectIncorrectGen labels={iodLabels} datasets={iodDatasets} title={iodTitle} scales={iodScales} />
                </div>
                <div className={ovClasses.barcard}>
                    <CorrectIncorrectGen labels={qldLabels} datasets={qldDatasets} title={qldTitle} scales={qldScales} />
                </div>
                <div className={ovClasses.barcard}>
                    <TimeAttemptDistribution />
                </div>
            </div>
            <div className={ovClasses.row}>
                <div className={ovClasses.barcard}>
                    <CorrectIncorrectGen labels={sadLabels} datasets={sadDatasets} title={sadTitle} scales={sadScales} />
                </div>
                <div className={ovClasses.barcard}>
                    {/* <span style={{fontWeight : 400, color : 'rgb(73, 135, 187,0.8)', paddingTop : '20px'}}>
                        marks across 11th , 12th topics
                    </span> */}
                    <div className={ovClasses.stdTopics}>Standerdwise marks contribution </div>
                    <OverallScoreDistribution labels={sdsLabels} datasets={sdsDatasets} title={sdsTitle} layout={sdsRadius} />
                </div>
            </div>
        </div>

    )

}

export default Subjectwise; 


