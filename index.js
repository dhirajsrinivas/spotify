$(document).ready(function() {
    var believeraudio = $('#believer')[0]; // Get the audio element
    var believerbtn = $('#believerbtn'); // Get the button element

    believerbtn.click(function() {
        if (believeraudio.paused) {
            believeraudio.play();
            believerbtn.text('Pause');
        } else {
            believeraudio.pause();
            believerbtn.text('Play');
        }
    });
});


$(document).ready(function() {
    var shapeofyouaudio = $('#shapeofyou')[0]; // Get the audio element
    var shapeofyoubtn = $('#shapeofyoubtn'); // Get the button element

    shapeofyoubtn.click(function() {
        if (shapeofyouaudio.paused) {
            shapeofyouaudio.play();
            shapeofyoubtn.text('Pause');
        } else {
            shapeofyouaudio.pause();
            shapeofyoubtn.text('Play');
        }
    });
});


$(document).ready(function(){
    var cheapthrillsaudio=$('#cheapthrills')[0];
    var cheapthrillsbtn=$('#cheapthrillsbtn');
    cheapthrillsbtn.click(function(){
        if(cheapthrillsaudio.paused){
            cheapthrillsaudio.play();
            cheapthrillsbtn.text("Pause")
        } else{
            cheapthrillsaudio.pause();
            cheapthrillsbtn.text("Play");
        }

    })
    
})