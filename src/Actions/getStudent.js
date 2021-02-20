

const getStudent = (payload) => {
    return {
        type: "get_student",
        payload
    }
}

export default getStudent;