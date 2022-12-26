let url = new URL (location.href);

let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then(resp => resp.json())
    .then(obj=> {

        fetch('https://reqres.in/api/users')
            .then(resp => resp.json())
            .then((value) => {
                         let {data} = value;
                let divFrontCard = document.querySelector('.user-card-front');
                let photo = document.querySelector('.photo');

                let h2 = document.createElement('h2');
                let img = document.createElement('img');
                    img.alt = 'Photo.img'
                    img.classList.add('face');

                            for (const userPic of data) {
                                if (id == userPic.id) {
                                    img.src = `${userPic.avatar}`;
                                    photo.append(img);
                                }
                            };

                for (const key in obj) {
                    let firstH4 = document.querySelector('.first-h4');
                    let secondH4 = document.querySelector('.second-h4');
                    let thirdH4 = document.querySelector('.third-h4');
                    let h4 = document.createElement('h4');

                    if (typeof obj[key] !== 'object') {
                        h4.innerHTML = `${key}: ${obj[key]}`;
                        firstH4.appendChild(h4);

                    } else {

                        let h4_2 = document.createElement('h4');
                        h4_2.innerHTML = `${key}:`;
                        secondH4.appendChild(h4_2)

                        for (const inner in obj[key]) {
                            let h4_3 = document.createElement('h4');

                            if (typeof obj[key][inner] !== 'object') {
                                h4_3.innerHTML = `${inner}: ${obj[key][inner]}`;
                                secondH4.appendChild(h4_3)

                            } else {
                                let h4_4 = document.createElement('h4');
                                let h4_5 = document.createElement('h4');

                                h4_5.innerHTML = `${inner}:`;
                                thirdH4.appendChild(h4_5);

                                for (const endKey in obj[key][inner]) {
                                    h4_4.innerHTML = `${endKey}: ${obj[key][inner][endKey]}`;
                                    thirdH4.appendChild(h4_4);

                                }

                            }
                        }


                    }

                }

            });

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {

                let button = document.querySelector('.button');
                let card = document.querySelector('.users-card');

                button.addEventListener('click',

                    function flip_fn() {
                    card.classList.toggle('flipCard');
                    });

                let divFlipCard = document.querySelector('.user-card-back');
                let postsTitle = document.createElement('h2');
                postsTitle.innerHTML = 'Users posts:';
                divFlipCard.appendChild(postsTitle)
                        let ol = document.createElement('ol');

                for (const post of posts) {
                        let li = document.createElement('li');
                        let a = document.createElement('a');

                        a.href = `posts_index.html?post=${post.id}`;
                        a.target ='_blank';
                        a.innerText = post.title;

                        li.appendChild(a);
                        ol.appendChild(li);
                        divFlipCard.appendChild(ol);
                    }

            });

});
