export function createUser(payload) {
    return {
        type: "CREATE_USER",
        payload: payload
    };
}

export function updateUser(payload) {
    return {
        type: "UPDATE_USER",
        payload: payload
    };
}

export function getByUserId(id) {
    console.log("action page --> getByUserId",id);
    return {
        type: "GET_BY_USERID",
        payload: id
    };
}

export function deleteUser(id) {
    return {
        type: "DELETE_USER",
        payload: id
    };
}

export function listUser() {
    return {
        type: "LIST_USER",
        //payload: payload
    };
}