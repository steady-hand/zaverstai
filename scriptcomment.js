let commentForm = document.querySelector(".form");
let commentList = document.querySelector(".comment-list");
let Comment = document.querySelector(".big__input-2");
let Name = document.querySelector(".input-name");

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement("li");
    newComment.classList.add("user-comment");
    commentList.append(newComment);
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment__image");
    newComment.append(commentDiv);
    let commentPage = document.createElement("p");
    commentPage.classList.add("comment__page");
    commentPage.textContent = Comment.value;
    Comment.value = "";
    newComment.append(commentPage);
    let commentImg = document.createElement("img");
    commentImg.classList.add("comment-img");
    commentDiv.append(commentImg);
    let commentTitle = document.createElement("h4");
    commentTitle.classList.add("comment-title");
    commentTitle.textContent = Name.value;
    Name.value = "";
    commentDiv.append(commentTitle);
}