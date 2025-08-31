# Ontology Graph Visualization

This document explains how the ontology graph visualization system works and how to extend it.

## Overview

The ontology graph provides an interactive visualization of the schema.org ontologies used in your project. It shows the relationships between different ontology types and allows users to explore the semantic structure of your content.

## Features

- **Interactive Graph**: Force-directed graph visualization using vis.js
- **Color-coded Nodes**: Different colors for different ontology types
- **Clickable Nodes**: Click on nodes to see detailed information
- **Relationship Display**: Shows how different ontologies are connected
- **Fallback Visualization**: Static grid layout if JavaScript libraries fail to load
- **Responsive Design**: Works on both desktop and mobile devices

## How It Works

### 1. Data Structure

The graph is built from three main data structures:

```typescript
interface OntologyNode {
  id: string;
  label: string;
  type: string;
  description: string;
  examples: string[];
  properties: string[];
}

interface OntologyEdge {
  source: string;
  target: string;
  label: string;
}
```

### 2. Node Types

Nodes are categorized by type with different colors:

- **Core Types** (Blue): Fundamental ontology concepts like Dataset
- **Entities** (Green): Real-world entities like Person, Organization
- **Content** (Orange): Content types like Article, LearningResource
- **Distribution** (Purple): Data distribution methods like DataDownload
- **Location** (Red): Geographic and spatial concepts like Place

### 3. Visualization Engine

The system uses vis.js for the interactive graph, with a fallback to a static grid layout if the library fails to load.

## Adding New Ontologies

### 1. Add New Node Types

To add a new ontology type, update the `nodeTypes` object:

```typescript
const nodeTypes = {
  // ... existing types
  newType: { color: "#your-color", borderColor: "#your-border-color" }
};
```

### 2. Add New Nodes

Add new ontology nodes to the `ontologyNodes` array:

```typescript
{
  id: "NewOntology",
  label: "New Ontology",
  type: "newType",
  description: "Description of the new ontology",
  examples: ["Example 1", "Example 2"],
  properties: ["property1", "property2"]
}
```

### 3. Add New Relationships

Add new edges to the `ontologyEdges` array:

```typescript
{ source: "SourceNode", target: "TargetNode", label: "relationship" }
```

## Customization

### Styling

The graph appearance can be customized by modifying the CSS variables and styles in the component. Key areas for customization:

- Node colors and borders
- Edge styles and colors
- Layout spacing and sizing
- Responsive breakpoints

### Physics Settings

The force-directed layout can be adjusted by modifying the physics options:

```typescript
physics: {
  enabled: true,
  solver: 'forceAtlas2Based',
  forceAtlas2Based: {
    gravitationalConstant: -50,    // Repulsion strength
    centralGravity: 0.01,         // Center attraction
    springLength: 100,            // Edge length
    springConstant: 0.08          // Edge stiffness
  }
}
```

### Interaction Options

Customize user interactions:

```typescript
interaction: {
  hover: true,           // Enable hover effects
  tooltipDelay: 200,     // Tooltip delay in ms
  dragNodes: true,       // Allow node dragging
  zoomView: true         // Allow zooming
}
```

## Browser Compatibility

The visualization works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- SVG rendering

## Performance Considerations

- The graph automatically stabilizes after initial rendering
- Large numbers of nodes (>100) may impact performance
- The fallback visualization is lightweight and works on all devices

## Troubleshooting

### Graph Not Loading

1. Check browser console for JavaScript errors
2. Verify that vis.js CDN is accessible
3. The fallback visualization should appear automatically

### Performance Issues

1. Reduce the number of nodes and edges
2. Adjust physics settings for better performance
3. Consider using the static fallback for very large graphs

### Styling Issues

1. Check CSS variable definitions
2. Verify responsive breakpoints
3. Test on different screen sizes

## Future Enhancements

Potential improvements to consider:

- **Export Options**: PNG, SVG, or JSON export
- **Filtering**: Show/hide specific node types
- **Search**: Find specific nodes or relationships
- **Animations**: Smooth transitions between states
- **Custom Layouts**: Different graph layout algorithms
- **Data Import**: Load ontology data from external sources

## Dependencies

- **vis.js**: Interactive graph visualization (loaded from CDN)
- **Astro**: Component framework
- **TypeScript**: Type definitions and interfaces

## License

This component is part of your project and follows the same license terms.
