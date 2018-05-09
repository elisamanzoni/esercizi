function ruotare_pianeta1() {
  $("#pianeta1").addClass("pianeta1ruota");
}

function compare_cerchio2() {
  $("#pianeta2").addClass("pianeta2ruota");
}

function ruota_anti() {
  $("#pianeta1").removeClass("pianeta1ruota");
  $("#pianeta1").addClass("pianeta1ruota_anti");
  $("#pianeta2").removeClass("pianeta2ruota");
  $("#pianeta2").addClass("pianeta2ruota_anti");
}

function ruota_anti_anti() {
  $("#pianeta1").removeClass("pianeta1ruota_anti");
  $("#pianeta1").addClass("pianeta1ruota");
  $("#pianeta2").removeClass("pianeta2ruota_anti");
  $("#pianeta2").addClass("pianeta2ruota");
}


function cliccare() {
  if($("#pianeta2").hasClass("pianeta2ruota_anti"))
  ruota_anti_anti();
  else if($("#pianeta2").hasClass("pianeta2ruota"))
  ruota_anti();
  else if ($("#pianeta1").hasClass("pianeta1ruota"))
  compare_cerchio2();
  else ruotare_pianeta1();
}

$("#stella").click(cliccare);
