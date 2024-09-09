$(window).on('load', function(){
    $('body').addClass('loaded');
  })

  // number of drops created.
var nbDrop = 100; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function timingRange( minNum, maxNum) {
  return (Math.random() * (maxNum - minNum + 1)) + minNum;
}

    // function to generate drops
    function createRain() {

    for( i=1;i<nbDrop;i++) {
    var dropLeft = randRange(0,1600);
    var dropTop = randRange(-1000,500);
    var pageHeight = $(window).height();
    var timing = timingRange(.5, 10);
    var customSize = timing * 25;
    var customZ = -99;

    $('.rain').append('<div style="background-color: rgba(87,38,64,.5); border-radius: 50%; z-index: '+customZ+'; width: '+customSize+'px; height: '+customSize+'px; -webkit-animation: fall '+timing+'s linear infinite; -moz-animation: fall '+timing+'s linear infinite;" className="drop" id="drop'+i+'"></div>').css('overflow', 'hidden');
    
    // Add the @keyframes rule for the fall animation
    $('.rain').append('<style>@keyframes fall { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }</style>');
    $('#drop'+i).css('left',dropLeft);
    $('#drop'+i).css('top',dropTop);
    console.log(pageHeight+"px");
    }

}
// Make it rain
createRain();
