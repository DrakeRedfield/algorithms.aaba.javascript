const enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

/*
find_pairs(enrollments1)
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}
*/ 

function cachingStudents(arr) {
  const cache = new Map();
  arr.forEach(([id, course]) => {
    if(!cache.has(id)) {
      cache.set(id, new Set([course]));
    } else {
      cache.get(id).add(course);
    }
  });
  return cache;
}

function find_pairs(arr) {
  const cache = cachingStudents(arr);
  if(cache.size < 2) return {};
  const pairs = new Map();
  const studentIds = Array.from(cache.keys());
  for(let index = 0; index < studentIds.length - 1; index++) {
    for (let indexPair = index + 1; indexPair < studentIds.length; indexPair++) {
      const auxArr = [];
      const studentCourses1 = cache.get(studentIds[index]);
      const studentCourses2 = cache.get(studentIds[indexPair]);
      studentCourses1.forEach(course => {
        if (studentCourses2.has(course)) {
          auxArr.push(course);
        }
      });
      pairs.set(`${studentIds[index]},${studentIds[indexPair]}`, auxArr);
    }
  }
  return pairs;
}

find_pairs(enrollments1);