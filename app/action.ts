"use server";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const fetchContentfulData = async (query: string) => {
  const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/`;
  //   console.log(url, "\n\n", query);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Contentful API error: ${response.statusText}`);
  }

  const data = await response.json();
  //   console.log(data);
  return data;
};

const fetchPages = async () => {
  const query = `
   query {
  pagesCollection {
    items {
      title
      slug
    }
  }
}

    `;

  try {
    const data = await fetchContentfulData(query);
    // console.log(data, "Hello");
    return data.data.pagesCollection.items;
  } catch (error) {
    // console.log("Error fetching posts:", error);
    // throw error;
  }
};

const fetchByPageSlug = async ({
  slug,
}: {
  slug: string;
}): Promise<Page[] | null> => {
  const query = `
    query {
  pagesCollection(where: { slug: "${slug}" }) {
    items {
      title
      slug
      cardsCollection(limit: 2) {
        items {
          title
          color
          thumbnail {
            url
          }
          description
          title
        }
      }
    }
  }
}
      `;

  try {
    const data: FetchPagesResponse = await fetchContentfulData(query);
    // console.log(data, "Hello");
    return data.data.pagesCollection.items;
  } catch (error) {
    // console.log("Error fetching posts:", error);
    return null;
    // throw error;
  }
};
export { fetchPages, fetchByPageSlug };
