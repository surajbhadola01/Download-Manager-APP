//ch-14 Download Manager Part 1
window.onload = function(){
    webpage_responsive();
    open_url();
    page_loader();
    backward();
    forward();
}
window.onresize = function(){
    webpage_responsive();
}
//webpage responsive in height

function webpage_responsive(){
    var header_height = this.document.querySelector("header").offsetHeight; //to find the height of header
    var app_height = this.document.querySelector("html").clientHeight;
    var rest_height = app_height - header_height;
    this.document.querySelector("webview").style.height = rest_height +"px";
}

//open url

function open_url(){
    $("form").submit(function(){
        var user_input = $(".search").val(); 
        var webview = $("webview");
        webview.attr("src",user_input);
        return false;
    });    
}

//page loader  

function page_loader(){
    var webview = document.querySelector("webview");
    webview.addEventListener("did-start-loading",function(){
        $(".load").addClass("loader");
    });

    webview.addEventListener("did-finish-load",function(){
        $(".load").removeClass("loader");
        display_url();
    });
}

//display url

function display_url(){
    var webview = document.querySelector("webview");
    $(".search").val(webview.getURL());
}

//backward
function backward(){
    $(".back").click(function(){
        var webview = document.querySelector("webview");
        webview.goBack();
    });
}

//forward
function forward(){
    $(".next").click(function(){
        var webview = document.querySelector("webview");
        webview.goForward();
    });
}