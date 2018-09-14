import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';

class ProjectGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categories: []
    };



    this.cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 300,
      fixedWidth: true,
    });
    this.cellPositioner =  createMasonryCellPositioner({
      cellMeasurerCache: this.cache,
      columnCount: 3,
      columnWidth: 300,
      spacer: 10,
    })

    this.setRef = this.setRef.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
  }

  setRef = (ref) => this.gridRef = ref;

  componentWillMount() {
    const images = this.props.projectEdges.map(node => {
      const image = node.node.featured_media.localFile;
      return {
        slug: node.node.slug,
        height: !image.childImageSharp
          ? 300
          : image.childImageSharp.resolutions.height,
        src: !image.childImageSharp
          ? image.publicURL
          : image.childImageSharp.resolutions.src,
      };
    });

    let categoryNames = [];
    this.props.projectEdges.map(work => {
      work.node.categories.map(category => {
        categoryNames.push(category.name);
      });
    });
    const categories = Array.from(new Set(categoryNames));
    this.setState({ images, categories });
    console.log('test');
  }

  componentDidMount() {
    console.log('afasfa');
  }

  cellRenderer = ({ index, key, parent, style }) => {
    const datum = this.state.images[index];

    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <div style={{ ...style}}>
          <Link to={datum.slug}>
            <img
              src={datum.src}
              style={{
                height: datum.height,
                width: 300,
                boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
              }}
            />
          </Link>
        </div>
      </CellMeasurer>
    );
  };

  renderGrid() {
    // Our masonry layout will use 3 columns with a 10px gutter between
    // const cellPositioner = createMasonryCellPositioner({
    //   cellMeasurerCache: cache,
    //   columnCount: 3,
    //   columnWidth: 300,
    //   spacer: 10,
    // });

    return (
      <Masonry
        ref={this.setRef}
        cellCount={this.state.images.length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={1000}
        width={900}
      />
    )
  }

  render() {


    return (
      <div>
        {this.state.categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
        {this.renderGrid()}
      </div>
    );
  }
}

export default ProjectGrid;
