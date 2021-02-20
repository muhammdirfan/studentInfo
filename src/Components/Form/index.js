import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentInfo from '../../Apis/studentInfo';

const studentinfo = new studentInfo();

const AddForm = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reg_no, setRegNo] = useState("");
    const [cellno, setCellNo] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [class_name, setClassName] = useState("");

    // console.log(props);

    const submitData = () => {
        if(name === "" || email === "" || reg_no === "" || cellno === "" || gender === "" || address === "" || class_name === ""){
            alert("Please Fill all the feild");
        }
        else{

            const datavalues={
                name:name,
                email:email,
                reg_no:reg_no,
                cellno:cellno,
                gender:gender,
                address:address,
                class_name:class_name,
            };
            studentinfo.addStudentInfo(datavalues, props);
            props.addstudent(datavalues);
        }
    }

    return(
        <div>
        <Form className="m-3">
         <Form.Group controlId="formGroupName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupEmail">
         <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupRegno">
         <Form.Label>Reg No</Form.Label>
          <Form.Control type="number" placeholder="Enter Reg No" onChange={(e)=> setRegNo(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupCellno">
         <Form.Label>Cell No</Form.Label>
          <Form.Control type="number" placeholder="Enter Cell No" onChange={(e)=> setCellNo(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupAddress">
         <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" onChange={(e)=> setAddress(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupGender">
         <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender" onChange={(e)=> setGender(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupClassname">
         <Form.Label>Class Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Class Name" onChange={(e)=> setClassName(e.target.value)}/>
         </Form.Group>
         <Form.Group controlId="formGroupButton">
          <Form.Control className="btn btn-outline-primary" type="button" value="Add Student" onClick={()=>submitData()}/>
         </Form.Group>
         </Form>
        </div>
    )
}
export default AddForm;