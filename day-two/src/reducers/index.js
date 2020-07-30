export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state,
        listStudents: {
          students: action.payload,
        },
      };
    default:
      return state;
  }
}
