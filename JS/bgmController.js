
/*bgm开关函数*/
{
    function bgmOTF() {
        var text = document.getElementById("bgmOF").innerHTML;
        var audio = document.getElementById("a");
        if (text === "B A C K T R A C K  :  O N") {
            audio.play();
        }
        else {
            audio.pause();
        }
    }
}