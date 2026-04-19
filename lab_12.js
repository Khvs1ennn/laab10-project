const people = [
    {firstName: "Bat", lastName: "Namuun", birthday: "2001-05-15"},
    {firstName: "Bold", lastName: "Erdene", birthday: "1995-10-30"},
    {firstName: "Munkh", lastName: "Saruul", birthday: "1988-03-22"},
    {firstName: "Munkhsaruul", lastName: "Oyun", birthday: "2010-12-05"},
];


function getAge(birthday) {
    const birth = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}


function getInfo(x, y) {
    return people.filter(person => {
        const age = getAge(person.birthday);
        return age >= x && age <= y;
    });
}
console.log(getInfo(18, 30));
