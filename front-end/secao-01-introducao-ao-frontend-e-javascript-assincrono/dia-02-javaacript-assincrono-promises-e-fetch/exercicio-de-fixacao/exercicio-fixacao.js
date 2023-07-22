const id = fetch('https://dummyjson.com/posts/2/comments')
.then((reseponse) => reseponse.json())
.then((data) => {
    const { comments } = data;
    console.log(comments)
})
