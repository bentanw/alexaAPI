const contentTable = [
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
  {
    id: "4",
    type: "channel",
    group: "playable",
    title: "SiriusXM NFL Radio",
  },
  {
    id: "5",
    type: "show",
    group: "container",
    title: "Howard Stern",
  },
  {
    id: "6",
    type: "category",
    group: "container",
    title: "Sports",
  },
];

const containerToPlayable = [
  {
    container_id: "5",
    playable_id: "1",
  },
  {
    container_id: "5",
    playable_id: "2",
  },
  {
    container_id: "5",
    playable_id: "3",
  },
  {
    container_id: "6",
    playable_id: "4",
  },
];

exports.alexaRequest = (req, res, next) => {
  const requestData = req.body.input;
  console.log(requestData);

  // Extract the title from the input string
  const title = requestData.match(/play (.*) on/)[1].trim();
  console.log(title);

  // Find the container that matches the title
  const containers = contentTable.filter(
    (item) => item.title.includes(title)
  );
  console.log(containers);

  res.status(200).json({ data: containers });
};
