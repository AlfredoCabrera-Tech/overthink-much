const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const startBtn = document.querySelector('.start-button');
const stopBtn = document.querySelector('.stop-button');
const wordsInput = document.querySelector('.listOfWords-input');
const submitBtn = document.querySelector('.submit-btn');

/*let disabledSubmit = true
disabledSubmit*/

submitBtn.disabled = true;
wordsInput.readOnly = false;

let intervalID;

const Timer = () => {
const future = new Date(new Date().getTime() + 2*60000);

let previousTimeBetween;

if(!intervalID){
  intervalID = setInterval(() => {
  const now = new Date();
  const timeBetween = Math.ceil((future - now)/1000);
  
  if(previousTimeBetween !== timeBetween){
    update(timeBetween);
  }
  
  previousTimeBetween = timeBetween;
  
  if(timeBetween===0){
    submitBtn.disabled = false;
    wordsInput.readOnly = true;
    stopTimer();
  }

  //console.log(Math.ceil(timeBetween/1000))
  }, 250);

const update = (time) => {
  const seconds = time%60;
  const minutes = Math.floor((time/60)%60);
  
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;
 //console.log(minutes, seconds)
};

}
};
const startTimer = () => {
  Timer();
  wordsInput.focus();
  submitBtn.disabled = true;
  wordsInput.readOnly = false;
 };

const stopTimer = () => {
  clearInterval(intervalID)
  intervalID = null
   minutesContainer.innerHTML = '0';
  secondsContainer.innerHTML = '00';
};






startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

