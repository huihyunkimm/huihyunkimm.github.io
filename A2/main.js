/* 
[Interaction Design]

This website intentionally uses only two simple interactions to support focus
and reduce distractions while studying.

1) Single Music Track – Play / Stop
The interface includes only two buttons: PLAY and STOP. The PLAY button calls
the play() method to start background music, while STOP uses pause() to halt
the track at the current position. When PLAY is pressed again, the music
continues from where it left off, rather than restarting. This behavior was
chosen to maintain continuity and reduce interruptions, so users can stay
immersed in their study flow.

2) Rain Sound – On / Off (Infinite Loop)
For many people, complete silence while studying can feel uncomfortable. 
Adding a subtle layer of “white noise,” such as rain, helps increase focus and
mask small distractions. The rain sound is set with loop = true so it repeats
endlessly, creating a stable ambient background. However, since not everyone
prefers white noise, a toggle button (the cloud icon) is used. When clicked,
the button turns the rain sound on or off, giving the user control. The design
also includes feedback: the button gains an “active” glow effect.

Overall, these limited but meaningful interactions were selected to align with
the concept of a calm, late-night study atmosphere. By balancing control with simplicity, 
the user receives both functionality and focus.
*/

const music = document.getElementById("music");
const rain = document.getElementById("rain");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const cloudBtn = document.getElementById("cloudBtn");

// Loop
music.loop = true;
rain.loop = true;

// Music play
playBtn.addEventListener("click", () => {
  music.play();
});

// Muisic pause
stopBtn.addEventListener("click", () => {
  music.pause();
});

// Raining sound - on/off
cloudBtn.addEventListener("click", () => {
  if (rain.paused) {
    rain.play();
    cloudBtn.classList.add("active");
  } else {
    rain.pause();
    cloudBtn.classList.remove("active");
  }
});
