var comments = [
  { displayName: "Johnthecoder", text: "I totally agree with you! It is an incredibly smart career path." },
 { displayName: "Janethecoder", text: "I'm not sure, I think it depends on the person." },
  { displayName: "CodingQueen", text: "Totally agree! Programming is the future and it's so satisfying when you finally solve a problem." },
  { displayName: "TechGuy23", text: "I'm not sure, I think there are other fields that are just as important as programming." },
  { displayName: "CodeMonkey", text: "Programming is the key to unlocking so many new opportunities. Plus, the pay is pretty great!" },
  { displayName: "CodeNinja", text: "I used to hate programming, but once I got into it and started building things, it quickly became my passion." },
  { displayName: "WebWizard", text: "Web development is where it's at! You can create beautiful websites and apps that people use every day." },
  { displayName: "CoderX", text: "I don't think programming is for everyone. It takes a lot of patience and problem-solving skills to be successful." },
  { displayName: "ThePythonist", text: "Python is the best programming language out there. It's easy to learn and you can use it for so many different things!" },
  { displayName: "NoCodeNoLife", text: "Programming may be lucrative, but it's not for everyone. Pursue a career that you're passionate about, not just because it pays well." },
  { displayName: "CoderOpponent", text: "Programming is overrated. There are other careers that are just as important, if not more so." },
  { displayName: "TheRealistCoder", text: "Programming is just one of many career paths out there. It's not the only way to succeed in life." },
  { displayName: "TechSkeptic", text: "I'm not convinced that programming is the future. Technology is constantly evolving, and there's no guarantee that programming will remain in high demand." },
  { displayName: "NonTechie", text: "I don't think programming is the move for everyone. There are plenty of other fulfilling careers out there that don't require programming skills." }
  
];

function renderComments() {
  var html = "";
  var reversedComments = comments.slice().reverse();
  reversedComments.forEach(function(comment, index) {
    html += "<div class='comment' data-index='" + index + "' style='background-color: " + comment.color + ";'>";
    html += "<p><strong>" + comment.displayName + "</strong>: " + comment.text + "</p>";
    html += "<div class='edit-button'>Edit</div>";
    html += "<div class='delete-button'>Delete</div>";
    html += "</div>";
  });
  $("#comments-container").html(html);
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
  var index = comments.length - 1 - $(this).parent().data("index"); // use the actual index of the comment
  comments.splice(index, 1);
  renderComments();
});

$(document).on("click", ".edit-button", function() {
  var commentEl = $(this).closest(".comment");
  var index = comments.length - 1 - commentEl.data("index"); // use the actual index of the comment
  var comment = comments[index];
  var html = "<div class='comment-edit'>";
  html += "<input type='text' class='edit-display-name' value='" + comment.displayName + "'>";
  html += "<textarea class='edit-text'>" + comment.text + "</textarea>";
  html += "<div class='save-button' data-index='" + (comments.length - 1 - index) + "'>Save</div>"; // use the actual index of the comment
  html += "</div>";
  commentEl.replaceWith(html);
});

$(document).on("click", ".save-button", function() {
  var index = comments.length - 1 - $(this).data("index"); // use the actual index of the comment
  var displayName = $(this).siblings('.edit-display-name').val();
  var text = $(this).siblings('.edit-text').val(); // assign the value of the edit-text input field to a variable
  comments[index] = { displayName: displayName, text: text };
  renderComments();
});

console.log(comments);
renderComments();
