// const addClickEvent = () => {
//     document.addEventListener('click', () => {
//         const video = document.querySelector('video');
//         // const videoMessage = document.getElementById('video-message');

//         video.play();
//         console.log("click")
//         // document.body.removeChild(videoMessage);
//     });
// };

const form = document.getElementById('form');
const username = document.getElementById('username');
const lastusername = document.getElementById('lastusername');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const agree = document.getElementById('agree');
console.log(agree.value);
const submitFormData = document.getElementById("submitForm");
form.addEventListener('submit', e => {
    formouter.style.display="none"
    // if(username.length.value > 0 && lastusername.length.value > 0 && email.length.value > 0 &&  mobile.length.value > 0){
    //     submitForm.removeAttribute('disabled');
    // }else{
    //     submitForm.setAttribute('disabled','disabled')
    // }
    console.log(agree.value);
    console.log(username.value,"l");
    e.preventDefault();
    const payload = new FormData(form);
    console.log([...payload].length);
    //api to post user data
    fetch("http://httpbin.org/post",{
      method:"POST",
      body:payload
    }).then(res=>res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const lastValueName = lastusername.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const agreeValue = agree.value.trim();

    if(agreeValue === ""){
        setError(agree, 'check terms & condition.');
    }else{
        setSuccess(agree);
    }

    if(lastValueName  === '') {
        setError(lastusername, 'Please Enter Your Last Name');
    }else if(lastValueName.length < 4){ 
        setError(lastusername, 'Please Enter minimum 4 characters.');
    } else {
        setSuccess(lastusername);
    }

    if(usernameValue === '') {
        setError(username, 'Please Enter Your First Name.');
    } else if(usernameValue.length < 4){ 
        setError(username, 'Please Enter minimum 4 characters.');
    }else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    // if(mobileValue === ''){
    //   setError(mobile, 'Mobile number is required');
    // } else if (mobileValue.length < 10){
    //   setError(mobile, 'Mobile number must be at least 10 character.')
    // }
    if(mobileValue === '') {
        setError(mobile, 'Mobile number is required');
    } else if (mobileValue.length < 10 ) {
        setError(mobile, 'Mobile number must be at least 10 character.')
    } else {
        setSuccess(mobile);
    }

    // if(password2Value === '') {
    //     setError(password2, 'Please confirm your password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Passwords doesn't match");
    // } else {
    //     setSuccess(password2);
    // }
    
};
function manage(username) {
        var bt = document.getElementById('btSubmit');
        if (username.value && lastusername.value && email.value && mobile.value != '') {
            bt.disabled = false;
        }
        else {
            bt.disabled = true;
        }
    }
    
   runtest.onclick=()=>{
    console.log("runtest")
    smileometerouter.style.display="none"
    formouter.style.display="block"
   }

   function imagefun() {
    var Image_Id = document.getElementById('hoverChange');
    if (Image_Id.src.match("/assets/instanthover.png")) {
        Image_Id.src = "/assets/instant.png"
    }
    else {
        Image_Id.src = "/assets/instanthover.png";
    }
}


function imagefunction() {
    var Image_Id = document.getElementById('beautyImg');
    if (Image_Id.src.match("/assets/kithover.png")) {
        Image_Id.src = "/assets/beautykit.png"
    }
    else {
        Image_Id.src = "/assets/kithover.png";
    }
}
// const start = document.getElementById("start");
// const mobilebiewonly = document.getElementById("mobilebiewonly");
// const vid = document.getElementById("vid");
// const modelvid = document.getElementById("modelvid");

AFRAME.registerComponent('code', {
    schema: {
        
    },

    init: function () {
        console.log("aframe")
        const smile=['#soccerPlayerVideo','#soccerPlayerVideo1','#soccerPlayerVideo2','#soccerPlayerVideo3','#soccerPlayerVideo4']
      // Do something when component first attached.
    //   bubbles(0)
      function bubbles(i){
        console.log("aframe")
        const soccerPlayer=document.getElementById("soccerPlayer")
        const soccerPlayerVideo=document.querySelector(`${smile[i]}`)
        // vid.pause();
        soccerPlayer.setAttribute("material",'src', `${smile[i]}`)
        // soccerPlayerVideo.pause()      
          soccerPlayerVideo.play()

      }

    },

});

function startexp(){
    console.log("start click")
    mobilebiewonly.style.display="none";
    vidframe1.style.display="block";
    vidframe1.play();
    setTimeout(() => {
        
        vidframe2.style.display="block";
        vidframe2.play();
          
    }, 7000);
    setTimeout(() => {
        vidframe2.style.display="none";
        vidframe3.play();
        vidframe3.style.display="block";    
       
        

    }, 15000);
    setTimeout(() => {
         vidframe1.style.display="none";   
       
        

    }, 15500);
    setTimeout(() => {
        vidframe3.style.display="none"; 
        smileometerouter.style.display="block"

   }, 21000);
    
  

}

// start.onclick = () => {
 

// }
// window.addEventListener('load', addClickEvent);