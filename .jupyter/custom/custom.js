function tidy_ui() {
  // Hide header
  $('#header-container').hide();
  // Hide menu bar
  $('#menubar').hide();
  // Hide unwanted UI buttons
  $('#save-notbook').hide()
  $('#insert_above_below').hide()
  $('#move_up_down').hide()
  $('#cell_type').hide()
  $("button[title='open the command palette'").parent().hide()
  // Add LHL logo
  $("#maintoolbar-container").append('<img src="https://staging-21-day.herokuapp.com/img/lhl_image.png" style="height: 24px; float: right;">')
  // Set width to reduce empty space on larger screens
  $("#notebook-container").css("width", "95%")
}
tidy_ui()
