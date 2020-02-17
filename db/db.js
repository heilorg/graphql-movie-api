export const movie = [
    {
        id: 1,
        name: "heilorg",
        age: 19,
        gender: "male"
    },
    {
        id: 2,
        name: "heilorg",
        age: 19,
        gender: "male"
    },
    {
        id: 3,
        name: "heilorg",
        age: 19,
        gender: "male"
    },
    {
        id: 4,
        name: "heilorg",
        age: 19,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
};
