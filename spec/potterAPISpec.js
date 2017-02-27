const request = require('request');
const url = 'http://localhost:3000/';

describe("potterAPI server", () => {
  describe("GET /", () => {
    it("Return status code 200", (done) => {
      request.get(url, (err, res, body) => {
        expect(res.statusCode.toBe(200));
        done();
      });
    });
  });

  describe("")
});


