$(document).ready(function(){

    var myVideoId = -1;

    setTimeout(function() {
        for(var x = 3; x >= 0; x--){
            if($("#box" + x).prop("readyState") != 0){
                myVideoId = x;
                break;
            }
        }
        console.log(myVideoId)
    }, 2000);

    $("#muteSwitch").click(function(){
        if($(this).text() == "Mute"){
            $("#box" + myVideoId).prop("muted", false)
            $("#box" + myVideoId).prop("volume", 0.8)
            $(this).text("Unmute");
        }
        else{
            $("#box" + myVideoId).prop("muted", true)
            $("#box" + myVideoId).prop("volume", 0)
            $(this).text("Mute");
        }
    });

    $("#cameraSwitch").click(function(){
        var video = document.getElementById("box" + myVideoId);
        var button = $(this);
        if(button.text().startsWith("Pause")){
            button.text("Play Camera")
            video.pause()
        }
        else{
            button.text("Pause Camera")
            video.play()
        }
    });

    $("#cancelCall").click(function(){
        console.log(easyrtc.getConnectionCount())
        if(myVideoId > 0){
            var easyrtcid = easyrtc.getIthCaller(myVideoId -1);
            collapseToThumb();
            setTimeout( function() {
                easyrtc.hangup(easyrtcid);
            }, 400);
        }
    });
});

