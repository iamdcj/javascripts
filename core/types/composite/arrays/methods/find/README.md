# The `find` Method

The `find` method is an helper function which will return the first item from array,which matches based on the conditions inside the callback function.

### Objects

```
const users = [{ user: "David" }, { user: "Steffie" }, { user: "Nole", id:1  }, { user: "Nole", id: 2 }];

users.find(u => u.user === 'Nole' );

// {user: "Nole", id: 1}
```
