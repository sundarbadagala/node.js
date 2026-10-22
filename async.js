const user = [
    { id: 1, name: "ram", age: 27 },
    { id: 2, name: "vijay", age: 34 },
    { id: 3, name: "varun", age: 10 },
    { id: 4, name: "vinay", age: 90 },
    { id: 5, name: "vicky", age: 54 },
]

function getuser(id) {
    return new Promise((res, rej) => {
        const _user = user.find(user => user.id === id)
        if (_user) {
            res(_user);
        }
        else {
            rej("user not found");
        }
    })
}

getuser(12).then(res => console.log(res)).catch(err => console.log(err))
