var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

chai.use(chaiHttp);

let request;

let usrArr = [{ username: "User1", password: "password1" }, { username: "User2", password: "password2" }]

describe("GET /api/users", function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.User.deleteMany({}).then(function () {
            done();
        });
    });

    it("should return all the users", function (done) {
        db.User.insertMany(usrArr)
            .then(function (docs) {
                request.get("/api/users").end(function (err, res) {
                    let responseStatus = res.status;
                    let responseBody = res.body;

                    expect(err).to.be.null;

                    expect(responseStatus).to.equal(200);

                    expect(responseBody)
                        .to.be.an("array")
                        .that.has.lengthOf(2);

                    expect(responseBody[0])
                        .to.be.an("object")
                        .that.includes({ username: "User1", password: "password1" });

                    expect(responseBody[1])
                        .to.be.an("object")
                        .that.includes({ username: "User2", password: "password2" });

                    done();
                });
            }).catch(err => {
                console.log(err);
                done();
            });
    });
});

describe("POST /api/signup", function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.User.deleteMany({}).then(function () {
            done();
        });
    });

    it("should create a new user with the fields", function (done) {
        let reqBody = {
            username: "createdUser",
            password: "createdPassword",
            gender: "bot",
            age: "28"
        }

        request
            .post("/api/signup")
            .send(reqBody)
            .end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an("object")
                    .that.includes({ message: "user created" });

                // The `done` function is used to end any asynchronous tests
                db.User.findOne({
                    username: reqBody.username
                }).then(function (dbUser) {
                    expect(dbUser).to.not.be.null;

                    done();
                });
            });
    });

    it("should return an error when usename is not given", function (done) {
        let reqBody = {
            username: "",
            password: "noUsername",
            gender: "bot",
            age: "28"
        }

        request
            .post("/api/signup")
            .send(reqBody)
            .end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(responseStatus).to.equal(500);
                expect(responseBody)
                    .to.be.an("object")
                    .that.includes({ error: "User validation failed: username: Path `username` is required." });


                // The `done` function is used to end any asynchronous tests
                done();
            });
    });

    it("should return an error when password is not given", function (done) {
        let reqBody = {
            username: "noPasswords",
            password: "",
            gender: "bot",
            age: "28"
        }

        request
            .post("/api/signup")
            .send(reqBody)
            .end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(responseStatus).to.equal(500);
                expect(responseBody)
                    .to.be.an("object")
                    .that.includes({ error: "User validation failed: password: Path `password` is required." });


                // The `done` function is used to end any asynchronous tests
                done();
            });
    });

});

// describe("POST /api/authenticate", function () {
//     beforeEach(function (done) {
//         request = chai.request(server);
//         db.User.deleteMany({}).then(function () {
//             let reqBody = {
//                 username: "createdUser",
//                 password: "createdPassword",
//                 gender: "bot",
//                 age: "28"
//             };

//             db.User.create(reqBody).then(function () {
//                 done();
//             });
//         });
//     });

//     it("should return an error wrong usename/password entered is not given", function (done) {
//         let reqBody = {
//             username: "",
//             password: "noUsername",
//             gender: "bot",
//             age: "28"
//         }

//         request
//             .post("/api/signup")
//             .send(reqBody)
//             .end(function (err, res) {
//                 var responseStatus = res.status;
//                 var responseBody = res.body;

//                 // Run assertions on the response

//                 expect(responseStatus).to.equal(500);
//                 expect(responseBody)
//                     .to.be.an("object")
//                     .that.includes({ error: "User validation failed: username: Path `username` is required." });


//                 // The `done` function is used to end any asynchronous tests
//                 done();
//             });
//     });

// })