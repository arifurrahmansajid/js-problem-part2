function calculateatx( income, expense){
    if(typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0  || expense <  0) {
        return 'Invalid input';
    }
    
    let difference = income - expense;

    let tax = difference * 0.2;
      
    return tax;

   

}

const result = calculateatx(10000, 3000);
console.log(result);



function CheackEmail(email){
    if(typeof email !== 'string' || email.length === 0){
        return 'Invalid input';
    }
    if(email.includes('@')){
        return 'Valid email';
    }
    return 'Invalid email';
}

const emailCheck = CheackEmail('arifursajid@gmail.com');

console.log(emailCheck);


function checkDigitsInName(name){
    let ContainsDigit = false;
    for(let i = 0; i < name.length; i++){
        let char = name[i];
       // if(!isNaN(char) && char !== ' '){
         //   ContainsDigit = true;
           // break;


        //}

        if(char >= "0" && char <= "9"){
            ContainsDigit = true;
            break;
        }
    }


    return ContainsDigit;


}

const nameCheck = checkDigitsInName('arif123');
console.log(nameCheck);
    




function calculateFinalScore(obj) {

    if(typeof obj !== 'object' || obj === null){
        return 'Invalid input';
    }

    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade ;
    if (obj.isFFamily) {
        finalScore += 20;
    }

   if(finalScore >= 80){
       return "Congratulations " + obj.name + " you have passed the test";
    }
    else{
        return false;
    }
    
    

}

let result2 = calculateFinalScore({  
    name: 'Arif',
    testScore: 40,
    schoolGrade: 20,
    isFFamily: true
});

console.log(result2);



function waitingTime(array, serial) {
    for(i = 0; i < array.length; i++){
        if(array[i] === serial){
            return i * 30;
        }
    }
    
    console.log

}

waitingTime([3, 5, 7, 11, 6],10)

