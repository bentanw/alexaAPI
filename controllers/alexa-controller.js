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
  try {
    // Extract everything between "Alexa, play ... on" into title, else throw error
    const requestData = req.body.input;
    const match = requestData.match(/play (.*) on/);
    if (!match) {
      return res.status(400).json({ "error": "Please provide a valid input in the format of 'Hey Alexa, play ___ on SiriusXM'" });
    }

    const title = match[1].trim();
    if (!title){
      return res.status(400).json({ "error": "Please provide a valid input in the format of 'Hey Alexa, play ___ on SiriusXM" })
    }

    // Find potential containers that match the title
    let listOfContainers = contentTable.filter(
      (item) => item.title.includes(title) && item.group === "container"
    );

    // Get playable IDs associated with all the containers
    let playableIds = [];
    if (listOfContainers.length > 0) {
      containerToPlayable.forEach((ctp) => {
        if (listOfContainers.some(container => container.id === ctp.container_id)) {
          playableIds.push(ctp.playable_id);
        }
      });

      // Filter playables that match the IDs
      listOfContainers = contentTable.filter(
        (item) => playableIds.includes(item.id) && item.group === "playable"
      );
    } else {
      listOfContainers = contentTable.filter(
        (item) => item.title.includes(title) && item.group === "playable"
      );
    }

    res.status(200).json({ playable: listOfContainers });
  } catch (error) {
    console.error("Error processing Alexa request:", error);
    return res.status(500).json({ error: `Internal server error: ${error}` });
  }
};