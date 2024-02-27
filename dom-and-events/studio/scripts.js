// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");


    takeOffButton.addEventListener("click", function () {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = 'Shuttle in flight.';
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById("flightStatus").innerHTML = 'The shuttle has landed.';
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    );

    abortButton.addEventListener("click", function () {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = 'Mission aborted.';
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    upButton.addEventListener("click", function () {
        let i = 10;
        let margin = Number(rocket.style.bottom.replace('px', ''));
        margin += i;
        rocket.style.bottom = `${margin}px`;
        let j = 1000;
        document.getElementById("spaceShuttleHeight").innerHTML = `${margin*j}`;
    });

    downButton.addEventListener("click", function () {
        let i = -10;
        let margin = Number(rocket.style.bottom.replace('px', ''));
        margin += i;
        rocket.style.bottom = `${margin}px`;    
        let j = 1000;
        document.getElementById("spaceShuttleHeight").innerHTML = `${margin*j}`;
    });

    leftButton.addEventListener("click", function () {
        let i = -10;
        let margin = Number(rocket.style.left.replace('px', ''));
        margin += i;
        rocket.style.left = `${margin}px`;        
    });

    rightButton.addEventListener("click", function () {
        let i = 10;
        let margin = Number(rocket.style.left.replace('px', ''));
        margin += i;
        rocket.style.left = `${margin}px`;        
    });
});

