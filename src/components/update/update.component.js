import React, { useEffect, useState} from "react";
import FormComponent from '../form/form.component';
import { useSelector, useDispatch } from "react-redux";
import {getByUserId} from '../../actions/user.action';

const Update = (props) =>{
    const [activeUser, setActiveUser] = useState(null);
    //console.log("update", props.match.params.id);
    const paramUserId = props.match.params.id;
    //const {user} = useSelector(state => state.user);

    //  setActiveUser(useDispatch(getByUserId(paramUserId)));
    // setActiveUser(props.dispatch(getByUserId(paramUserId)));


    console.log("update 2",useDispatch(getByUserId(paramUserId)) );
    
    
    // useEffect(()=>{
    //     setActiveUser(user.filter((uu)=>{
    //         if(uu.userId === paramUserId){
    //             return uu;
    //         }
    //     }));
    //     console.log("update 2",activeUser);
    // },[user, paramUserId, activeUser])

    

    const getdata = (data) => {
        console.log("getData", data);
    }

    

    return (
        
        <FormComponent handleSubmitInParent={ getdata } type="Update"/>

    )
}

export default Update;