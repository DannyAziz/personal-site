import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const getDatabase = async (databaseId) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Tags",
        multi_select: {
          contains: "Live"
        }
      }
    });
    return response.results;
  } catch (error) {
    return error;
  }
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100
  });
  return response.results;
};