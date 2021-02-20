import React, { useEffect, useState} from "react";
import {deleteUser, listUser} from '../../actions/user.action';
import {UserService} from '../../services/user.service';
import { useSelector, useDispatch } from "react-redux";
import  { Link } from 'react-router-dom';

const List = (props) =>{
    const dispatch = useDispatch();
    //const [user, setUser] = useState( [] );
    const { users } = useSelector( state => state.userReducer);
    console.log("LIST", users);

    const delUser = (id) => {
        console.log("deleteUser",id);
        // useDispatch(deleteUser(id));
        dispatch(deleteUser(id))
    }

    useEffect(async ()=>{
        try{
            const users = await UserService.listUser();
            console.log(users.data);
            dispatch(listUser(users.data))
        }
        catch(err){
            console.log(err);
        }
    },[])

    return (
        
      <div>  
        <div>List User</div>
        {users !== undefined && users.length > 0 && 
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {users.map(function(user, i){
                return <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/update/${user.id}`}>Edit</Link>
                    <button onClick={()=>delUser(user.id)}>Delete</button>
                    </td>
                </tr>;
            })}
            </tbody>
            <tfoot></tfoot>
            
            
        </table>
        }
    </div>  

    )
}

export default List;