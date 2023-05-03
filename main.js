var comments = [
  { displayName: "John", text: "I totally agree with you!" },
  { displayName: "Jane", text: "I'm not sure, I think it depends on the person." }
];

function renderComments() {
  $("#comments-container").empty();
  comments.forEach(function(comment, index) {
    var html = "<div class='comment' data-index='" + index + "'>";
    html += "<p><strong>" + comment.displayName + "</strong> says:</p>";
    html += "<p>" + comment.text + "</p>";
    html += "<div class='delete-button'>Delete</div>";
    html += "<div class='edit-button'>Edit</div>";
    html += "</div>";
    $("#comments-container").append(html);
  });
}

renderComments();

$("#comment-form").submit(function(event) {
  event.preventDefault();
  var displayName = $("#display-name").val();
  var text = $("#comment").val();
  comments.push({ displayName: displayName, text: text });
  renderComments();
  $("#comment-form")[0].reset();
});

$(document).on("click", ".delete-button", function() {
  var index = $(this).parent().data("index");
  comments.splice(index, 1);
  renderComments();
});

$(document).on("click", ".edit-button", function() {
  var index = $(this).parent().data("index");
  var comment = comments[index];
  var html = "<div class='comment-edit'>";
  html += "<input type='text' class='edit-display-name' value='" + comment.displayName + "'>";
  html += "<textarea class='edit-text'>" + comment.text + "</textarea>";
  html += "<div class='save-button' data-index='" + index + "'>Save</div>";
  html += "</div>";
  $(this).parent().replaceWith(html);
});

$(document).on("click", ".save-button", function() {
  var index = $(this).data("index");
  var displayName = $(this).siblings('.edit-display-name').val();
  var text = $(this).siblings('.edit-text').val();
  comments[index] = { displayName: displayName, text: text };
  renderComments();
});

