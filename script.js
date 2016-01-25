$(document).ready(function(){
  $("#itemcreator").keypress(function(e) {
    if(e.which == 13) {
        var task = $('#itemcreator').val();
        $("#itemcreator").val('');
        $("#listtodo").append('<li>'+ "<form class='todo'><input type='submit' value='Done'/></form>" + "<span id='close' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'>x</span>"
 + task + '</li>');
    }
});
  $("#listtodo").on("submit", "#todo", function(){
    $(this).appendTo("#listdone");
    $(this).removeClass("todo").addClass("done");
    event.preventDefault();
  });
});
