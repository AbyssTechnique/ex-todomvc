$(document).ready(function(){

  //Call localStorage
  var listeT = localStorage.getItem("cookieT");
  $("#listtodo").append(listeT);
  var listeD = localStorage.getItem("cookieD");
  $("#listdone").append(listeD);
  if(listeT === null){
    listeT = "";
  }
  if(listeD === null){
    listeD = "";
  }

  // Counting list items
  var n = $("#listtodo").length -1;
  function compteur(x){
  $("#compteur").text( "There are " + x + " things to do.");
  }
  compteur(n);

  // Delete list items
  $("#listtodo").on("click", "#close", function(e){
    var deleted = "<li>" + $(this).parent().html() + "</li>";
    listeT = listeT.replace(deleted, "");
    localStorage.setItem("cookieT", listeT);
    $(this).parent().remove();
    n -= 1;
    compteur(n);
    e.preventDefault();
  });
  $("#listdone").on("click", "#close", function(e){
    var deleteds = "<li>" + $(this).parent().html() + "</li>";
    listeD = listeD.replace(deleteds, "");
    localStorage.setItem("cookieD", listeD);
    $(this).parent().remove();
    e.preventDefault();
  });

  // Creating list items
  $("#itemcreator").keypress(function(e) {
    if(e.which == 13) {
        var task = $('#itemcreator').val();
        $("#itemcreator").val('');
        var newTodo = '<li>'+ '<form class="todo"><input type="submit" value="Done"></form>' + '<span id="close">x</span>'
 + '<textarea rows="1" cols="30">' + task + '</textarea>' + '</li>';
        $("#listtodo").append(newTodo);
        n += 1;
        compteur(n);
        listeT += newTodo;
        localStorage.setItem("cookieT", listeT);
    }
  });

  // Buttons Done and To Do to switch lists
  $("#listtodo").on("submit", ".todo", function(e){
    var changed = "<li>" + $(this).parent().html() + "</li>";
    listeT = listeT.replace(changed, "");
    localStorage.setItem("cookieT", listeT);
    $(this).parent().appendTo("#listdone");
    $(this).removeClass("todo").addClass("done");
    $(this).children().val("To Do");
    var changeds = "<li>" + $(this).parent().html() + "</li>";
    listeD += changeds;
    localStorage.setItem("cookieD", listeD);
    e.preventDefault();
    n -= 1;
    compteur(n);
  });
  $("#listdone").on("submit", ".done", function(e){
    var changed = "<li>" + $(this).parent().html() + "</li>";
    listeD = listeD.replace(changed, "");
    localStorage.setItem("cookieD", listeD);
    $(this).parent().appendTo("#listtodo");
    $(this).removeClass("done").addClass("todo");
    $(this).children().val("Done");
    var changeds = "<li>" + $(this).parent().html() + "</li>";
    listeT += changeds;
    localStorage.setItem("cookieT", listeT);
    e.preventDefault();
    n += 1;
    compteur(n);
  });
});
