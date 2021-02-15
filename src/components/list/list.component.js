import React, { useEffect, useState} from "react";
// import {listUser} from '../../actions/user.action';
// import {UserService} from '../../services/user.service';
import { useSelector, useDispatch } from "react-redux";
import  { Link } from 'react-router-dom'


const List = (props) =>{
    //const [user, setUser] = useState( [] );
    const {user } = useSelector(state => state.user);
    console.log("LIST", user);

    return (
        
      <div>  
        <div>List User</div>
        {user !== undefined && user.length > 0 && 
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
            {user.map(function(user, i){
                return <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/update/${user.userId}`}>Edit</Link>
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