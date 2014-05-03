var Jsonp = require("core/jsonp").Jsonp;

describe("jsonp-spec", function() {
    it("should get an object from a jsonp endpoint", function() {
        return Jsonp.makeRequest("http://echo.jsontest.com/key/value/one/two")
        .then(function(response) {
            expect(response).toEqual({key: "value", one: "two"})
        }).timeout(5000);
    });
})