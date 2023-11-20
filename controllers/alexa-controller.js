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
  // Extract input between "play ... on"
  const requestData = req.body.input;

  try {
    const title = requestData.match(/play (.*) on/)[1].trim();
    if (!title) {
      return res
        .status(400)
        .json({ error: "Invalid or missing title in request" });
    }

    // Find if the container matches the title
    let containers = contentTable.filter(
      (item) => item.title.includes(title) && item.group === "container"
    );

    // If a container is found, get the IDs of associated playables, else search directly in playables
    if (containers.length > 0) {
      const playableIds = containerToPlayable
        .filter((ctp) =>
          containers.some((container) => container.id === ctp.container_id)
        )
        .map((ctp) => ctp.playable_id);

      // Find playables that match the IDs
      containers = contentTable.filter(
        (item) => playableIds.includes(item.id) && item.group === "playable"
      );
    } else {
      containers = contentTable.filter(
        (item) => item.title.includes(title) && item.group === "playable"
      );
    }

    res.status(200).json({ data: containers });
  } catch (error) {
    console.error("Error processing Alexa request:", error);
    return res.status(500).json({ error: `Internal server error: ${error}` });
  }
};