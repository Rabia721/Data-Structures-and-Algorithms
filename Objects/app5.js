books = [{
        name: 'The Lean Startup',
        topics: ['entrepreneurship', 'startups'],
    },
    {
        name: 'War and Peace',
        topics: ['peace', 'politics'],
    }
];

delete books[1];
console.log(JSON.stringify(books))