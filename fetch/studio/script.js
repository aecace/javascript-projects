//TODO: Add Your Code Below

window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');

            data.forEach(astronaut => {
                const astronautDiv = document.createElement('div');
                astronautDiv.classList.add('astronaut');

                const bioDiv = document.createElement('div');
                bioDiv.classList.add('bio');

                const astronautName = document.createElement('h3');
                astronautName.textContent = `${astronaut.firstName} ${astronaut.lastName}`;

                const astronautInfoList = document.createElement('ul');
                const hoursInSpace = document.createElement('li');
                hoursInSpace.textContent = `Hours in space: ${astronaut.hoursInSpace}`;
                const isActive = document.createElement('li');
                isActive.textContent = `Active: ${astronaut.active}`;
                const skills = document.createElement('li');
                skills.textContent = `Skills: ${astronaut.skills.join(', ')}`;

                astronautInfoList.appendChild(hoursInSpace);
                astronautInfoList.appendChild(isActive);
                astronautInfoList.appendChild(skills);

                bioDiv.appendChild(astronautName);
                bioDiv.appendChild(astronautInfoList);

                const avatarImg = document.createElement('img');
                avatarImg.classList.add('avatar');
                avatarImg.src = `images/${astronaut.picture}`;

                astronautDiv.appendChild(bioDiv);
                astronautDiv.appendChild(avatarImg);

                container.appendChild(astronautDiv);
            });
        })
        .catch(error => console.error('Error fetching astronaut data:', error));
});