//! Passar telas
var audio_click = document.querySelector(".audio-click");
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
  audio_click.play();
}

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

//! spectrum pergunta1
$(document).ready(function() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
      alert('Your browser does not support the Web Audio API');
      return;
  }

  const audioElement1 = $('.audio1')[0];
  const audioElement2 = $('.audio2')[0];
  const audioElement3 = $('.audio3')[0];
  const canvas1 = $('.canvas1')[0];
  const canvas2 = $('.canvas2')[0];
  const canvas3 = $('.canvas3')[0];
  const canvasContext1 = canvas1.getContext('2d');
  const canvasContext2 = canvas2.getContext('2d');
  const canvasContext3 = canvas3.getContext('2d');
  let audioContext1;
  let audioContext2;
  let audioContext3;
  let analyser1;
  let analyser2;
  let analyser3;
  let source1;
  let source2;
  let source3;

  function initAudioContext1() {
      if (!audioContext1) {
          audioContext1 = new AudioContext();
          analyser1 = audioContext1.createAnalyser();
          source1 = audioContext1.createMediaElementSource(audioElement1);
          source1.connect(analyser1);
          analyser1.connect(audioContext1.destination);
          analyser1.fftSize = 256;
      }
  }
  function initAudioContext2() {
    if (!audioContext2) {
        audioContext2 = new AudioContext();
        analyser2 = audioContext2.createAnalyser();
        source2 = audioContext2.createMediaElementSource(audioElement2);
        source2.connect(analyser2);
        analyser2.connect(audioContext2.destination);
        analyser2.fftSize = 256;
    }
  }
  function initAudioContext3() {
    if (!audioContext3) {
        audioContext3 = new AudioContext();
        analyser3 = audioContext3.createAnalyser();
        source3 = audioContext3.createMediaElementSource(audioElement3);
        source3.connect(analyser3);
        analyser3.connect(audioContext3.destination);
        analyser3.fftSize = 256;
    }
  }

  function draw1() {
      requestAnimationFrame(draw1);

      const bufferLength = analyser1.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser1.getByteFrequencyData(dataArray);

      canvasContext1.fillStyle = '#3B3B3B';
      canvasContext1.fillRect(0, 0, canvas1.width, canvas1.height);

      const barWidth = (canvas1.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          const red = barHeight + 250;
          const green = 250;
          const blue = 250;

          canvasContext1.fillStyle = `rgb(${red},${green},${blue})`;
          canvasContext1.fillRect(x, canvas1.height - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
      }
  }
  function draw2() {
    requestAnimationFrame(draw2);

    const bufferLength = analyser2.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser2.getByteFrequencyData(dataArray);

    canvasContext2.fillStyle = '#3B3B3B';
    canvasContext2.fillRect(0, 0, canvas2.width, canvas2.height);

    const barWidth = (canvas2.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const red = barHeight + 250;
        const green = 250;
        const blue = 250;

        canvasContext2.fillStyle = `rgb(${red},${green},${blue})`;
        canvasContext2.fillRect(x, canvas2.height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
    }
  }
  function draw3() {
    requestAnimationFrame(draw3);

    const bufferLength = analyser3.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser3.getByteFrequencyData(dataArray);

    canvasContext3.fillStyle = '#3B3B3B';
    canvasContext3.fillRect(0, 0, canvas3.width, canvas3.height);

    const barWidth = (canvas3.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        const red = barHeight + 250;
        const green = 250;
        const blue = 250;

        canvasContext3.fillStyle = `rgb(${red},${green},${blue})`;
        canvasContext3.fillRect(x, canvas3.height - barHeight / 2, barWidth, barHeight / 2);

        x += barWidth + 1;
    }
  }

  var audio_pergunta1 = document.querySelector(".audio-pergunta1");

  $(".play1").click(function() {
    audio_pergunta1.play();
    initAudioContext1();
    draw1();

    $(".play1").hide();
    $(".pause1").show();
  });
  $(".pause1").click(function() {
    audio_pergunta1.pause();

    $(".play1").show();
    $(".pause1").hide();
  });

  var audio_pergunta2 = document.querySelector(".audio-pergunta2");

  $(".play2").click(function() {
    audio_pergunta2.play();
    initAudioContext2();
    draw2();

    $(".play2").hide();
    $(".pause2").show();
  });
  $(".pause2").click(function() {
    audio_pergunta2.pause();

    $(".play2").show();
    $(".pause2").hide();
  });

  var audio_pergunta3 = document.querySelector(".audio-pergunta3");

  $(".play3").click(function() {
    audio_pergunta3.play();
    initAudioContext3();
    draw3();

    $(".play3").hide();
    $(".pause3").show();
  });
  $(".pause3").click(function() {
    audio_pergunta3.pause();

    $(".play3").show();
    $(".pause3").hide();
  });
});

//! Quiz
var audio_pergunta1 = document.querySelector(".audio-pergunta1");
var audio_pergunta2 = document.querySelector(".audio-pergunta2");
var audio_pergunta3 = document.querySelector(".audio-pergunta3");
var audio_correto = document.querySelector(".audio-correto");
var audio_incorreto = document.querySelector(".audio-incorreto");
var audio_vitoria = document.querySelector(".audio-vitoria");

