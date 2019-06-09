export const studentsTypeDef = `
type Student {
    code: Int!
    username: String!
    password: String!
}
input StudentInput {
    username: String!
    password: String!
}
input allStudentsParamsInput{
    first: Int
    maxResutl: Int
}
`;

export const studentsQueries = `
    allStudents(params: allStudentsParamsInput): [Student]!
    studentByCode(code: Int!): Student!
`;

export const studentsMutations = `
    createStudent(student: StudentInput!): Student!
    updateStudent(code: Int!, student: StudentInput!): Student!
    deleteStudent(code: Int!): Int
`;
