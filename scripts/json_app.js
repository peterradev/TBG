function loadApp() {
    "use strict";
  
    function buildNote(response) {
        //get travelNotes
        var $travelNotes = response.softPlastics
        //process travelNotes array
        $travelNotes.forEach(function(item) {
          if (item !== null) {
            var note = item.note;
            //create each note's <p>
            var p = $("<p>");
            //add note text
            p.html(note);
            //append to DOM
            $(".bait-output").append(p);
          }
        });
    }
  
      $.getJSON("baits.json", function (response) {
        console.log("response = "+response.toSource());
        buildNote(response);
      })
  
  };
  $(document).ready(loadApp);