$('.true1').click(function (){
  audio_correto.play();
  $('.true1').css({border: "1px solid #64E74A"});
  $('.true1 .circulo').css({border: "1px solid #64E74A"});
  $('.true1 .circulo img').show();
  $('.opcoes button').prop("disabled", true);
  $('.grid-spectrum button').prop("disabled", true);

  audio_pergunta1.pause();
  audio_pergunta1.load();
  $(".play1").show();
  $(".pause1").hide();

  setTimeout(function(){
    $('.feedback-certo').css({display: "flex"});
  },800);
  setTimeout(function(){
    $('.feedback-certo').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.atividade1, .circulo img').hide();
    $('.atividade2').show();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});
$('.true2').click(function (){
  audio_correto.play();
  $('.true2').css({border: "1px solid #64E74A"});
  $('.true2 .circulo').css({border: "1px solid #64E74A"});
  $('.true2 .circulo img').show();
  $('.opcoes button').prop("disabled", true);

  audio_pergunta2.pause();
  audio_pergunta2.load();
  $(".play2").show();
  $(".pause2").hide();

  setTimeout(function(){
    $('.feedback-certo').css({display: "flex"});
  },800);
  setTimeout(function(){
    $('.feedback-certo').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.atividade2, .circulo img').hide();
    $('.atividade3').show();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});
$('.true3').click(function (){
  audio_correto.play();
  $('.true3').css({border: "1px solid #64E74A"});
  $('.true3 .circulo').css({border: "1px solid #64E74A"});
  $('.true3 .circulo img').show();
  $('.opcoes button').prop("disabled", true);

  audio_pergunta3.pause();
  audio_pergunta3.load();
  $(".play3").show();
  $(".pause3").hide();

  setTimeout(function(){
    $('.feedback-certo').css({display: "flex"});
  },800);
  setTimeout(function(){
    audio_vitoria.play();
    $('.feedback-certo').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.atividade3, .circulo img').hide();
    $('.tela-final').show();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});

$('.false1').click(function (){
  audio_incorreto.play();
  $('.true1').css({border: "1px solid #64E74A"});
  $('.true1 .circulo').css({border: "1px solid #64E74A"});
  $('.true1 .circulo img').show();
  $('.false1').css({border: "1px solid #F00B00"});
  $('.false1 .circulo').css({border: "1px solid #F00B00"});
  $('.false1 .circulo img').show();
  $('.opcoes button').prop("disabled", true);

  audio_pergunta1.pause();
  audio_pergunta1.load();
  $(".play1").show();
  $(".pause1").hide();

  audio_pergunta2.pause();
  audio_pergunta2.load();
  $(".play2").show();
  $(".pause2").hide();

  audio_pergunta3.pause();
  audio_pergunta3.load();
  $(".play3").show();
  $(".pause3").hide();

  setTimeout(function(){
    $('.feedback-erro').css({display: "flex"});
  },800);
  setTimeout(function(){
    $('.feedback-erro').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.circulo img').hide();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});
$('.false2').click(function (){
  audio_incorreto.play();
  $('.true1').css({border: "1px solid #64E74A"});
  $('.true1 .circulo').css({border: "1px solid #64E74A"});
  $('.true1 .circulo img').show();
  $('.false2').css({border: "1px solid #F00B00"});
  $('.false2 .circulo').css({border: "1px solid #F00B00"});
  $('.false2 .circulo img').show();
  $('.opcoes button').prop("disabled", true);

  audio_pergunta1.pause();
  audio_pergunta1.load();
  $(".play1").show();
  $(".pause1").hide();

  audio_pergunta2.pause();
  audio_pergunta2.load();
  $(".play2").show();
  $(".pause2").hide();

  audio_pergunta3.pause();
  audio_pergunta3.load();
  $(".play3").show();
  $(".pause3").hide();

  setTimeout(function(){
    $('.feedback-erro').css({display: "flex"});
  },800);
  setTimeout(function(){
    $('.feedback-erro').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.circulo img').hide();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});
$('.false3').click(function (){
  audio_incorreto.play();
  $('.true1').css({border: "1px solid #64E74A"});
  $('.true1 .circulo').css({border: "1px solid #64E74A"});
  $('.true1 .circulo img').show();
  $('.false3').css({border: "1px solid #F00B00"});
  $('.false3 .circulo').css({border: "1px solid #F00B00"});
  $('.false3 .circulo img').show();
  $('.opcoes button').prop("disabled", true);

  audio_pergunta1.pause();
  audio_pergunta1.load();
  $(".play1").show();
  $(".pause1").hide();

  audio_pergunta2.pause();
  audio_pergunta2.load();
  $(".play2").show();
  $(".pause2").hide();

  audio_pergunta3.pause();
  audio_pergunta3.load();
  $(".play3").show();
  $(".pause3").hide();

  setTimeout(function(){
    $('.feedback-erro').css({display: "flex"});
  },800);
  setTimeout(function(){
    $('.feedback-erro').hide();
    $('.opcoes button').css({border: "1px solid #707070"});
    $('.opcoes button, .opcoes button .circulo').css({border: "1px solid #707070"});
    $('.circulo img').hide();
    $('.opcoes button').prop("disabled", false);
    $('.grid-spectrum button').prop("disabled", false);
  },2000);
});