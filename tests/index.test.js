const app = require("../app");
const request = require("supertest");

describe("api/alexa", () => {
  it("should return 3 playables upon Alexa, play Howard Stern on SiriusXM", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play Howard Stern on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "1",
          type: "channel",
          group: "playable",
          title: "Howard Stern 24/7",
        },
        {
          id: "2",
          type: "episode",
          group: "playable",
          title: "Howard Stern - Interview with Dave Grohl",
        },
        {
          id: "3",
          type: "episode",
          group: "playable",
          title: "Howard Stern - Metallica, Miley Cyrus, and Elton John",
        },
      ],
    });
  });

  it("should return 1 playables upon Alexa, play Howard Stern 24/7 on SiriusXM", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play Howard Stern 24/7 on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "1",
          type: "channel",
          group: "playable",
          title: "Howard Stern 24/7",
        },
      ],
    });
  });

  it("should return 3 playables upon Alexa, play SiriusXM NFL Radio on SiriusXM", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play SiriusXM NFL Radio on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "4",
          type: "channel",
          group: "playable",
          title: "SiriusXM NFL Radio",
        },
      ],
    });
  });

  it("should return 1 playables upon Alexa, play Sports on SiriusXM", async () => {
    const res = await request(app)
      .post("/api/alexa")
      .send({ input: "Alexa, play Sports on SiriusXM" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      data: [
        {
          id: "4",
          type: "channel",
          group: "playable",
          title: "SiriusXM NFL Radio",
        },
      ],
    });
  });

  it("should return 1 playables upon Alexa, play Elton John on SiriusXM", async () => {
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
