// Function to update the time every second
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  document.getElementById(
    "timeDisplay"
  ).textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  setTimeout(updateTime, 1000);
}

updateTime();


// Function for music control
function musicControl() {
  document.addEventListener("DOMContentLoaded", function () {
    var musicControlButton = document.getElementById("enableMusicButton");
    var audioClip = document.getElementById("audioClip");
    var isPlaying = false;

    musicControlButton.addEventListener("click", function () {
      if (!isPlaying) {
        audioClip.play();
        musicControlButton.textContent = "Mute";
        isPlaying = true;
      } else {
        audioClip.pause();
        musicControlButton.textContent = "Enable Music";
        isPlaying = false;
      }
    });
  });
}

musicControl();

function typeIntro() {
const text = "I am Shiv Pratap Singh, pursuing batchleors\nin Computer Science Engineering.\nI am a so-called Hacker, a Pentester or you can say a Security Engineer.\nSecured Netflix, GoPro, NASA, and the list goes on.\n\nIn short, I make business safer in the digital world.";
const textContainer = document.getElementById('intro');

let index = 0;
const cursor = document.createElement('span');
cursor.id = 'cursor';
cursor.textContent = '_';
textContainer.appendChild(cursor);

function typeWriter() {
    if (index < text.length) {
        textContainer.textContent = text.substring(0, index + 1);
        textContainer.appendChild(cursor);
        index++;
        setTimeout(typeWriter, 25);
    } else {
        cursor.style.display = 'none';
    }
}

window.onload = typeWriter;


}

typeIntro()