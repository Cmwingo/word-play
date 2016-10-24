$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentenceInput").val();
    var words = sentence.split(" ");
    console.log(words);

    var longWords = [];
    words.filter(isLong());
    });
    longWords.reverse();
    console.log(longWords);
    alert(longWords.join(" "));
  });
});

function isLong(word) {
  return word.length > 2;
  }
