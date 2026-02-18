const getBirthDay = (birthDate) => {
    let birthday   = new Date(birthDate);
    let birthYear  = birthday.getFullYear();
    let birthMonth = birthday.getMonth();
    let birthDay   = birthday.getDate();

    let today = new Date();
    let currentYear = today.getFullYear();
    let age = currentYear - birthYear;

    if(today.getMonth() < birthMonth || (today.getMonth()==birthMonth && today.getDate() < birthDay)) {
        age--;
    }

    return age;
}

export default getBirthDay;