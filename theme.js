function addRoundTab(){
	//把div追加到body
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
        // div.style.left=(x[i].offsetLeft+"px")
        // div.style.top =(x[i].offsetTop+"px")
        // div.style.width = (x[i].offsetWidth+"px")
        // div.style.height = (x[i].offsetHeight+"px")
        div.style.width = (10+"px")
        div.style.height = (10+"px")
        // x[i].parentNode.appendChild(div)
        x[i].appendChild(div) 
    }
}
function addRoundTab2(){
	//把div追加到body
    var x = document.getElementsByClassName("dock__item")
    var i;
    for (i = 0; i < x.length; i++) {

        //创建一个div
        var div = document.createElement("div");        
        //为div创建属性class = "test"
        var divattr = document.createAttribute("class");
        divattr.value = "RoundTab2"; 
        //把属性class = "test"添加到div
        div.setAttributeNode(divattr);
        var style = document.createAttribute("style");
        div.setAttributeNode(style);
        // div.style.left=(x[i].offsetLeft+"px")
        // div.style.top =(x[i].offsetTop+"px")
        // div.style.width = (x[i].offsetWidth+"px")
        // div.style.height = (x[i].offsetHeight+"px")
        div.style.width = (10+"px")
        div.style.height = (10+"px")
        // x[i].parentNode.appendChild(div)
        x[i].appendChild(div) 
    }
}
function addRoundTab3(){
	//把div追加到body
    var x = document.getElementsByClassName("dock__item")
    var i;
    for (i = 0; i < x.length; i++) {

        //创建一个div
        var div = document.createElement("div");        
        //为div创建属性class = "test"
        var divattr = document.createAttribute("class");
        divattr.value = "RoundTab3"; 
        //把属性class = "test"添加到div
        div.setAttributeNode(divattr);
        var style = document.createAttribute("style");
        div.setAttributeNode(style);
        // div.style.left=(x[i].offsetLeft+"px")
        // div.style.top =(x[i].offsetTop+"px")
        // div.style.width = (x[i].offsetWidth+"px")
        // div.style.height = (x[i].offsetHeight+"px")
        div.style.width = (10+"px")
        div.style.height = (10+"px")
        // x[i].parentNode.appendChild(div)
        x[i].appendChild(div) 
    }
}

function addRoundTab4(){
	//把div追加到body
    var x = document.getElementsByClassName("dock__item")
    var i;
    for (i = 0; i < x.length; i++) {

        //创建一个div
        var div = document.createElement("div");        
        //为div创建属性class = "test"
        var divattr = document.createAttribute("class");
        divattr.value = "RoundTab4"; 
        //把属性class = "test"添加到div
        div.setAttributeNode(divattr);
        var style = document.createAttribute("style");
        div.setAttributeNode(style);
        // div.style.left=(x[i].offsetLeft+"px")
        // div.style.top =(x[i].offsetTop+"px")
        // div.style.width = (x[i].offsetWidth+"px")
        // div.style.height = (x[i].offsetHeight+"px")
        div.style.width = (10+"px")
        div.style.height = (10+"px")
        // x[i].parentNode.appendChild(div)
        x[i].appendChild(div) 
    }
}

(function(){
    addRoundTab()
    addRoundTab2()
    addRoundTab3()
    addRoundTab4()
})()
