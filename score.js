function score(input){
    let index = 0;
    let student = Number(input[index]);
    index++;
    let countTopStu = 0; 
    let countScoreTop = 0;
    let countVeryGStudent = 0;
    let countScoreVery = 0;
    let countGoodStudent = 0;
    let countGoodScore = 0;
    let countFailStudent = 0;
    let countScoreFail = 0; 

    for(let i = 1 ; i <= student; i++) {
        let studentScore = Number(input[index]);
        index++;
        if(studentScore >= 5){
            countTopStu++;
            countScoreTop += studentScore;
        }else if(studentScore >= 4.00 && studentScore <= 4.99){
            countVeryGStudent++;
            countScoreVery += studentScore;
        }else if(studentScore >= 3.00 && studentScore <= 3.99){
            countGoodStudent++;
            countGoodScore += studentScore;
        }else{
            countFailStudent++;
            countScoreFail += studentScore;
        }
    }
    let allScore = countScoreTop + countScoreVery + countGoodScore + countScoreFail;
    let averageScore = allScore / student;
    let procentageTopStudent = (countTopStu / student) * 100;
    let procentageVeryGood = (countVeryGStudent / student ) * 100;
    let procentageGoodStudent = (countGoodStudent / student) * 100;
    let procentageFailStudent = (countFailStudent / student) * 100;
    console.log(`Top students: ${procentageTopStudent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${procentageVeryGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${procentageGoodStudent.toFixed(2)}%`);
    console.log(`Fail: ${procentageFailStudent.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}
score(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);