import React from "react";
import './scss/chapter.scss';
import Tuk from './images/Tukelc.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import ChapterData from './ChapterData'

const ChapterInfo = ()=>{
    return(
        <>
        <div class="holder"> 
            <div class="holderMoreInfo">
                < MoreInfo moredata ={ChapterData}/> 
            </div>      
            <div class= "container">
                <Chapter_content details = {ChapterData}/>
            </div>
        </div>
        </>
    )

}

/* -----------this functions open and close the dialogue box for chapters----*/

function loadChapterContent(value){
    let moreInfoPreview = document.querySelector('.holderMoreInfo');
    let data = ChapterData[value];
    
    let C_name = data.chapterName;
    let C_images = data.moreInfo.images.imgs;
    let imageDes= data.moreInfo.images.desc;
    let C_moreDescription= data.moreInfo.moredescription;
    let C_rules =data.moreInfo.rules;
    let C_workDone  = data.moreInfo.workDone;
    let C_motivation = data.moreInfo.motivation;

    document.getElementById("chapterName").textContent = C_name;
    document.getElementById("moreDescript").textContent = C_moreDescription;
    document.getElementById("imgs").src = C_images;
    document.getElementById("imdes").textContent=imageDes;
    document.getElementById("workDone").textContent = C_workDone;
    document.getElementById("rules").textContent = C_rules;
    document.getElementById("inspire").textContent = C_motivation;

    moreInfoPreview.style.display='flex';

}

function closeChapterContent(){
    let moreInfoPreview = document.querySelector('.holderMoreInfo');
    moreInfoPreview.style.display='none'
}



/*------this code is a template that creates cards from list procided in Chapterdata----*/
const Chapter_content = (props) => {

    const navigate = useNavigate()
    return ( 
        <>
        {props.details.map((value, index)=>(

            <div class= "card" key={index}>
                <div class="card_logo">
                    <img src={value.logo} alt={value.chapterName} />
                </div>
                <div class="card_title">
                    <header>{value.chapterName}</header>
                    <p>
                        {value.shortDescription}
                    </p>
                </div>
                <div class="card_buttons">
                    <button class="more" onClick={() => loadChapterContent(index)}>more</button>
                    <button>Join</button>
                </div>
            </div> 
        ))};
        </>

    );

}

/*---this code creates the dialogue box that loads infomation in accordance to index of the card upon clicking the more button--*/
const MoreInfo = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            
                <div class="moreinfo" >
                    <i class="fas fa-times" onClick={closeChapterContent}></i>
                    <div class="C_item">
                        <header id="chapterName"></header>
                        <hr />
                        <p id="moreDescript"></p>
                    </div>
                    <div class="C_item">
                        <header>What we do</header>
                        <hr />
                        <p id="workDone"> </p>
                    </div>
                    <div class="C_item" id="images">
                        <header>Gallery</header>
                        <hr />
                        <div class="images">
                            <img id="imgs" src="..."/>
                            <h6 id="imdes"></h6>
                            
                        </div>
                    </div>
                    
                    <div class="C_item">
                        <header>Rules</header>
                        <hr />
                        <p id="rules"> </p>
                    </div>
                    <div class="C_item">
                        <header>Inpiration</header>
                        <hr />
                        <p id="inspire">
                            The secret to success is constancy. Stick to your purpose and work hard. Otherwise, success is just a dream.
                        </p>
                        
                    </div>
                </div>
        </>
    )
}



export default ChapterInfo;