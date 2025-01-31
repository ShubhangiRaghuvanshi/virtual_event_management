const express = require("express");

const users=[];
const createUser=(username,email,password,role='atendee',preferences=[])=>{
    const user={
        id:users.length+1,
        username:username,
        email,
        password:password,
        role,
        preferences: []

    };
    users.push(user);
    console.log(users);
    return user;
}

const getUserByEmail = (email) => {
    return users.find((user) => user.email === email);  // Return the result of find()
};

const getUserById=(id)=>{
    users.find((user)=>user.id===id);
}
module.exports = { users, createUser, getUserByEmail, getUserById };