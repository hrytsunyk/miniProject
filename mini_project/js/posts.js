let url = new URL(location.href);

let postID = url.searchParams.get("post");

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then((response) => response.json())
    .then((value) => {

        let child = document.querySelector('.child');
        let bodyPost = document.createElement('h5');
        let idTitle = document.createElement('h2');

        idTitle.innerHTML = `Post №${value.id}`;
        bodyPost.innerHTML = value.body;




       fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
           .then (Response => Response.json())
           .then( comments => {
               let bg = document.querySelector('.background');
               let button = document.createElement('button');
               button.innerHTML = 'hide comments';
               let commentsDiv = document.createElement('div');
               commentsDiv.classList.add('comments');

                   button.onclick =() =>{
                       if (commentsDiv.style.display === 'none') {
                           commentsDiv.style.display = 'flex';
                           button.innerHTML = 'hide comments';
                           child.style.height = '1000px';
                       } else  {
                           commentsDiv.style.display = 'none';
                           button.innerHTML = 'show comments';
                           child.style.height = '100%';
                       }

                   };

                   for (const comment of comments) {

                      let comTitleDiv = document.createElement('div');
                      let addCom = document.createElement('p');
                      let comTitle = document.createElement('h5');
                      comTitleDiv.classList.add('commTitleDiv');

                      comTitle.innerHTML = `comment №${comment.id}`
                      addCom.innerHTML = comment.body;

                      comTitleDiv.append(comTitle, addCom);


                      commentsDiv.append(comTitleDiv);


               };

                   child.append(idTitle, bodyPost, button, commentsDiv);


           });





    });
