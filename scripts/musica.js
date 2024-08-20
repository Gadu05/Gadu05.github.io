$(function(){

    var cvAudio = document.getElementById('cv_audio');
    $('.cv_item').click(function(){
        var audioLink = $(this).attr('audioLink');
        console.log(audioLink);
        if(audioLink){
            cvAudio.src = audioLink;
            cvAudio.play();
        }
    });
    
});