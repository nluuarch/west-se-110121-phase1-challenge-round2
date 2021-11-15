const url = "https://distinct-vaulted-freesia.glitch.me/image"

const cardTitle = document.getElementById("fg-title");
const cardImage = document.getElementById("fg-image");
const commentsList = document.getElementById("fg-comments");
const likeCount = document.getElementById("fg-likes");
const likeButton = document.getElementById("like-button");
const commentForm = document.getElementById("comment-form");


fetch(url)
    .then(response => response.json())
    .then(renderCard)

function renderCard(card){
    cardTitle.innerText = card.title
    cardImage.src = card.image
    likeCount.innerText = card.likes

    commentsList.innerHTML = ""
    card.comments.forEach(comment =>{
        const li = document.createElement("li")
        li.textContent = comment.content
        commentsList.append(li)
    })

    likeButton.addEventListener("click", addLikes)
    function addLikes(){
        likeCount.innerText = ++card.likes;
    }

    commentForm.addEventListener("submit", addComment)
    function addComment(e){
        e.preventDefault()
        let newComment = document.createElement("li")
            // console.log({e})
            // console.log({newComment})
            // newComment.textContent = e.target[0].value
        newComment.textContent = e.target.comment.value
        commentsList.append(newComment)
        commentForm.reset()
    }
}