let books = [{
        name: 'The Lean Startup',
        topics: ['entrepreneurship', 'startups'],
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    }
];

for (const objBooks of books) {
    console.log(JSON.stringify(objBooks.topics))
}