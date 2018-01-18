function highlightImg(imgId) {
  if ($(imgId).css('opacity') == 1) {
    $(imgId).fadeTo(300, 0.33);
    $(imgId).addClass("selected");
  }
  else {
    $(imgId).fadeTo(300, 1);
    $(imgId).removeClass("selected");
  }
}

function validate() {
  if ($("#test-name").html() == "pick ur faverite cololr") {
    nextPage();
  }
  else {
    var tempBool = true;
    $(".my-image").each(function(i, obj) {
      if ($(this).hasClass("selected") && !$(this).hasClass("true")) {tempBool = false;}
      else if (!$(this).hasClass("selected") && $(this).hasClass("true")) {tempBool = false;}
    });
    if (tempBool == true) {
      nextPage();
    }
    else {
      $("#main").html("o... i think ur a roboot");
    }
  }
}

function nextPage() {
  if ($("#test-name").html() == "selekt all da cats") {
    $("#test-name").html("wahts the best bnak??");
    var myhtml = '<div class="row"> <div class="col-xs-4 col-md-4"><img class="my-image" id="img1" onclick="highlightImg(\'#img1\')" src="boa.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image true" id="img2" onclick="highlightImg(\'#img2\')" src="chase.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img3" onclick="highlightImg(\'#img3\')" src="wells.png"></div></div>'
    $("#robot-test").html(myhtml);
    $("#progress-bar").attr("aria-valuenow", 20);
    $("#progress-bar").css('width', "20%");
  }
  else if ($("#test-name").html() == "wahts the best bnak??") {
    $("#test-name").html("pick ur faverite cololr");
    var myhtml = '<div class="row"> <div class="col-xs-4 col-md-4"><img class="my-image" id="img1" onclick="highlightImg(\'#img1\')" src="red.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img2" onclick="highlightImg(\'#img2\')" src="orange.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img3" onclick="highlightImg(\'#img3\')" src="yellow.png"></div></div><br> <div class="row"> <div class="col-xs-4 col-md-4"><img class="my-image" id="img4" onclick="highlightImg(\'#img4\')" src="green.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img5" onclick="highlightImg(\'#img5\')" src="blue.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img6" onclick="highlightImg(\'#img6\')" src="purple.png"></div></div>'
    $("#robot-test").html(myhtml);
    $("#progress-bar").attr("aria-valuenow", 40);
    $("#progress-bar").css('width', "40%");
  }
  else if ($("#test-name").html() == "pick ur faverite cololr") {
    $("#test-name").html("tough queston,,, whihc is nawt a meem?");
    var myhtml = '<div class="row"> <div class="col-xs-4 col-md-4"><img class="my-image" id="img1" onclick="highlightImg(\'#img1\')" src="meme1.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img2" onclick="highlightImg(\'#img2\')" src="meme2.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img3" onclick="highlightImg(\'#img3\')" src="meme3.png"></div></div> <br> <div class="row"> <div class="col-xs-4 col-md-4"><img class="my-image" id="img4" onclick="highlightImg(\'#img4\')" src="meme4.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image" id="img5" onclick="highlightImg(\'#img5\')" src="meme5.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image true" id="img6" onclick="highlightImg(\'#img6\')" src="meme6.png"></div></div>'
    $("#robot-test").html(myhtml);
    $("#progress-bar").attr("aria-valuenow", 60);
    $("#progress-bar").css('width', "60%");
  }
  else if ($("#test-name").html() == "tough queston,,, whihc is nawt a meem?") {
    $("#test-name").html("lsat one!! r u made of mettal?");
    var myhtml = '<div class="row"> <div class="col-xs-6 col-md-6"><img class="my-image" id="img1" onclick="highlightImg(\'#img1\')" src="yes.png"></div> <div class="col-xs-4 col-md-4"><img class="my-image true" id="img2" onclick="highlightImg(\'#img2\')" src="no.png"></div></div>'
    $("#robot-test").html(myhtml);
    $("#progress-bar").attr("aria-valuenow", 80);
    $("#progress-bar").css('width', "80%");
  }
  else if ($("#test-name").html() == "lsat one!! r u made of mettal?") {
    $("#main").html("<div class=container><div><img id='celebrate' class=img-responsive src='celebrate.png'></div><div id='final-text' class='text-center'><h1>CONGARADULATIONS!</h1><br><h3>u r certanily not an robot!1!!</h3></div></div>");
  }
  else {
    $("#main").html("Error");
  }
}
