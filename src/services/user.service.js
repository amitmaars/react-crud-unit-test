import {config} from '../config/config';

export const UserService = {
    listUser,
    addUser
}

function listUser(){
    const requestOptions = {
        "method": "GET",
        "headers": {
        "content-type": "application/json",
        "accept": "application/json"
        }
    }

    // creates entity
    return fetch(`${config.url}/api/users`, requestOptions)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        return response;
    })
    .catch(err => {
        console.log(err);
        return err;
    });
}

function addUser(){
    const requestOptions = {
        "method": "POST",
        "headers": {
        "content-type": "application/json",
        "accept": "application/json"
        },
        "body": JSON.stringify({
        name: this.state.name,
        notes: this.state.notes
        })
    }

    // creates entity
    return fetch(`${config.url}/api/unknown`, requestOptions)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        return response;
    })
    .catch(err => {
        console.log(err);
        return err;
    });
}