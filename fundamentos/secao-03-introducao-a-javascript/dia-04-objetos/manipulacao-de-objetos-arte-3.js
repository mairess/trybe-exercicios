const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const getValues = (obj, index) => Object.values(obj)[index];
  console.log(getValues(school, 0));

  const totalStudents = (obj) => {
    let count = 0;
    for (let index = 0; index < obj.lessons.length; index += 1) {
      count += obj.lessons[index].students;
    }

    return count;
  }

  console.log(totalStudents(school));

  const keyExists = (obj, key) => {
    for (let index = 0; index < obj.lessons.length; index += 1) {
      if (obj.lessons[index][key] === undefined) {
        return false;
      }
    }
    return true;
  }

  console.log(keyExists(school, 'professor'));

  const changeShift = (obj, key, value) => obj.lessons[0].key = value;

  changeShift(school, 'shift', 'dia');

  console.log(school)