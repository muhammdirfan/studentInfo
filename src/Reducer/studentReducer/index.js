
// const data = [
//     {
//         id: "1",
//         name:"Muhammad",
//         email:"irfan@gmail.com",
//         reg_no:23,
//         cellno:"465726457",
//         gender:"male",
//         address:"New York",
//         class_name:"8th",
//     },
//     {
//         id: "2",
//         name:"Fahim",
//         email:"fahim@gmail.com",
//         reg_no:43,
//         cellno:"465726457",
//         gender:"male",
//         address:"Gilgit",
//         class_name:"7th",
//     },
//     {
//         id: "3",
//         name:"Jhon",
//         email:"jhon@gmail.com",
//         reg_no:28,
//         cellno:"465726457",
//         gender:"male",
//         address:"New York",
//         class_name:"8th",
//     }
// ];

const studentReducer = (state = [], action) => {
    const { type, payload } = action;

    if(type === "add_student"){
        return{
            ...state,
            payload
        };
    }
    else if (type === "delete_student"){
        return{
            ...state,
            getStudentData: state.getStudentData.filter((datavalues) => datavalues.id !== payload),
        };
    }
    else if (type === "update_student"){
        return{
            ...state,
            payload,
        };
    }
    else if (type === "get_student"){
        return {
            ...state,
            getStudentData: payload,
        }
    }
    else {
        return state;
    }
}

export default studentReducer;
