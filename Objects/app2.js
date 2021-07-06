userObject = {
    userName: "Philip",
    fatherName: "Norman",
    className: "four"
};

userObject.userName = "Rabia";
userObject.fatherName = "Muhammad Shafeeq";
userObject.className = "Web Development Circle";

for ([key, value] of Object.entries(userObject)) {
    console.log(`${key}: ${value}`);
}