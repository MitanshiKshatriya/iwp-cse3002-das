changeBG = () => {

    //red
    $("#red").mouseover(function(){
        $("#red").mouseover(function(){
            $("#red").css("background-color", "red");
            $("#red").css("color", "white");
          });
          $("#red").mouseout(function(){
            $("#red").css("background-color", "white");
            $("#red").css("color", "red");
          });
    })

    //blue
    $("#blue").mouseover(function(){
        $("#blue").mouseover(function(){
            $("#blue").css("background-color", "blue");
            $("#blue").css("color", "white");
          });
          $("#blue").mouseout(function(){
            $("#blue").css("background-color", "white");
            $("#blue").css("color", "blue");
          });
    })

    //green
    $("#green").mouseover(function(){
        $("#green").mouseover(function(){
            $("#green").css("background-color", "green");
            $("#green").css("color", "white");
          });
          $("#green").mouseout(function(){
            $("#green").css("background-color", "white");
            $("#green").css("color", "green");
          });
    })


}

extractText = () => {
$("#extract").click(function(){
    var extractedText = $(".extraction li").text();
    console.log(extractedText)
    window.alert(extractedText);
})
}

searchCity = () => {
    
    

    
    $("#search-btn").click(function(){
        
        var searchedCity = $("#search-bar").val();
        console.log("city to be searched = "+searchedCity);
        var ul = $(".searchCity");
    var li = $(".myCity");

    //console.log(ul,li.length,li[1].innerHTML);
        for (var i = 0; i < li.length; i++) {
            a = li[i].innerHTML;
            //console.log(searchedCity,li[i].innerHTML,a.includes(searchedCity));
            //console.log(li[i])
            if (a.includes(searchedCity)) {
                
              li[i].style.fontWeight = 900;
            } else {
              //console.log("else")
              li[i].style.fontWeight = 'normal';
            }
          }
        }

    )
    
}
checkChecked = () => {
    $('input[type=checkbox]').change(function() {
        console.log("here")
        if ($("input[type=checkbox]").prop( 
            "checked")==true) {
              
            $('#submit').removeAttr('disabled');
        } else {
              
            $('#submit').attr('disabled', 'disabled');
        }
    });
}

rl = () => {
    $("#rl").mousedown(function(event){
        switch(event.which){
          case 1:
          alert("Left button clicked");
          break;
          case 2:
          alert("Middle button clicked");
          break;
          case 3:
          alert("Right button clicked");
          break;
        }
      });
}

removeCSS = () => {
    $("#removeCSS").click(function(){
        //color:cornflowerblue;background-color: darkmagenta; text-decoration: underline;
        $("#removedH3").css("color","");
        $("#removedH3").css("background-color","");
        $("#removedH3").css("text-decoration","none");
      });
}


$(document).ready(function(){
changeBG();
extractText();
searchCity();
checkChecked();
rl();
removeCSS();
})