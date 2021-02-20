import api_url from './api_url';
import axios from 'axios';


class studentInfo {

    async addStudentInfo(studentData, props){
        try {
            await axios.post(api_url + "addStudents", 
            studentData,
            {
                headers: {"Content-Type": "application/json"},
            }) 
                .then((response) => {
                    console.log(response);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getStudentData(props) {
        try {
            const responses = await axios.get(api_url + "getStudentList");
            console.log(responses);
            if(responses.data.response == "success") {
                props.getStudent(responses.data.message);
            } else {
                props.getStudent([]);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async updateStudentInfo(studentData, props){
        try {
            await axios.post(api_url + "updateStudents", 
            studentData,
            {
                headers: {"Content-Type": "application/json"},
            }) 
                .then((response) => {
                    console.log(response);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteStudentData(studentid, props) {
        try {
            const responses = await axios.get(api_url + "deleteStudent?id="+studentid);
            console.log(responses);
            if(responses.data.response == "success" ) {
                props.deleteStudent(studentid);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}


export default studentInfo;