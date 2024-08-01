const obj1 = {
    value: 20,
    getValue() {
        return this.value;
    }

}
// console.log(obj1.getValue()); //  출력값 20


//   2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
const obj2 = {
    method: function () {
        console.log('첫번째 this : ', this);

        const innerMethod = () => {
            setTimeout(function () {
                console.log('두번째 this : ', this);
            });
        }
        innerMethod();
    }
}

obj2.method();

// setTimeout의 콜백함수가 함수 선언문으로 표현되어 있고, 호출의 주체가 없기 때문에
// 브라우저의 전역객체인 window를 가리키게 됩니다.
