/*John and Mike both play basketball on different teams. In latest 3 games, John's team scored 89, 120, and 103 points. Mike's teams
scored 116, 94, and 123 points.

1. Calculate average for each team
2. Decide which teach wins in average and print winner to console. Include average score in output.
3. Change scores to show different winners.
4. EXTRA: Mary plays basketball and her team scored 97, 134, and 105 points. Like before, log average winner to console. 
5. Like before, change scores to generate different winners.

*/

var JohnsTeamScores = [116, 93, 123];
var MikesTeamScores = [116, 94, 123];
var MarysTeamScores = [98, 134, 105];

var JohnsAverage = calculateAverage(JohnsTeamScores);
var MikesAverage = calculateAverage(MikesTeamScores);
var MarysAverage = calculateAverage(MarysTeamScores);

if ((JohnsAverage > MikesAverage) && (JohnsAverage > MarysAverage)) {
    console.log('John\'s team has the higher average of both Mike and Mary. John wins!');
} else if ((MikesAverage > JohnsAverage) && (MikesAverage > MarysAverage)) {
    console.log('Mike\'s team has the higher average of both John and Mary. Mike wins!');
}else if ((MarysAverage > JohnsAverage) && (MarysAverage > MikesAverage)) {
    console.log('Mary\'s team has the higher average of both John and Mike. Mary wins!');
}else{
    console.log('All teams have the same average! It\'s a draw!');
}

function calculateAverage(scores){
    var totalScore = 0; 
    scores.forEach(function(score){
        totalScore = totalScore + score;
    })
    return (totalScore / (scores.length));
}