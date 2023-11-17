const app = require("../app");
const request = require("supertest");

describe("api/alexa", () => {
  it("Alexa, play Howard Stern on SiriusXM should return 3 playables", async () => {
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

  it("Alexa, play Howard Stern 24/7 on SiriusXM should return 1 playable", async () => {
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

  it("Alexa, play SiriusXM NFL Radio on SiriusXM Should return 1 playable", async () => {
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

  it("Alexa, play Sports on SiriusXM Should return 1 playable", async () => {
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

  it("Alexa, play Elton John on SiriusXM Should return 1 playable", async () => {
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
