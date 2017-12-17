/*
Hide elements
*/
var selectedElements = [document.getElementsByClassName('_ipn'),
                        document.getElementsByClassName('UFILikeSentence'),
                        document.getElementsByClassName('UFIShareRow '),
                        document.getElementsByClassName('UFIReplySocialSentenceLinkText')]
selectedElements = [].concat.apply([], selectedElements);
for (var i = 0; i < selectedElements.length; i ++) {
        selectedElements[i].style.display = 'none';
}
