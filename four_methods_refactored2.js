// original code

function getUsersByRole(users, role) {
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].role === role) {
        filteredUsers.push(users[i]);
      }
    }
    return filteredUsers;
  }
  
  function getUsersByCountry(users, country) {
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].country === country) {
        filteredUsers.push(users[i]);
      }
    }
    return filteredUsers;
  }

  
  // refactored code

  class UserFilter {
    constructor(criteria) {
      this.criteria = criteria;
    }
  
    // getUsersByRole(role) {
    //   return this.users.filter(user => user.role === role);
    // }
  
    // getUsersByCountry(country) {
    //   return this.users.filter(user => user.country === country);
    // }

    filter(users){
        return users.filter(user => user[this.criteria.key] === this.criteria.value);
    }

  }

  function getUsers(users, criteria) {
    const userFilter = new UserFilter(criteria).filter(users);
  }
  
  
  