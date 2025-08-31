# Dataset Pages with JSON+LD Schema.org Support

This Astro site now includes a comprehensive system for rendering datasets with proper JSON+LD structured data following the schema.org Dataset specification.

## Features

- **JSON+LD Structured Data**: Automatically generates schema.org compliant metadata
- **Responsive Design**: Mobile-friendly layouts with modern UI components
- **Multiple Distribution Formats**: Support for various file formats with download links
- **Rich Metadata**: Creator, license, keywords, spatial/temporal coverage, and more
- **SEO Optimized**: Proper meta tags and structured data for search engines

## File Structure

```
src/
├── layouts/
│   └── DatasetLayout.astro          # Main dataset layout with JSON+LD
├── pages/
│   └── datasets/
│       ├── index.astro              # Datasets listing page
│       ├── sample-dataset.astro     # Basic dataset example
│       └── advanced-dataset.astro   # Advanced dataset with extended properties
└── components/
    └── Header.astro                 # Updated with datasets navigation
```

## Creating a New Dataset Page

### 1. Basic Dataset

Create a new `.astro` file in `src/pages/datasets/`:

```astro
---
import DatasetLayout from '../../layouts/DatasetLayout.astro';

const dataset = {
  name: "Your Dataset Name",
  description: "Description of your dataset",
  url: "https://example.com/datasets/your-dataset",
  license: "https://creativecommons.org/licenses/by/4.0/",
  creator: "Your Organization",
  datePublished: "2024-01-01",
  dateModified: "2024-12-01",
  keywords: ["keyword1", "keyword2", "keyword3"],
  distribution: [
    {
      name: "Dataset CSV",
      description: "Main dataset in CSV format",
      encodingFormat: "text/csv",
      contentUrl: "/datasets/your-dataset.csv",
      fileSize: "1.5 MB"
    }
  ]
};
---

<DatasetLayout title={dataset.name} dataset={dataset}>
  <h2>About This Dataset</h2>
  <p>Your dataset description and content here...</p>
</DatasetLayout>
```

### 2. Advanced Dataset with Extended Properties

For datasets requiring additional schema.org properties:

```astro
---
import DatasetLayout from '../../layouts/DatasetLayout.astro';

const dataset = {
  // ... basic properties
};

// Additional schema.org properties
const advancedJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  // ... basic properties
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "box": "-90 -180 90 180"
    }
  },
  "temporalCoverage": "2010-01-01/2024-12-01",
  "variableMeasured": ["Variable 1", "Variable 2"],
  "measurementTechnique": ["Method 1", "Method 2"]
};
---

<DatasetLayout title={dataset.name} dataset={dataset}>
  <!-- Additional JSON+LD for advanced properties -->
  <script type="application/ld+json" set:html={JSON.stringify(advancedJsonLd)} />
  
  <!-- Your content here -->
</DatasetLayout>
```

## Schema.org Properties Supported

### Basic Properties
- `name`: Dataset name
- `description`: Dataset description
- `url`: Dataset URL
- `license`: License information
- `creator`: Dataset creator/organization
- `datePublished`: Publication date
- `dateModified`: Last modification date
- `keywords`: Array of keywords
- `distribution`: Array of data distributions

### Advanced Properties
- `spatialCoverage`: Geographic coverage
- `temporalCoverage`: Time period coverage
- `variableMeasured`: Variables in the dataset
- `measurementTechnique`: Methods used
- `citation`: Citation information
- `creator`: Extended creator information (Organization type)

## Distribution Formats

The system supports various file formats:

- **CSV**: `text/csv`
- **JSON**: `application/json`
- **Excel**: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- **NetCDF**: `application/x-netcdf`
- **HDF5**: `application/x-hdf5`
- **PDF**: `application/pdf`
- **ZIP**: `application/zip`

## Adding to Navigation

New dataset pages are automatically accessible via the `/datasets` route. The main navigation includes a "Datasets" link that points to the datasets index page.

## Testing JSON+LD

To verify your JSON+LD is working correctly:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Browser Developer Tools**: Check the `<script type="application/ld+json">` tag in the page source

## Best Practices

1. **Use Descriptive Names**: Clear, specific dataset names
2. **Comprehensive Descriptions**: Include what the data contains and how it was collected
3. **Proper Licensing**: Always specify the license terms
4. **Keywords**: Use relevant, searchable keywords
5. **Multiple Formats**: Provide data in multiple formats when possible
6. **Metadata**: Include as much relevant metadata as possible
7. **Citations**: Provide proper citation information
8. **Contact Information**: Include contact details for questions

## Example URLs

- Datasets Index: `/datasets`
- Sample Dataset: `/datasets/sample-dataset`
- Advanced Dataset: `/datasets/advanced-dataset`

## Customization

The `DatasetLayout.astro` file can be customized to:
- Change the visual design
- Add additional metadata fields
- Modify the JSON+LD structure
- Include custom CSS styles
- Add interactive components

## SEO Benefits

Proper JSON+LD implementation provides:
- Better search engine understanding
- Rich snippets in search results
- Improved discoverability
- Structured data for data catalogs
- Enhanced accessibility for data users
