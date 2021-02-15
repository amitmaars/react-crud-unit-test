import React from "react";
import FormComponent from '../form/form.component';
import {createUser} from '../../actions/user.action';
import {connect} from 'react-redux';
import List from '../list/list.component';

const Add = (props) => {
    const getdata = (data) => {
        console.log("getData", data);
        props.dispatch(createUser(data));
        
    }
    return (    
        <div>
            <FormComponent handleSubmitInParent={ getdata } preloadData={null} type="Add"/>

            <List />
        </div>  
        
    )
}

export default connect()(Add);