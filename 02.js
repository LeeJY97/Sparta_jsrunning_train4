// 1. 출력값과 출력되는 값의 이유를 설명해주세요
var name = "yuno";

function myName() {
    var name = "yuno2";
    function a() {
        console.log(name);
    }
    return a();
}

myName();
// yuno2 출력
// a()안에 name이 정의되지 않으면 바로 상위 스코프(범위)에서 name을 찾고 반환합니다. 
// (상위 스코프인 myName()에도 없으면 전역변수 name yuno 출력)



// 2. 출력값과 출력되는 값의 이유를 설명해주세요
function test() {
    var x = 1;

    if (true) {
        var x = 2;
    }

    console.log(x);
}
test();
// 2 출력
/**
 * {중괄호} 안의 데이터는 상위 스코프에서 참조가 불가능하지만 if, for 등 
 * function을 제외한 블록은 무시됩니다. (var만 해당함)
 * */




// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
const nameObj = {
    name: "yuno",
    method: function () {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();
/**
 * 화살표함수
 * 화살표 함수의 상위 스코프의 this를 상속받습니다. 
 * 따라서 method: function .... 이 가리키는 this를 상속받습니다. 
 * 
 * 일반함수
 * 일반 함수는 this를 상속받지 않고, 호출한 주체에 영향을 받습니다. 
 * 따라서 `normal()` 을 호출한 주체가 없기 때문에 
 * global 혹은 window를 상속받게 됩니다.
 */
