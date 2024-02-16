//Declare a class called CrewCandidate with a constructor
// that takes three parameters—name, mass, and scores.
// Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let i=0, total=0, length=this.scores.length;
        
        while (i < length) {
            total += this.scores[i];
            i++;
        }

        return Math.round(total / length * 10)/10;
    }

    status() {
        let avgScore = this.average();

        if (avgScore >= 90) {
            return 'Accepted';
        } else if (avgScore < 90 && avgScore >= 80) {
            return 'Reserve';
        } else if (avgScore < 80 && avgScore >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
}

let bubba = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let glad = new CrewCandidate('Glad Gator', 225, [75,78,62]);

// console.log(bubba, merry, glad);

// bubba.addScore(83);
// console.log(bubba.scores);

// console.log(merry.average());

let testCandidate = glad;
console.log(`${testCandidate.name} earned an average test score of ${testCandidate.average()}% and has a status of ${testCandidate.status()}.`);

let counter = 0;
while (glad.average() < 80) {
    glad.addScore(100);
    counter++;
}

console.log(`${glad.name} would need ${counter} perfect scores to reach ${glad.status()} status.`);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.