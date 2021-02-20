import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentInfo from '../../Apis/studentInfo';

const studentinfo = new studentInfo();

const UpdateForm = (props) => {

    const [Id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reg_no, setRegNo] = useState("");
    const [cellno, setCellNo] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [class_name, setClassName] = useState("");

    // console.log(props);

    const submitData = () => {
        if(name === null || email === null || reg_no === null || cellno === null || gender === null || address === null || class_name === null){
            alert("Please Fill all the feild");
        }
        else{

            const datavalues={
                id:props.datavalues.id,
                name:name,
                email:email,
                reg_no:reg_no,
                cellno:cellno,
                gender:gender,
                address:address,
                class_name:class_name,
            };

            console.log(datavalues, 'datavalues testing');
            studentinfo.updateStudentInfo(datavalues, props);
            // props.addstudent(datavalues);
        }
    }

    return(
        <div>
        <Form className="m-3">
         <Form.Group controlId="formGroupName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={ (e) => {

              if(e.target.value === ""){
                setName(e.target.defaultValue) 
              }
              else{
                setName(e.target.value)
              }
            }} defaultValue={props.datavalues.name}/>
         </Form.Group>
         <Form.Group controlId="formGroupEmail">
         <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" onChange={(e)=> {
              if(e.target.value == ''){
                setEmail(e.target.defaultValue) 
              }
              else{
                setEmail(e.target.value)
              }
          }} defaultValue={props.datavalues.email}/>
         </Form.Group>
         <Form.Group controlId="formGroupRegno">
         <Form.Label>Reg No</Form.Label>
          <Form.Control type="number" placeholder="Enter Reg No" onChange={(e)=> {
              if(e.target.value == ''){
                setRegNo(e.target.defaultValue) 
              }
              else{
                setRegNo(e.target.value)
              }
          }} defaultValue={props.datavalues.reg_no}/>
         </Form.Group>
         <Form.Group controlId="formGroupCellno">
         <Form.Label>Cell No</Form.Label>
          <Form.Control type="number" placeholder="Enter Cell No" onChange={(e)=> {
               if(e.target.value == ''){
                setCellNo(e.target.defaultValue) 
              }
              else{
                setCellNo(e.target.value)
              }
          }} defaultValue={props.datavalues.cellno}/>
         </Form.Group>
         <Form.Group controlId="formGroupAddress">
         <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" onChange={(e)=> {
              if(e.target.value == ''){
                setAddress(e.target.defaultValue) 
              }
              else{
                setAddress(e.target.value)
              }
          }} defaultValue={props.datavalues.address}/>
         </Form.Group>
         <Form.Group controlId="formGroupGender">
         <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender" onChange={(e)=> {
               if(e.target.value == ''){
                setGender(e.target.defaultValue) 
              }
              else{
                setGender(e.target.value)
              }
          }} defaultValue={props.datavalues.gender}/>
         </Form.Group>
         <Form.Group controlId="formGroupClassname">
         <Form.Label>Class Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Class Name" onChange={(e)=> {
               if(e.target.value == ''){
                setClassName(e.target.defaultValue) 
              }
              else{
                setClassName(e.target.value)
              }
          }} defaultValue={props.datavalues.class_name}/>
         </Form.Group>
         <Form.Group controlId="formGroupButton">
          <Form.Control className="btn btn-outline-primary" type="button" value="Save Changes" onClick={()=>submitData()}/>
         </Form.Group>
         </Form>
        </div>
    )
}
export default UpdateForm;