// POSTFACH - Testemails 
export const emails = [
    {
        id : 0,
        from : "test0@example.com",
        datetime: new Date('2025-02-17T12:34:56.789Z'),
        folder_id : 0, // 0 ist Posteingang
        subject : "Testbetreff 0",
        message: "testtest",
    },
    {
        id : 1,
        folder_id : 0,
        from : "test1@example.com",
        datetime: new Date('2025-01-01T10:37:37.377Z'), 
        subject : "Testbetreff 1",
        message: "testtest",
    },
    {
        id : 2,
        folder_id : 0,
        from : "test2@example.com",
        datetime: new Date('2025-01-01T10:37:37.377Z'),  
        subject : "Test 2",
        message: "testtest",
    },
    {
        id : 3,
        folder_id : 0,
        from : "test3@example.com",
        datetime: new Date('2025-01-01T13:37:37.377Z'), 
        subject : "Test 3",
        message: "testtest",
    },
    {
        id : 4,
        folder_id : 0,
        from : "test4@example.com",
        datetime: new Date('2025-01-01T13:37:37.377Z'), 
        subject : "Test 4",
        message: "testtest",
    },
    {
        id : 5,
        folder_id : 0,
        from : "test5@example.com",
        datetime: new Date('2025-01-01T13:37:37.377Z'), 
        subject : "Test 5",
        message: "testtest",
    },
    {
        id : 6,
        from : "test6@example.com",
        datetime: new Date('2025-02-17T12:34:56.789Z'),
        folder_id : 0, // 0 ist Posteingang
        subject : "Testbetreff 6",
        message: "testtest",
    },
    {
        id : 7,
        from : "test7@example.com",
        datetime: new Date('2025-02-17T12:34:56.789Z'),
        folder_id : 0, // 0 ist Posteingang
        subject : "Testbetreff 7",
        message: "testtest",
    },
    {
        id : 8,
        from : "test8@example.com",
        datetime: new Date('2025-02-17T12:34:56.789Z'),
        folder_id : 0, // 0 ist Posteingang
        subject : "Testbetreff 8",
        message: "testtest",
    },
]

export const folders = [
    {
        parent : 0,
        folder_name: "Posteingang"
    },
    {
        parent : 0,
        folder_name: "Gesendet"
    },
    {
        parent : 0,
        folder_name: "Papierkorb"
    },
]


