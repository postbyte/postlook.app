const qs = require('querystring');
const { sendQuery } = require('./util/send');

exports.handler = async (event) => {
  const { collection, url, topic, description } = qs.parse(event.body);

  if (!collection || !url || !topic || !description) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'All fields are required.',
      }),
    };
  }

  return sendQuery({
    query: `
      mutation ($collection: String! $url: String! $topic: String! $description: String!) {
        createCollections(data: {
          collection: $collection,
          url: $url,
          topic: $topic,
          description: $description,
        }) {
          _id
          collection
          url
          topic
          description
        }
      }
    `,
    variables: { collection, url, topic, description },
  });
};
