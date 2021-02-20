import React, { useState, useEffect } from 'react';
import Table  from 'react-bootstrap/Table';
import {Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AddForm from '../../Components/Form';
import UpdateForm from '../../Components/UpdateForm';
import { connect } from 'react-redux';
import {addStudent, deleteStudent, getStudent, updateStudent} from '../../Actions/index';
import studentInfo from '../../Apis/studentInfo';

const studentinfo = new studentInfo();

const Home = (props) => {

  const [Datavalue, setDatavalues] = useState([]);

  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{
    studentinfo.getStudentData(props); 
     console.log(props, "use effect");
     if(props.getStudentsDatas != undefined){
       setStudentData(props.getStudentsDatas);
     }
  });


  // State for Add Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // State for Edit Modal
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (datavalue) => {
    setShow1(true);
    setDatavalues(datavalue)
  };

  const deleteStudent = (studentid, props) => {
    studentinfo.deleteStudentData(studentid, props);
  }


    return(
      <div>
    <div className="container-fluid">
      <div className="row p-3 mt-5">
      <div className="col">
        <h2>Student Info</h2>
      </div>
      <div className="col"style={{display:'flex', justifyContent:'flex-end'}}>
        <button className="btn btn-outline-success" onClick={handleShow}>Add Student</button>
      </div>
      </div>
      {/* Add Student Modal */}
      <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <AddForm addstudent={props.addStudent}/>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

        {/* Edit Student Modal */}
        <Modal show={show1} onHide={handleClose1} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Edit Student</Modal.Title>
    </Modal.Header>
      <UpdateForm datavalues={Datavalue}/>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>

      {/* Students Info Table */}
    <Table striped bordered style={{textAlign:'center'}} dataSource={studentData}>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Reg No</th>
      <th>Cell No</th>
      <th>Gender</th>
      <th>Address</th>
      <th>Class Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {studentData.map((datavalues, index) => {
      console.log(studentData, "testing");
      return (
        <tr>
            <td scope="row">{index}</td>
            <td>{datavalues.name}</td>
            <td>{datavalues.email}</td>
            <td>{datavalues.reg_no}</td>
            <td>{datavalues.cellno}</td>
            <td>{datavalues.gender}</td>
            <td>{datavalues.address}</td>
            <td>{datavalues.class_name}</td>
            <td style={{cursor:'pointer'}}>
              <FontAwesomeIcon icon={faEdit} style={{color:'blue', margin:'10px'}} onClick={()=>handleShow1(datavalues)}/>
              <FontAwesomeIcon icon={faTrashAlt} style={{color:'red', margin:'10px'}} onClick={()=>deleteStudent(datavalues.id)}/></td>
          </tr>
        )
      })}
</tbody>
</Table>
  </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    getStudentsDatas: state.studentReducer.getStudentData,
  }
}

export default connect(mapStateToProps, {
  addStudent, deleteStudent, getStudent, updateStudent
})(Home);