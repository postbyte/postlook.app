const { send } = require('./util/send');

exports.handler = async (event) => {
  const { page } = JSON.parse(event.body);

  return send({
    query: `
      query ($page: String!) {
        commentsByPage(page: $page) {
          data {
            githubUsername
            comment
          }
        }
      }
    `,
    variables: { page },
  });
};
