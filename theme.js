function addRoundTab(){
	//把div追加到body
    if (document.getElementsByClassName("RoundTab").length < 1){
        var x = document.getElementsByClassName("dock__item")
        var i;
        for (i = 0; i < x.length; i++) {
            //创建一个div
            var div = document.createElement("div");        
            //为div创建属性class = "test"
            var divattr = document.createAttribute("class");
            divattr.value = "RoundTab"; 
            //把属性class = "test"添加到div
            div.setAttributeNode(divattr);
            var style = document.createAttribute("style");
            div.setAttributeNode(style);
            div.style.float="left";
            div.style.position="absolute";
            div.style.width = (0+"px");
            div.style.height = (0+"px");
            x[i].appendChild(div) ;
        }
    }
}
function addRoundTab2(){
    if (document.getElementsByClassName("RoundTab2").length < 1){
        var x = document.getElementsByClassName("dock__item")
        var i;
        for (i = 0; i < x.length; i++) {
            var div = document.createElement("div");        
            var divattr = document.createAttribute("class");
            divattr.value = "RoundTab2"; 
            div.setAttributeNode(divattr);
            var style = document.createAttribute("style");
            div.setAttributeNode(style);
            div.style.float="left";
            div.style.position="absolute";
            div.style.width = (0+"px");
            div.style.height = (0+"px");
            x[i].appendChild(div) ;
        }
    }
}

(function(){
    addRoundTab();
    addRoundTab2();
})()
