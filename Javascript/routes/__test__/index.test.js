const app = require("../../app");
const request = require("supertest");

describe("api/alexa", () => {
  it("returns a status code 200 if input is given", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play Elton John on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "3",
          type: "episode",
          group: "playable",
          title: "Howard Stern - Metallica, Miley Cyrus, and Elton John",
        },
      ],
    });
  });

  it("returns a status code 200 if input is given", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play Elton John on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "3",
          type: "episode",
          group: "playable",
          title: "Howard Stern - Metallica, Miley Cyrus, and Elton John",
        },
      ],
    });
  });
});
