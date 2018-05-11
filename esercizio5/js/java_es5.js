function verde_al_centro() {
    $("#verde").addClass("center");
}

function giallo_al_centro() {
    $("#giallo").addClass("center");
}

function rosso_al_centro() {
    $("#rosso").addClass("center");
}

function blu_al_centro() {
    $("#blu").addClass("center");
}

function muoviti() {
  $("#verde").addClass("move");
}

function torna() {
  $("#verde").removeClass("move");
  $("#verde").removeClass("center");
}


function muoviti_giallo() {
  $("#giallo").addClass("move");
}

function torna_giallo() {
  $("#giallo").removeClass("move");
  $("#giallo").removeClass("center");
}


function muoviti_rosso() {
  $("#rosso").addClass("move");
}

function torna_rosso() {
  $("#rosso").removeClass("move");
  $("#rosso").removeClass("center");
}


function muoviti_blu() {
  $("#blu").addClass("move");
}

function torna_blu() {
  $("#blu").removeClass("move");
  $("#blu").removeClass("center");
}


function clicca_verde() {
  if($("#verde").hasClass("move"))
  torna(); else
  if($("#verde").hasClass("center"))
  muoviti();
  else verde_al_centro();
}

function clicca_giallo() {
  if($("#giallo").hasClass("move"))
  torna_giallo(); else
  if($("#giallo").hasClass("center"))
  muoviti_giallo();
  else giallo_al_centro();
}

function clicca_rosso() {
  if($("#rosso").hasClass("move"))
  torna_rosso(); else
  if($("#rosso").hasClass("center"))
  muoviti_rosso();
  else rosso_al_centro();
}

function clicca_blu() {
  if($("#blu").hasClass("move"))
  torna_blu(); else
  if($("#blu").hasClass("center"))
  muoviti_blu();
  else blu_al_centro();
}


$("#verde").click(clicca_verde);
$("#giallo").click(clicca_giallo);
$("#rosso").click(clicca_rosso);
$("#blu").click(clicca_blu);
