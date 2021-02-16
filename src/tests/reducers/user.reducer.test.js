import userData from '../stub/user';
import userReducer from '../../reducers/user.reducer'

test("Should get all user", () => {
    const action = {
        type: "LIST_USER"
    }
    const state = userReducer(userData, action);

    //console.log(state, userData, action);
    expect(state).toEqual(userData);
});

test("Should get user by id", () => {
    const action = {
        type: "GET_BY_USERID",
        payload: userData[1].userId
    }
    const state = userReducer(userData, action);

    console.log(state, userData, action);
    // expect(state).toEqual(expect.arrayContaining([      
    //     expect.objectContaining({   
    //         userId: userData[1].userId               
    //     })
    //   ]))
});



// test("Should delete user", () => {
//     const action = {
//         type: "DELETE_USER",
//         payload: userData[1].userId
//     }
//     const state = userReducer(userData, action);

//     console.log(state, userData, action);
//     expect(state).toEqual([userData[0], userData[2]])
// });



// test("Should add user", () => {
//     const action = {
//         type: "CREATE_USER",
//         payload: {userId: "4", name: "romit", email: "romit@test.com"}
//     }
//     const state = userReducer(userData, action);

//     console.log(state, userData, action);
//     expect(state).toEqual([userData[0], userData[1], userData[2], {userId: "4", name: "romit", email: "romit@test.com"}])

// });

