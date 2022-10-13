function myFirstApp(name, age) {
    console.log(`Привет! Меня зовут ${name}. Это моя первая программа.`);
    showSkills();
    checkAge();
    calcPow(5);
    function showSkills() {
        let skills = ['html', 'css', 'js'];
        console.log('Я владею навыками:')
        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
        }
    }

    function checkAge() {
        if (age > 18) {
            console.log('У тебя отличные шансы стать фронтенд разработчиком!')
        } else {
            console.log('Круто, что ты так рано задумался о своем будущем!')
        }
    }

    function calcPow(num) {
        console.log(Math.pow(num, 2));
    }
}
myFirstApp('Ivan', 78);
