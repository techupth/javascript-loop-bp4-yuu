// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

// Start coding here

for (let index = 0; index < scores.length; index++) {
    if (minScore<scores[index]) {
        minScore = minScore
    } else {
        minScore = scores[index]
    }        
}


console.log(minScore);
