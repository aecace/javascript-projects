// Code your orbitCircumference function here:

function orbitCircumference(orbit) {
  return Math.round(2 * Math.PI * orbit);
};

// Code your missionDuration function here:

function missionDuration(numOrbits, orbit, speed) {
  let distance = numOrbits * orbitCircumference(orbit);
  return Math.round(distance / speed * 100)/100;
};

// Copy/paste your selectRandomEntry function here:

function randomSelection(array){
  let index = Math.floor(Math.random()*array.length);
  return array[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(name) {
  return Math.round(name.o2Used(totalTime)*100)/100;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 const numberOrbits = 3;
 const orbitRadius = 2000;
 const orbitSpeed = 28000;

 let selectedCrewMember = randomSelection(crew);
 let totalTime = missionDuration(numberOrbits, orbitRadius, orbitSpeed);
 
 console.log(`'The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${totalTime} hours to complete.'`);
 console.log(`${selectedCrewMember.name} will perform the spacewalk, which will last ${totalTime} hours and require ${oxygenExpended(selectedCrewMember)} kg of oxygen.`);