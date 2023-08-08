
// document.getElementById("e").innerHTML = myFunction();


//SOUND:

let audio1 = new Audio('sound/128_ClipClopBeat_01_561.wav');
let audio2 = new Audio('sound/128_DrumLoop_SP_238_20.wav');
let audio3 = new Audio('sound/128_BigKickBeat_08_544.wav');
let audio4 = new Audio('sound/128_TribeBeat_01_561.wav');
let audio5 = new Audio('sound/128_JackoBeat_01_561.wav');
let audio6 = new Audio('sound/128_Cm_Drums_01_2_26_SP.wav');


//BUTTON

let button1 = document.getElementById("audio1");
let button2 = document.getElementById("audio2");
let button3 = document.getElementById("audio3");
let button4 = document.getElementById("audio4");
let button5 = document.getElementById("audio5");
let button6 = document.getElementById("audio6");


//FUNCTION

    let audio1Playing = false

		function audio1Toggle() {
      audio1.currentTime = 0;
        if (audio1Playing === false) {
          audio1.play()
          button1.classList.add("blink")
          audio1Playing = true
        } else {
          audio1.pause()
          button1.classList.remove("blink")
          audio1Playing = false
        }
      }
      

      let audio2Playing = false

      function audio2Toggle() {
        audio2.currentTime = 0;
          if (audio2Playing === false) {
            audio2.play()
            button2.classList.add("blink")
            audio2Playing = true
          } else {
            audio2.pause()
            button2.classList.remove("blink")
            audio2Playing = false
          }
        }
  
      
      let audio3Playing = false

      function audio3Toggle() {
        audio3.currentTime = 0;
          if (audio3Playing === false) {
            audio3.play()
            button3.classList.add("blink")
            audio3Playing = true
          } else {
            audio3.pause()
            button3.classList.remove("blink")
            audio3Playing = false
          }
        }


      let audio4Playing = false

      function audio4Toggle() {
        audio4.currentTime = 0;
          if (audio4Playing === false) {
            audio4.play()
            button4.classList.add("blink")
            audio4Playing = true
          } else {
            audio4.pause()
            button4.classList.remove("blink")
            audio4Playing = false
          }
        }


      let audio5Playing = false

      function audio5Toggle() {
        audio5.currentTime = 0;
          if (audio5Playing === false) {
            audio5.play()
            button5.classList.add("blink")
            audio5Playing = true
          } else {
            audio5.pause()
            button5.classList.remove("blink")
            audio5Playing = false
          }
        }

      
      let audio6Playing = false

      function audio6Toggle() {
        audio6.currentTime = 0;
          if (audio6Playing === false) {
            audio6.play()
            button6.classList.add("blink")
            audio6Playing = true
          } else {
            audio6.pause()
            button6.classList.remove("blink")
            audio6Playing = false
          }
        }





//LOOPS


const audio1Check = document.querySelector("#audio1Check")

audio1Check.addEventListener("click", () => {
  if (audio1Check.checked === true) {
    audio1.loop = true
  }
  else {
    audio1.loop = false
  }
})

const audio2Check = document.querySelector("#audio2Check")

audio2Check.addEventListener("click", () => {
  if (audio2Check.checked === true) {
    audio2.loop = true
  }
  else {
    audio2.loop = false
  }
})

const audio3Check = document.querySelector("#audio3Check")

audio3Check.addEventListener("click", () => {
  if (audio3Check.checked === true) {
    audio3.loop = true
  }
  else {
    audio3.loop = false
  }
})

const audio4Check = document.querySelector("#audio4Check")

audio4Check.addEventListener("click", () => {
  if (audio4Check.checked === true) {
    audio4.loop = true
  }
  else {
    audio4.loop = false
  }
})

const audio5Check = document.querySelector("#audio5Check")

audio5Check.addEventListener("click", () => {
  if (audio5Check.checked === true) {
    audio5.loop = true
  }
  else {
    audio5.loop = false
  }
})

const audio6Check = document.querySelector("#audio6Check")

audio6Check.addEventListener("click", () => {
  if (audio6Check.checked === true) {
    audio6.loop = true
  }
  else {
    audio6.loop = false
  }
})




//KEYPRESS:

document.addEventListener('keypress', function(e) {
  if (e.key === 'q') {
    audio1Toggle();
  } else if (e.key === "w") {
  	audio2Toggle();
	} else if (e.key === "e") {
  	audio3Toggle();
	} else if (e.key === "r") {
  	audio4Toggle();
	} else if (e.key === "t") {
  	audio5Toggle();
	} else if (e.key === "y") {
  	audio6Toggle();
	}
});
