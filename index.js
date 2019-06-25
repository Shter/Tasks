/*
    console.log('1//-----------------------------------')
    sortWords('A3lice 2Bob Er1nst') //  'Er1nst 2Bob A3lice';
    sortWords('2Fiona Ig15or J1amila B3ob Ali5ce') //  'J1amila 2Fiona B3ob A3lice Ig15or';
    sortWords('Tes1t') //  'Tes1t';

    function sortWords(str) {
        var splited = str.split(' ');
        arr = [];
        for (var i=0; i < splited.length; i++){
            dateArr = splited[i].match(/[0-9]/);
            arr[+(dateArr[0])-1] = dateArr['input'];
        }
        result = arr.join(' ');
        console.log(result);
    }

    console.log('2//-----------------------------------')
    Number.prototype.isSimple = function () {
        for (var i=2; i <= this - 1; i++) {
            if (this%i === 0) {
                return false;
            }
        return true;
        }
    }

    console.log((5).isSimple())// true
    console.log((6).isSimple())// false
    console.log((11).isSimple())// true


    console.log('3//-----------------------------------')
    reverse(123) /// 321
    reverse(654) /// 456
    reverse(123456789) /// 987654321
    reverse(9876) /// 6789

    function reverse(param) {
        var res = param.toString();
        +reverseString(res);

        function reverseString(str) {

            return str.split("").reverse().join("");

        }
        console.log(+reverseString(res))
    }


    console.log('5//-----------------------------------')
    var userService = {
        currentFilter: 'active',
        users: [
            {name: 'Alex', status: 'active'},
            {name: 'Nick', status: 'delete'},
        ],
        getFiltered: function () {
            var that = this;
            return this.users.filter(function(user) {
                return user.status === that.currentFilter;
            });
        },
    };

    userService.getFiltered();


    console.log('6//-----------------------------------')
    calc(123.45) // 15
    calc(111.1111) // 7
    calc(123) // 6

    function calc(param) {
        var string = param.toString()
        var sum = 0;
        for (var i=0;i<string.length;i++){
            if(string[i] === '.'){}
            else{sum = +string[i] + sum}
        }
        console.log(sum)
    }


    console.log('7//-----------------------------------')
    const o = {
        a: 10,
        b: 20,
        sum() {
            console.log(this.a + this.b);
        },
    };

    const o1 = {
        a: 1,
        b: 2,
        sum: o.sum
    };

    o1.sum(); // ???
    //setTimeout(o.sum.bind(o), 5000);*/


    console.log('11//-----------------------------------')
    function A(name) {
        this.name = name;
    }
    A.x = function() {};
    A.prototype.f1 = function() {};

    function B(name,age) {
        A.call(this, name);
        this.age = age;
    }
    B.z = 325;
    B.prototype = Object.create(A.prototype);
    B.prototype.constructor = B.constructor;
    B.prototype.f2 = function() {};


    console.log('13//-----------------------------------')
    function isMonogamy(arr) {
        if (arr[0] === arr[arr.length - 1]) {
            for (let i = 0; i < arr.length - 2; i++) {
                if(arr[i] !== arr[i+1]) {
                    console.log(false)
                    return false;
                }
            }
        } else if (arr[0] > arr[arr.length - 1]) {
            for (let i = 0; i < arr.length - 2; i++) {
                if (arr[i] < arr[i+1]) {
                    console.log(false)
                    return false;
                }
            }
        } else if (arr[0] < arr[arr.length - 1]) {
            for (let i = 0; i < arr.length - 2; i++) {
                if (arr[i] > arr[i+1]) {
                    console.log(false)
                    return false;
                }
            }
        }
        console.log(true)
        return true;
    }

    isMonogamy([1, 1, 2]) // true
    isMonogamy([3, 2, 0]) // true
    isMonogamy([1, 1, 1]) // true
    isMonogamy([1, 2, 0]) // false
    isMonogamy([1, 2, 3, 1, 2, 3])
