


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
    .then(users => {

        fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then((value) => {
        let {data} = value;

        let usersDivHTML = document.querySelector('.users');

        for (const user of users) {
            let userTextDiv = document.createElement('div');
            userTextDiv.classList.add('userTextDiv')
            userTextDiv.id = `u-${user.id}`;

            let div = document.createElement('div');
            div.classList.add('user');
            div.id = `user-${user.id}`;

            let h4 = document.createElement('h4');
            h4.classList.add('h4-userName');

            let anchor = document.createElement('a');
            anchor.href = `user-details.html?id=${user.id}`;
            anchor.target = '_blank';
            anchor.innerHTML = `${user.id}. ${user.name}`;

            h4.append(anchor);


            let img = document.createElement('img');
            img.alt = 'Photo.img'
            img.classList.add('face');

            for (const userPic of data) {

                if (user.id === userPic.id) {
                    img.src = `${userPic.avatar}`;
                    div.append(img);
                }
            };

            userTextDiv.append(div, h4);
            usersDivHTML.append(userTextDiv);

        };
        });
    });