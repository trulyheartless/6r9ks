if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
      loaded();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
      loaded();
    });
  }
  function loaded() {
    setInterval(loop, 300);
  }
  var x = 0;
  var titleText = [
    "6",
    "6r",
    "6r9",
    "6r9k",
    "6r9ks",
    "6r9ks",
    "6r9k",
    "6r9",
    "6r",
    "6",
    "Crucifiedv1",
    "Dev",
    "Sinner",
    "Hurtcore",
    "Warcrime",
    "Glitch",
    "Hate",
    "Fed"
  ];
  
  function loop() {
    document.getElementsByTagName("title")[0].innerHTML =
      titleText[x++ % titleText.length];
  }
