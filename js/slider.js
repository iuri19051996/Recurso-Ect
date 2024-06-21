//! Passar telas
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n){
  var i;
  var x = document.getElementsByClassName("recurso");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//! Audio
var click_vitoria = document.querySelector(".click-vitoria");

$('#final').click(function (){
  click_vitoria.play();
  click_btn.pause();
});

//! Tab
function tabify() {
  document
      .querySelectorAll(".recurso h1, .recurso p, .recurso img, .recurso button")
      .forEach((el) => {
      el.setAttribute("tabindex", "0");
  });
}

function initPage() {
  tabify();
}
initPage();


$(document).ready(function() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
      alert('Your browser does not support the Web Audio API');
      return;
  }

  const audioElement = $('.audio')[0];
  const canvas = $('#canvas')[0];
  const canvasContext = canvas.getContext('2d');
  let audioContext;
  let analyser;
  let source;

  function initAudioContext() {
      if (!audioContext) {
          audioContext = new AudioContext();
          analyser = audioContext.createAnalyser();
          source = audioContext.createMediaElementSource(audioElement);
          source.connect(analyser);
          analyser.connect(audioContext.destination);
          analyser.fftSize = 256;
      }
  }

  function draw() {
      requestAnimationFrame(draw);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);

      canvasContext.fillStyle = '#3B3B3B';
      canvasContext.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          const red = barHeight + 250;
          const green = 250;
          const blue = 250;

          canvasContext.fillStyle = `rgb(${red},${green},${blue})`;
          canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
      }
  }

  var audio_pergunta1 = document.querySelector(".audio-pergunta1");

  $(".play1").click(function() {
    audio_pergunta1.play();
    initAudioContext();
    draw();

    $(".play1").hide();
    $(".pause1").show();
  });
  $(".pause1").click(function() {
    audio_pergunta1.pause();

    $(".play1").show();
    $(".pause1").hide();
  });
});
