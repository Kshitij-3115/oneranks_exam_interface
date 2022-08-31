import {createStore} from 'redux'; 
import {createSlice} from '@reduxjs/toolkit'; 

    
// creating slice for mht-cet simulation question paper state management
const examSimInitState = {
    queBank : [],  
    activeQuestion : 0, 
    activeSection : 0,      //  0 : physics, 1 : chemistry, 2 : mathematics
    selected : -1 ,         // selected option of activeQuestio , -1 : no option selected, 0,1,2,3 : for other options
    isPCDone : false,       // PC section completed or not ? after time>90 : pc over and maths gets started       
    isLastQuestion : false,  // true if displayed question is last question of exam : either 100th or 150th 
    isFirstQuestion : true,             // true if displayed question  
    time : 5400,                 // 90 minutes : timer  
    pctSeconds : 113.097 ,       // arc length used for stroke-dashoffset initially 2*pi*r
    pctMinutes : 113.097 ,       // arc length used for stroke-dashoffset initially 2*pi*r
    examOver : false , 
    showSummary : false,           // summary modal : display or not 
    showInstructions : false        // instructions modal : display or not
}; 
// create slice
const examSimSlice = createSlice({
    name : 'examSimulation', 
    initialState : examSimInitState, 
    reducers : {
        // reducer functions here
        updateTimeCircle(state,action) {
            // update time, pctSeconds, pctMinutes 
            let r = action.payload.r;      // radius (fixed)
            let c = 2*Math.PI*r;  // total  
            // now update time
            if (state.time === 0 && state.activeSection !== 2) {
                //transit from pc to math section 
                state.isPCDone = true; 
                state.activeSection = 2; 
                state.time = 5400;  // reset time for new 'section'  
            } else if (state.time === 0 && state.activeSection ===2){
                //exam over : all sections completed successfully! 
                state.examOver = true; 
            } else {
                // just update timer 
                state.time = state.time - 1; 
                let seconds = state.time%60; 
                let minutes = Math.floor(state.time/60); 
                let pctS = c*((seconds/60)*100)/100;  // use it
                let pctM = c*((minutes/90)*100)/100;   //use it
                state.pctSeconds = pctS; 
                state.pctMinutes = pctM; 
            }

            
            return state; 
        }, 
        fillQueBank(state,action) {

            state.queBank = action.payload

            // make sure first question of each section is initially have 'NV' status
            state.queBank[0].status = 'NA';  
            if(state.isPCDone){
                state.queBank[100].status = 'NA'; 
            }
            
            return state;  
        },
        updateCurrentSection(state, action) {
            return {
                ...state, activeSection : action.payload
            }
        },
        updateSelected(state, action) {
            // update the selectedOpt 
            let index = action.payload.index; 
            let selected = -1; 
            let checkBox = action.payload.checkBox; 
            if (state.selected === index) {
                selected = -1; 
                checkBox.current.checked = false; 
            } else {
                selected = index; 
                checkBox.current.checked = true; 
            }

            return {...state, selected}
        },
        updateActiveQuestion(state,action) {
            // make a question as active question and update selected as 'saved option of new activeQuestion' 
            let index = action.payload.index;  // index of question which is going to be active question
            // if new active question has status : 'NV', make it 'NA' 

            // update isFirstQuestion
            if(index=== 0 || index === 101) {
                state.isFirstQuestion = true; 
            } else {
                state.isFirstQuestion = false; 
            }
            // update isLastQuestion
         
            if (index=== 99 || index === 149) {
                state.isLastQuestion = true;  
            } else {
                state.isLastQuestion = false; 
            }

            if (state.queBank[index].status === 'NV') {
                state.queBank[index].status = 'NA'
            }

            // if index belongs from another section, then update section as well
            if (index === 50) {
                // transit from physics to chemistry section 
                state.activeSection = 1; 
            } else if(index === 49) {
                // transit from chemistry to physics section 
                state.activeSection = 0; 
            }

            state.activeQuestion = index; 

            state.selected = state.queBank[index].selected;  
            return state; 
        }, 
        saveAndNext(state) {
            // save answer , mark as answered, status : answered 'A' if selected!=-1 
            let index = state.activeQuestion; 
            let arr = state.queBank;  
            let selected = state.selected;

            // prepare status
            if (selected === -1) {
                // no option selected
                arr[index].status = 'NA'; 
                arr[index].answered = false; 
                arr[index].selected = -1; 
            } else {
                // some option is selected
                arr[index].status = 'A'; 
                arr[index].answered = true; 
                arr[index].selected = selected; 
            }
        
            
            return state; 

        },
        markToViewLater(state) {
            // to cases : 
            // 1. answered (some option selected) and then marked to review later
            // 2. no option selected and then marked to review later
            // 1 --> status : 'AM' , answered : true  | 2 --> status : 'MTVL' , answered : false
            if (state.selected !== -1) {
                // option selected , this will be considered for evaluation 
                state.queBank[state.activeQuestion].status = 'AM'; 
                state.queBank[state.activeQuestion].answered = true; 
                state.queBank[state.activeQuestion].selected = state.selected;  // save answer
            } else {
                // no option selected , just mark to view later 
                state.queBank[state.activeQuestion].status = 'MTVL'; 
                state.queBank[state.activeQuestion].answered = false; 
            }

            return state; 
        },
        updateTags(state, action) {
            // let add = action.payload.add; // add tag if true
            // let remove = action.payload.remove;  // remove tag if true 
            let arr = state.queBank[state.activeQuestion].tags
            let tag = action.payload.tag; 
            if (arr.includes(tag)){
                arr = arr.filter((item) => {return item!==tag });  
                state.queBank[state.activeQuestion].tags = arr; 
            } else {
                arr.push(tag);
            }
            return state; 
        }, 
        showSummary(state, action) {
            let show = action.payload.show; 
            state.showSummary = show; 

            return state; 
        },
        showInstructions(state,action) {
            let show = action.payload.show; 
            state.showInstructions = show; 

            return state; 
        }
  
    }
}); 



// create the store which will be used by all slices. 
const store = createStore(examSimSlice.reducer);

// export store & slices to use in components 
export const examSimActions = examSimSlice.actions; 
export default store; 

