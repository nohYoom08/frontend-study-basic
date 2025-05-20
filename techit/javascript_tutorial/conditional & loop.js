//조건문//
var a = 2;

// 1. if...else
if (a>2){
    console.log('a>2');
}
else{
    console.log('a<=2');
}


// 2. if - else if - else
if(a>2){
    console.log('a>2');
}
else if(a==2){
    console.log('a==2');
}
else if(a<=0){
    console.log('a=0');
}
else{
    console.log('a<2');
}


// 3. switch
var mbti = 'INFP';
var val;

switch(mbti){
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        val = 'ISTJ';
        break;
    default:
        val ='유효한 값이 아닙니다'
        break;
}

console.log('val =',val);



//반복문//

// 1. for

for(var i = 0; i < 10; i++){
    console.log(i);
}

for(var i = 0; i < 10; i++)
    console.log(i);

for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        console.log(`${i}-${j}`,i*j);
    }
}


// 2. while

var flag = 5;

while (flag > 0){
    console.log(flag);
    flag--;
}


// 3. do-while

var flag = 5;

do{
    console.log(flag);
    flag--;
}while(flag>5); //세미콜론으로 마무리 필수