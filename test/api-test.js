var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

chai.use(chaiHttp);

let request;

let usrArr = [{ username: "User1", password: "password1" }, { username: "User2", password: "password2" }]

describe("GET /api/users", function () {
    beforeEach(function () {
        request = chai.request(server);
        return db.User.remove({}, function (err) {
            console.log("collection removed");
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
        });
    });
});