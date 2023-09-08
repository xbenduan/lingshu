const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_HTY9Rf9gs67O36Goko9HyGCHZwsRv2ConPIaoLnD4sA' });

const clone = async () => {
  const { results } = await notion.databases.query({
    database_id: '74a35a1a8fc84ae58ff78365574b0c3a',
  });

  const data = results.map(({ properties }) => ({
    name: properties.Name[properties.Name.type][0].text.content,
    tags: properties.Tags[properties.Tags.type][0].name,
  }));

  console.log('data', JSON.stringify(data));
};

module.exports = { clone };
