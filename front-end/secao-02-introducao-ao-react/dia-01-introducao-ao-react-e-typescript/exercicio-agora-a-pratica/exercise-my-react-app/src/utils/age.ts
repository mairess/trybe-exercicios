function GetTheAge(birthYear: number) {
    const actualDate = new Date();
    const year = actualDate.getFullYear();
    const age = year - birthYear;
    return age;  
};

export default GetTheAge;