$(document).ready(function(){
    //alert("we are ready!");
    $("form").submit(function(e){
        e.preventDefault();
        var mytext = $("#mytext").val()
        console.log(mytext)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/demo', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                var money = JSON.parse(xhr.responseText).prize
                $(".prizemoney").html(`<h1>Congrats! you just won ${money}</h1>`)
            }
        }
xhr.send(`text=${mytext}`);
    })
})