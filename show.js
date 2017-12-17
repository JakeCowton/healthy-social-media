/*
Show block elements
*/
var selectedElements = document.getElementsByClassName('UFILikeSentence UFIShareRow UFIReplySocialSentenceLinkText');
for (var i = 0; i < selectedElements.length; i ++) {
        selectedElements[i].style.display = 'block';
}

/*
Show inline elements
*/
var selectedElements = document.getElementsByClassName('_ipn');
for (var i = 0; i < selectedElements.length; i ++) {
        selectedElements[i].style.display = 'inline';
}
