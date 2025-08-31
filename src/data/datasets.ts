export interface DatasetDistribution {
  name: string;
  description?: string;
  encodingFormat?: string;
  contentUrl: string;
  fileSize?: string;
  "@type"?: "DataDownload";

}

export interface Dataset {
  id: string;
  name: string;
  description: string;
  url: string;
  license: string;
  creator: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  distribution: DatasetDistribution[];
  // Content sections for rendering
  sections: {
    overview: string;
    coverage?: {
      title: string;
      content: string;
    };
    methodology?: {
      title: string;
      content: string;
    };
    quality?: {
      title: string;
      content: string;
    };
    applications?: {
      title: string;
      content: string;
      items: string[];
    };
    updateSchedule?: {
      title: string;
      realTime: {
        frequency: string;
        delay: string;
        coverage: string;
      };
      batch: {
        daily: string;
        weekly: string;
        monthly: string;
      };
    };
    formatDetails?: {
      title: string;
      formats: Array<{
        name: string;
        description: string;
      }>;
    };
    citation: string;
    contact: {
      team: string;
      email: string;
      phone: string;
      responseTime: string;
    };
  };
  // Advanced schema.org properties
  advancedProperties?: {
    spatialCoverage?: {
      name: string;
      description: string;
      geo?: {
        type: string;
        box?: string;
      };
    };
    temporalCoverage?: string;
    variableMeasured?: string[];
    measurementTechnique?: string[];
  };
}

export const datasets: Dataset[] = [

    {
        id: "jigsaw-agile-community-rules",
        name: "Jigsaw - Agile Community Rules Classification",
        description: "An AI model competition using comments from a subreddit to assist human moderators in enforcing community rules. The dataset includes two training rules and additional, unseen rules for the test set. The task is to predict rule violations.",
        url: "https://www.kaggle.com/competitions/jigsaw-agile-community-rules/data",
        creator: "Jigsaw",
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
            name: "train.csv",
            description: "Training dataset with labeled examples",
            encodingFormat: "text/csv",
            contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/train.csv"
          },
          {
            name: "test.csv",
            description: "Test dataset for evaluation",
            encodingFormat: "text/csv",
            contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/test.csv"
          },
          {
            name: "sample_submission.csv",
            description: "Sample submission format",
            encodingFormat: "text/csv",
            contentUrl: "https://www.kaggle.com/api/v1/competitions/jigsaw-agile-community-rules/data/sample_submission.csv"
          }
        ],
        sections: {
          overview: "This dataset contains Reddit comments that need to be classified according to community rules. It's designed for training AI models to assist human moderators in content moderation.",
          citation: "Jigsaw. (2024). Jigsaw - Agile Community Rules Classification [Dataset]. https://www.kaggle.com/competitions/jigsaw-agile-community-rules/data",
          contact: {
            team: "Jigsaw Team",
            email: "support@jigsaw.com",
            phone: "+1-555-0000",
            responseTime: "24-48 hours"
          }
        }
      }
  
];

export function getDatasetById(id: string): Dataset | undefined {
  return datasets.find(dataset => dataset.id === id);
}

export function getAllDatasets(): Dataset[] {
  return datasets;
}
