
function loadLang(PackagePrefix) {
    var text, parser, xmlLangDoc;
    var rootNode,childNodes; 


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {  
        var indexList; 
        var textList=[];
        indexList= 0;
        text = xhttp.responseText;
        parser = new DOMParser();
        xmlLangDoc = parser.parseFromString(text,"text/xml");
        rootNode = xmlLangDoc.children[0];
        childNodes = rootNode.children;
        for(var i = 0; i < childNodes.length; i++)
        {
            var node;
            node = childNodes[i];
            var textNode = document.getElementById(node.id);
            if(textNode!=null){
                textList.push(node.innerHTML);
                $('#'+node.id).animate({
                    'opacity' : 0
                }, 400, function(){
                    console.log(node.id)
                    $(this).html(textList[indexList]).animate({'opacity': 1}, 400);
                    indexList++});
                //$('#'+node.id).text(node.innerHTML);
                //textNode.innerText=node.innerHTML
            }else{
                console.log("Error on Node Id-> " + node.id);
            }
            
            
        }

    }
    };
    var languagePicker = document.getElementById("LanguagePicker");
    languagePicker.innerText = PackagePrefix;
    var buttonNode = document.getElementById("Download-Button");
    buttonNode.href="pdf/Resume_Javier_Ramirez_"+PackagePrefix+".pdf";
    xhttp.open("GET", "language_packages/"+PackagePrefix+".xml", true);
    xhttp.send();

}





