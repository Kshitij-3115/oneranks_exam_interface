import RightNav from "./RightNav";
import LeftPanel from "./LeftPanel"
import classes from './Simulator.module.css';

import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import {examSimActions} from '../../../store/index'; 


// simulator component will render only once. 
// which initalize the queBank. 
const Simulator = props => {
    let que = [
        {
            sno : 1, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 2,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 3,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 4,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 5,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 6,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 7,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 8,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 9,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 10,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
         {   
                sno : 11, 
                queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
                queOpt : ['Red gold','Platinum','Bronze','White gold'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry', 
                selected : [false, false, false, false], 
                answered : false, // response saved or not
                active : false, // currently displaying or not
                status : 'NV' 
            }, 
            {
                sno : 12,
                queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
                queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false],
                answered : false, 
                active : false,  
                status : 'NV'
            }, 
            {
                sno : 13,
                queC : '<p>Molar volume of gas at STP is _____</p>', 
                queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
            {
                sno : 14,
                queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
                queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
            {
                sno : 15,
                queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
                queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false],
                answered : false, 
                active : false,   
                status : 'NV' 
     
            }, 
            {
                sno : 16,
                queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
                queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            },
            {
                sno : 17,
                queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
                queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
            {
                sno : 18,
                queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
                queOpt : ['Crude oil','Blood','Air','Silicon'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
            {
                sno : 19,
                queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
                queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
            {
                sno : 20,
                queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
                queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
                posMarks : 1, 
                negMarks : 0, 
                type : 'Single Choice objective',
                subject : 'Chemistry',
                selected : [false, false, false, false], 
                answered : false, 
                active : false,  
                status : 'NV' 
     
            }, 
        {
            sno : 21, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 22,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 23,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 24,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 25,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 26,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 27,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 28,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 29,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 30,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
    {
            sno : 31, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 32,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 33,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 34,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 35,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 36,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 37,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 38,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 39,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 40,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 41, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 42,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 43,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 44,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 45,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 46,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 47,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 48,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 49,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 50,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 51, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 52,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 53,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 54,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 55,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 56,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 57,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 58,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 59,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 60,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 61, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 62,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 63,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 64,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 65,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 66,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 67,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 68,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 69,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 70,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 71, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 72,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 73,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 74,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 75,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 76,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 77,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 78,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 79,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 80,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
     {
            sno : 81, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 82,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 83,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 84,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 85,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 86,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 87,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 88,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 89,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 90,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 91, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 92,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 93,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 94,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 95,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 96,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 97,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 98,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 99,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 100,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 101, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 102,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 103,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 104,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 105,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 106,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 107,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 108,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 109,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 110,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 111, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 112,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 113,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 114,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 115,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 116,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 117,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 118,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 119,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 120,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 121, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 122,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 123,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 124,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 125,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 126,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 127,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 128,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 129,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 130,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 131, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 132,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 133,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 134,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 135,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 136,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 137,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 138,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 139,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 140,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
    {
            sno : 141, 
            queC : '<p>which of the following alloy is an international prototype of the Kilogram ? </p>', 
            queOpt : ['Red gold','Platinum','Bronze','White gold'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry', 
            selected : [false, false, false, false], 
            answered : false, // response saved or not
            active : false, // currently displaying or not
            status : 'NV' 
        }, 
        {
            sno : 142,
            queC : `<p>A type of <strong>matter</strong> that cannot be broken down into simpler substances by ordinary chemical changes is known as _____.&nbsp;</p>`, 
            queOpt : ['Compounds','Homogeneous mixtures','Elements','None of the above'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,  
            status : 'NV'
        }, 
        {
            sno : 143,
            queC : '<p>Molar volume of gas at STP is _____</p>', 
            queOpt : ['12.2 dm<sup>3</sup> mol<sup>-1</sup>','22.4 dm<sup>3</sup> mol<sup>-1</sup>','22.4 cm<sup>3</sup> mol<sup>-1</sup>','none of these'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 144,
            queC : '<p>Atomic mass unit (1 amu) = ____.  </p>', 
            queOpt : [' 1.66 &times 10<sup>-27</sup> Kg  ',' 1.66 &times 10<sup>-24</sup> Kg ','<math xmlns="http://www.w3.org/1998/Math/MathML" class="wrs_chemistry"><mstyle displaystyle="false"><mfrac><mn>1</mn><mn>12</mn></mfrac></mstyle></math> th of a <sup>12</sup>C-atom ','Both A and C'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 145,
            queC : '<p>The branch of chemistry that deals with separation , quantitative determination , identification of composition of different substances, is known as _____.  </p>', 
            queOpt : ['Bio-chemistry ','Inorganic chemistry ','organic chemistry ','analytical chemistry '],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false],
            answered : false, 
            active : false,   
            status : 'NV' 
 
        }, 
        {
            sno : 146,
            queC : '<p>Which of the following option cannot be considered as compounds ? </p>', 
            queOpt : ['Water','Carbon Dioxide ','ammonia','Arsenic'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        },
        {
            sno : 147,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a pure substance ? </p>', 
            queOpt : ['Distilled water','Diamond','Silver coin','Sea water'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 148,
            queC : '<p>Which one of the following <strong>CAN NOT</strong> be considered as a mixture ? </p>', 
            queOpt : ['Crude oil','Blood','Air','Silicon'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 149,
            queC : '<p>Which of the following is <strong>NOT</strong> a physical property ? </p>', 
            queOpt : ['Odour','Colour','Melting point','Burning of Mg ribbon in air'],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
 
        }, 
        {
            sno : 150,
            queC : '<p>In a chemistry class, Kayra was telling to her friend that she has proposed a law, <em><strong>\"Equal volumes of all gases under identical conditions of temperature and pressure contain equal number of molecules.\"  </strong></em>Can you guess  which of the following law Kayra is copying ? </p>', 
            queOpt : ["Avogadro's law","Gay lussac's law","Charle's law","Boyle's law"],
            posMarks : 1, 
            negMarks : 0, 
            type : 'Single Choice objective',
            subject : 'Chemistry',
            selected : [false, false, false, false], 
            answered : false, 
            active : false,  
            status : 'NV' 
        }
    ];  // questions array
 
    // const QueBankContext = createContext(); 

    que.forEach(ele => {
        ele.selected = -1; 
    });

    let newQue = que.map((ele) => {
            return {...ele, tags : []} 
    }); 
    // console.log(newQue); 
    localStorage.setItem('QuestionBank', JSON.stringify(newQue)); 

    const dispatch = useDispatch(); 
    let queBank = JSON.parse(localStorage.getItem('QuestionBank')); 
    
    dispatch(examSimActions.fillQueBank(queBank));  // initialize question bank

    
    return (    
        <div className={classes.container}>
            <div className={classes.left}>
               <LeftPanel /> 
            </div>
            <div className={classes.right}>
            <RightNav/> 
            </div>
               
        </div>
    )
}

export default Simulator; 



