import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer,
} from 'react-virtualized';

class ProjectGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      filteredImages: [],
      categories: [],
      columnCount: 4,
      columnWidth: 300,
      columnSpacer: 20,
      selectedCategory: '',
    };

    this.cache = new CellMeasurerCache({
      defaultHeight: 300,
      defaultWidth: 300,
      fixedWidth: true,
    });

    this.cellPositioner = createMasonryCellPositioner({
      cellMeasurerCache: this.cache,
      columnCount: this.state.columnCount,
      columnWidth: this.state.columnWidth,
      spacer: this.state.columnSpacer,
    });

    this.grid = null;

    this.setGridRef = element => {
      this.grid = element;
    };
  }

  componentWillMount() {
    const images = this.props.projectEdges.map(node => {
      const image = node.node.featured_media.localFile;
      return {
        slug: node.node.slug,
        category: node.node.categories,
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
    this.setState({ images, filteredImages: images, categories });
  }

  cellRenderer = data => ({ index, key, parent, style }) => {
    const datum = data[index];
    if (!datum) return;

    const ratio = datum.height / 300;
    const height = this.state.columnWidth * ratio;

    return (
      <CellMeasurer cache={this.cache} index={index} key={key} parent={parent}>
        <div style={{ ...style, width: this.state.columnWidth, height }}>
          <Link to={datum.slug} style={{ width: '100%', height }}>
            <img
              src={datum.src}
              style={{
                height,
                width: this.state.columnWidth,
                boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
              }}
            />
          </Link>
        </div>
      </CellMeasurer>
    );
  };

  onResize = ({ height, width }) => {
    const imageWidth = 300;
    const columnCount = Math.floor(width / imageWidth);
    const innerWidth = width - this.state.columnSpacer * (columnCount - 1);
    const columnWidth = innerWidth / columnCount;

    this.setState({
      columnCount,
      columnWidth,
    });
    this.cache.clearAll();

    this.cellPositioner.reset({
      columnCount,
      columnWidth,
      spacer: this.state.columnSpacer,
    });
    this.grid.clearCellPositions();

    // this.grid.recomputeCellPositions();
    // this.grid.recomputeRowHeights();
  };

  renderGrid(data, width) {
    return (
      <Masonry
        ref={this.setGridRef}
        cellCount={data.length}
        cellMeasurerCache={this.cache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer(data, width)}
        height={1000}
        width={width}
      />
    );
  }

  filterByCategory = inputCategory => {
    const imageResults = [];

    if (inputCategory === this.state.selectedCategory) {
      return this.setState({
        selectedCategory: '',
        filteredImages: this.state.images,
      });
    }

    this.state.images.map(image => {
      image.category.map(category => {
        if (category.name === inputCategory) {
          imageResults.push(image);
        }
      });
    });

    this.setState({
      selectedCategory: inputCategory,
      filteredImages: imageResults,
    });
  };

  render() {
    return (
      <div>
        <CategoryList>
          {this.state.categories.map((category, key) => (
            <li
              key={key}
              onClick={() => this.filterByCategory(category)}
              className={
                this.state.selectedCategory === category ? 'active' : ''
              }
            >
              {category}
            </li>
          ))}
        </CategoryList>
        <AutoSizer disableHeight onResize={this.onResize}>
          {({ height, width }) =>
            this.renderGrid(this.state.filteredImages, width)
          }
        </AutoSizer>
        {this.props.location.pathname === '/' ? (
          <SeeMoreDiv>
            <SeeMoreLink to={'/work'}>See more</SeeMoreLink>
          </SeeMoreDiv>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const SeeMoreDiv = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -200px;
  position: relative;
  height: 180px;
  padding-top: 50px;
`;

const SeeMoreLink = styled(Link)`
  font-size: 16px;
  padding: 13px 40px;
  text-align: center;
  text-decoration: none;
  border: 2px solid #ff6767;
  background-color: #ff6767;
  color: white;
  border-radius: 50px;
`;

const CategoryList = styled.ul`
  li {
    border-radius: 50px;
    border: 2px solid #ff6767;
    background-color: white;
    color: #ff6767;
    padding: 5px 15px;
    display: inline-block;
    margin: 15px 10px;
    cursor: pointer;
  }

  li.active {
    background-color: #ff6767;
    color: white;
  }
`;

export default ProjectGrid;
