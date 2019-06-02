/*!
=========================================================
* Editable precomposed tweet button by twtpsa
=========================================================

* Demo Page: https://tweetpsa.github.io/sewa
* Copyright 2019 TWTPSA (https://www.twitter.com/twtpsa)
* Licensed under MIT (https://github.com/tweetpsa/twtbtn-edtprestatus/blob/master/LICENSE)
* Github repo (https://github.com/tweetpsa/twtbtn-edtprestatus)
*/

function myTweet() {
  var x = document.getElementById("myText").value;
  window.open('https://twitter.com/intent/tweet?&text=' + x , "_blank");
}
