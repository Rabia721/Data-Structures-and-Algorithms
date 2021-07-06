let userObject = {
    userName: "Philip",
    fatherName: "Norman",
    className: "four",
};

for ([key, value] of Object.entries(userObject)) {
    console.log(`${key}: ${value}`);
}