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


/*
To use Twitter DM (direct message) instead of status tweet, simply change the url in the script to the one provided below and add your twitter account user id at 'PUTUSERIDHERE'.
You can find the user ID under [Your Twitter data in Settings](https://twitter.com/settings/your_twitter_data).

> 'https://twitter.com/messages/compose?recipient_id=PUTUSERIDHERE&text='


 */
