import { type Dataset, type Organization, type Person, type Place, type LearningResource, type Article, type Graph } from "schema-dts";
import jsonld from 'jsonld';


const qualiaworksOrganizationId = "https://qualiaworks.com";
export const qualiaworksOrganization: Organization = {
  "@type": "Organization",
  name: "Qualiaworks",
  url: "https://qualiaworks.com",
};


export const brusselsPlace: Place = {
  "@id": `${qualiaworksOrganizationId}/Brussels`,
  "@type": "Place",
  name: "Brussels"
};

export const person: Person = {
  "@id": `${qualiaworksOrganizationId}/QuentinLaurent`,
  "@type": "Person",
  name: "Quentin Laurent",
  workLocation: {
    "@id": brusselsPlace["@id"]!,
  },
  affiliation: {
    "@id": qualiaworksOrganization["@id"]!,
  },
};

export const learningResource: LearningResource = {
  "@type": "LearningResource",
  name: "Introduction to AI strategy",
  teaches: "AI strategy",
  educationalLevel: "Beginner",
  creator: {
    "@id": person["@id"]!,
  },
  provider: {
    "@id": qualiaworksOrganization["@id"]!,
  },
  audience: "Businesses",
  about: "Introduction to AI strategy",
  learningResourceType: "Course",
};

export const article: Article = {
  "@type": "Article",
  name: "Introduction to AI strategy",
  author: {
    "@id": person["@id"]!,
  },
  publisher: {
    "@id": qualiaworksOrganization["@id"]!,
  },
  url: "https://spotchi.github.io/site/blog/2025-05-27-agent-components/"
};

export const datasets: (Dataset & { "@context"?: string })[] = [
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "jigsaw-agile-community-rules",
    name: "Jigsaw - Agile Community Rules Classification",
    description: "An AI model competition using comments from a subreddit to assist human moderators in enforcing community rules. The dataset includes two training rules and additional, unseen rules for the test set. The task is to predict rule violations.",
    url: "https://www.kaggle.com/competitions/jigsaw-agile-community-rules/data",
    creator: {
      "@type": "Organization",
      name: "Kaggle"
    },
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    datePublished: "2024-01-01",
    dateModified: "2024-12-01",
    keywords: [
      "nlp",
      "text analysis",
      "classification",
      "moderation",
      "machine learning",
      "kaggle"
    ],
    distribution: [
      {
        "@id": "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/train.csv",
        "@type": "DataDownload",
        name: "train.csv",
        description: "Training dataset with labeled examples",
        encodingFormat: "text/csv",
        contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/train.csv"
      },
      {
        "@id": "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/test.csv",
        "@type": "DataDownload",
        name: "test.csv",
        description: "Test dataset for evaluation",
        encodingFormat: "text/csv",
        contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/test.csv"
      },
      {
        "@id": "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/sample_submission.csv",
        "@type": "DataDownload",
        name: "sample_submission.csv",
        description: "Sample submission format",
        encodingFormat: "text/csv",
        contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/sample_submission.csv"
      }
    ]
  }
];


// Test jsonld.flatten with the first dataset
console.log("Original dataset:", JSON.stringify(datasets[0], null, 2));

const flattenedDataset = await jsonld.flatten(datasets[0] as any, {base: "http://schema.org"})//, {base: "https://schema.org"});
console.log("Flattened dataset:", JSON.stringify(flattenedDataset, null, 2));

const compactedDataset = await jsonld.compact(flattenedDataset, {base: "http://schema.org"})
console.log(JSON.stringify(compactedDataset?.["@graph"] as any, null, 2));
// Test with the entire graph
const graphWithContext: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    article,
    learningResource,
    ...flattenedDataset["@graph"] as any,
    person,
    qualiaworksOrganization,
    brusselsPlace,
  ]
};

// Parse types, if url then separate host and path
const allTypes = graphWithContext["@graph"].map((item: any) => {
    if (item?.["@type"]?.includes("http")) {
      const host = item["@type"]?.split("/")[2];
      const path = item["@type"].split("/").slice(3).join("/");
      return { host, path };
    }
    return { path: item["@type"] };
  });

// Deduplicate on path
const uniqueTypes = allTypes.filter((type, index, self) =>
  index === self.findIndex((t) => t.path === type.path)
);
console.log(uniqueTypes);

export function getDatasetById(id: string): Dataset | undefined {
  return datasets.find(dataset => dataset["@id"] === id);
}

export function getAllDatasets(): Dataset[] {
  return datasets;
}
