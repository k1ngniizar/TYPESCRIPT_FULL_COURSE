type Engagement = { [k: string]: number };

const counters: Engagement = {
  likes: 2,
  views: 3,
  shares: 100,
};

counters["repost"] = 20;
counters["comments"] = 30;

type Metrics = Record<"likes" | "views" | "shares" | "comments", number>;

const met: Metrics = {
  likes: 20,
  views: 20,
  shares: 5,
  comments: 10,
};

const priceMap = new Map<string, number>();
priceMap.set("rice", 10);

const loosePrice: Record<string, number | string | undefined> = {
  xs: 20,
  variant: "black",
  price: undefined,
};

loosePrice["qty"] = 20;
