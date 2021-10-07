$(function () {
  const termekek = [];
  adatBeolvas("jsontermekek.json", termekek, tablazatLetrehoz);

  function tablazatLetrehoz() {
    $("section").append("<table>");
    var txt =
      "<tr id='fejlec'><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th></tr>";
    termekek.forEach(function (value, index) {
      txt += "<tr id='" + index + "'>";
      for (let item in value) {
        txt += "<td>" + value[item] + "</td>";
      }
      txt += "<td id='gomb'><button id='" + index + "'>Módosít</button></td>";
      txt += "</tr>";
    });

    $("section table").html(txt);
    $("#gomb").click(function () {
      console.log("rákattintottam");
    });
  }

  function adatBeolvas(fajlNev, tomb, callback) {
    $.ajax({
      url: fajlNev,
      success: function (result) {
        result.termekek.forEach((elem) => {
          tomb.push(elem);
        });
        console.log(tomb);
        callback();
      },
    });
  }
});
