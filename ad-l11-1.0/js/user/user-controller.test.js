const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    let user2 = new User(123,"Santiag", "santiago@generation.org");    
    expect(userController.getUsers()).not.toContain(user2);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

test('Verificación de findByEmail con usuario Santiago', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail(user.email)).toEqual(user);
});

test('Verificación de findByEmail con usuario john', () => {    
  let user = new User(1234,"John", "john@generation.org");
  userController.add(user);
  expect(userController.findByEmail(user.email)).toEqual(user);
});

test('Verificación de findByID con usuario Santiago', () => {    
  let user = new User(12346,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(user.id)).toEqual(user);
});

test('Verificación de findByID con usuario john', () => {    
  let user = new User(12345,"John", "john@generation.org");
  userController.add(user);
  expect(userController.findById(user.id)).toEqual(user);
});







// Implementar 2 pruebas unitarias para la función findByEmail().
// Implementar 2 pruebas unitarias para la función findById().





