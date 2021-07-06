books = [{
        name: 'Advance Programming in Python',
        topics: ['programming', 'development'],
    },
    {
        name: 'Capture the crown',
        topics: ['kingdom', 'war'],
    }
];

for (const objBooks of books) {
    console.log(JSON.stringify(objBooks.topics))
}