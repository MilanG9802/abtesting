interface SessionState {
  loaded: Boolean;
}

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  color?: string;
  loading?: boolean;
}

interface DynamicABTestingPageProps {
  params: {
    slug: string;
  };
}

interface Thumbnail {
  url: string;
}

interface Card {
  title: string;
  color: {
    id: string;
    name: string;
    value: string;
  };
  description: string;
  thumbnail: Thumbnail;
}

interface Page {
  title: string;
  slug: string;
  cardsCollection: {
    items: Card[];
  };
}

interface PagesCollection {
  items: Page[];
}

interface FetchPagesResponse {
  data: {
    pagesCollection: PagesCollection;
  };
}
