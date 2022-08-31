import classes from './ContestPage.module.css';

// my components 
import Navbar from '../UI/Navbar';

//externals 
import ReactOwlC from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import $ from 'jquery'; 



const ContestPage = props => {
    // desc : this is the contest's ad,registration, feature describing page from where all activities 
    // gets triggered, eg. first this page gets released for registration of weekly exams. 
    // candidate will register, read instructions, read features from this page. 
    // registered candidate can trigger test from here on permitted time. 
    // this page link will be used for marketing of this weekly exam. 

    // now lets start doing --- 

    
    
    let arr = ['https://img.freepik.com/free-vector/mars-landscape-alien-planet-martian-background_107791-1781.jpg?w=1800&t=st=1661451650~exp=1661452250~hmac=a8270e430492b3a5d60f06f7522c8cbe5bf4e5cc31df8587f503b40547a29262',
        'https://img.freepik.com/free-vector/transformer-battle-robots-cartoon-set_1441-3032.jpg?w=1800&t=st=1661451726~exp=1661452326~hmac=0300e5c42bb345c35816dba888b790b669005a6c39c1dc7f74df2eddc2e448ac',
        'https://img.freepik.com/free-vector/war-with-alien-robots-cartoon-concept_1441-3241.jpg?w=1800&t=st=1661451747~exp=1661452347~hmac=764e0bc0f003372d6c354d73bd5057fe0bc1fc0e6c9620422491c890ab51e66e',
        'https://img.freepik.com/free-vector/red-robot-transformer-alien-invader-spaceship_107791-997.jpg?w=1800&t=st=1661451767~exp=1661452367~hmac=6bbdfd502510ef9094e339a19a85c4cb79ae452b9e78e05f90c2c28ee7b77fb8'
    ];

    

    return (
        <div className={classes.contestpage}>
            <Navbar />
            <section className={classes.brand_head}>
                <ReactOwlC className='owl-theme' loop={true} margin={10} nav={true}
                    items={1} dots={false} navSpeed={100} autoplay={true} autoplayTimeout={2500}
                    autoplayHoverPause={true} navClass={[classes.nav_left, classes.nav_right]}
                    navContainerClass={classes.owl_nav_cont}
                >
                    <div className={`item ${classes.c_item}`} >
                        <img src={arr[0]} />
                    </div>
                    <div className={`item ${classes.c_item}`} >
                        <img src={arr[1]} />
                    </div>
                    <div className={`item ${classes.c_item}`} >
                        <img src={arr[2]} />
                    </div>
                    <div className={`item ${classes.c_item}`} >
                        <img src={arr[3]} />
                    </div>
                </ReactOwlC>
            </section>
        </div>
    );
}

export default ContestPage;

/*
    page structure :-
        1. carousel at the top that will show some event brand/slides .  -- done :) 
        2. event/exam/contest registration information
            - deadline , registration fees, registration time window , registered count, try to showcase the importannce of the event
            - payment. after successfull payment the candidate will be successfully registered.
        3. event eligibility
        4. event/exam timeline/datetime
        5. event rules and regulations
        6. event/exam prizes
        7. important contacts from organizers
        8. important attachements/informations
        9. rewards and prizes
        10. FAQ's
*/