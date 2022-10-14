
function loadLang(PackagePrefix) {
    var text, parser, xmlLangDoc;
    var node, childNodes; 


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {   
        text = xhttp.responseText;
        parser = new DOMParser();
        xmlLangDoc = parser.parseFromString(text,"text/xml");

        console.log(text);
        childNodes = xmlLangDoc.children;
        for(var i = 0; i < childNodes.length; i++)
        {
            node = childNodes[i];
            var textNode = document.getElementById(node.id);
            $('#'+node.id).animate({
                'opacity' : 0
            }, 400, function(){
                $(this).html(node.innerHTML).animate({'opacity': 1}, 400);});
            //textNode.innerText=node.innerHTML
        }

    }
    };
    var languagePicker = document.getElementById("LanguagePicker");
    languagePicker.innerText = PackagePrefix;
    var buttonNode = document.getElementById("DownloadButton");
    buttonNode.href="pdf/Resume_Javier_Ramirez_"+PackagePrefix+".pdf";
    xhttp.open("GET", "language_packages/"+PackagePrefix+".xml", true);
    xhttp.send();

}





