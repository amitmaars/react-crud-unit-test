import {createUser, updateUser, getByUserId, deleteUser} from '../../actions/user.action';

test("Should Create User", () => {
    const action = createUser({userId: "1", name: "Amit", email: "amit@test.com"});
    expect(action).toEqual({
        type: "CREATE_USER",
        payload: {userId: "1", name: "Amit", email: "amit@test.com"}
    })
});

test("Should Update User", () => {
    const action = updateUser({userId: "1", name: "Amit", email: "amit@test.com"});
    expect(action).toEqual({
        type: "UPDATE_USER",
        payload: {userId: "1", name: "Amit", email: "amit@test.com"}
    })
});

test("Should delete user", () => {
    const action = deleteUser("123");
    expect(action).toEqual({
        type: "DELETE_USER",
        payload: "123"
    })
});

test("Should get user by id", () => {
    const action = getByUserId("123");
    expect(action).toEqual({
        type: "GET_BY_USERID",
        payload: "123"
    })
});


