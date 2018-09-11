import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';

import data from './projectsData';

//

const list = data.map(image => {
  return {...image, height: 250 + Number((Math.random() * 100).toFixed())};
});

const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 200,
  fixedWidth: true
})

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth: 200,
  spacer: 10
})

function cellRenderer ({ index, key, parent, style }) {
  const datum = list[index]

  return (
    <CellMeasurer
      cache={cache}
      index={index}
      key={key}
      parent={parent}
    >
        <div style={{...style, width: '100%'}}>
        <img
          src={datum.image}
          style={{
            height: datum.height,
            width: 200
          }}
        />
      </div>
    </CellMeasurer>
  )
}


class ProjectGrid extends React.Component {
  render() {
    return (
      <Masonry
        cellCount={list.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={cellRenderer}
        height={600}
        width={600}
      />
    );
  }
}

export default ProjectGrid;