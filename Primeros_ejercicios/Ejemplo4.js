var json = '{"nombre":"Alex","edad":23,"nacionalidad":"Mexicana","hobbies":["voleyball","video juegos"]}';
var obj = JSON.parse(json);
console.log(obj.hobbies[0]);