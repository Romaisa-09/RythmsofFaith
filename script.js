console.log("Welcome to Rythms OF Faith");

// Initialize the Variables
let NasheedIndex = 0;
let audioElement = new Audio('Nasheeds/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterNasheedName = document.getElementById('masterNasheedName');
let NasheedItems = Array.from(document.getElementsByClassName('NasheedItem'));

let Nasheeds = [
    {NasheedName: "Illahi teri Chokhat pr - Junaid Jamshed", filePath: "Nasheeds/1.mp3", coverPath: "covers/1.jpg"},
    {NasheedName: "Mera Dil Badal De - Junaid Jamshed", filePath: "Nasheeds/2.mp3", coverPath: "covers/2.webp"},
    {NasheedName: "Hasbi rabbi - Sami Yusuf", filePath: "Nasheeds/3.mp3", coverPath: "covers/3.jpg"},
    {NasheedName: "Mawlana - Sami Yusuf", filePath: "Nasheeds/4.mp3", coverPath: "covers/4.jpeg"},
    {NasheedName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "Nasheeds/5.mp3", coverPath: "covers/5.jpg"},
    {NasheedName: "Rabba - Salam-e-Ishq", filePath: "Nasheeds/2.mp3", coverPath: "covers/6.jpg"},
    {NasheedName: "Sakhiyaan - Salam-e-Ishq", filePath: "Nasheeds/2.mp3", coverPath: "covers/7.jpg"},
    {NasheedName: "Bhula Dena - Salam-e-Ishq", filePath: "Nasheeds/2.mp3", coverPath: "covers/8.jpg"},
    {NasheedName: "Tumhari Kasam - Salam-e-Ishq", filePath: "Nasheeds/2.mp3", coverPath: "covers/9.jpg"},
    {NasheedName: "Na Jaana - Salam-e-Ishq", filePath: "Nasheeds/4.mp3", coverPath: "covers/10.jpg"},
]

NasheedItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = Nasheeds[i].coverPath; 
    element.getElementsByClassName("NasheedName")[0].innerText = Nasheeds[i].NasheedName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('NasheedItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('NasheedItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        NasheedIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Nasheeds/${NasheedIndex+1}.mp3`;
        masterNasheedName.innerText = Nasheeds[NasheedIndex].NasheedName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(NasheedIndex>=9){
        NasheedIndex = 0
    }
    else{
        NasheedIndex += 1;
    }
    audioElement.src = `Nasheeds/${NasheedIndex+1}.mp3`;
    masterNasheedName.innerText = Nasheeds[NasheedIndex].NasheedName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>
{
    if(NasheedIndex<=0){
        NasheedIndex = 0
    }
    else{
        NasheedIndex -= 1;
    }
    audioElement.src = `Nasheeds/${NasheedIndex+1}.mp3`;
    masterNasheedName.innerText = Nasheeds[NasheedIndex].NasheedName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})