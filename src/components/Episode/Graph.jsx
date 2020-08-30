import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import { createUseStyles, useTheme } from 'react-jss';
import { withEpisode } from './Context';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

class Graph extends React.Component {
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate({ steps: prevSteps, full: prevFull }) {
    const { steps: newSteps, full: newFull } = this.props;
    if (prevSteps.join('') !== newSteps.join('') || prevFull !== newFull) {
      this.renderChart();
    }
  }

  chart = (el = this.el) => {
    const {
      getStepInfo,
      onItemMouseEnter,
      onItemMouseOut,
      onItemClick,
    } = this.props;
    const data = this.data();
    const links = data.links.map((d) => Object.create(d));
    const nodes = data.nodes.map((d) => Object.create(d));
    const {
      clientWidth: width,
      clientHeight: height,
    } = el;

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const svg = d3.create('svg')
      .attr('viewBox', [0, 0, width, width]);

    const link = svg.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', (d) => Math.sqrt(d.value));

    const node = svg.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 5)
      .attr('fill', this.color())
      .on('mouseenter', (info, els) => {
        const dataNode = data.nodes[info.index];
        if (onItemMouseEnter) {
          onItemMouseEnter(getStepInfo(dataNode.id), dataNode, info, els);
        }
      })
      .on('mouseout', (info, els) => {
        const dataNode = data.nodes[info.index];
        if (onItemMouseOut) {
          onItemMouseOut(getStepInfo(dataNode.id), dataNode, info, els);
        }
      })
      .on('click', (info, els) => {
        const dataNode = data.nodes[info.index];
        if (onItemClick) {
          onItemClick(getStepInfo(dataNode.id), dataNode, info, els);
        }
      })
      .call(this.drag(simulation));

    node.append('title')
      .text((d) => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
    });

    return svg.node();
  };

  data = () => {
    const {
      steps,
      episodeSteps,
      getStepInfo,
      full,
    } = this.props;
    const data = {};
    const nodes = {};
    const links = {};

    const allSteps = full ? Object.keys(episodeSteps) : ['intro', ...steps];
    allSteps.forEach((id, i) => {
      const step = getStepInfo(id);
      if (!step) return;

      nodes[id] = { id, group: 2 };
      if (!full && i) {
        const prevId = allSteps[i - 1];
        const linkKey = [prevId, id].join('->-');
        links[linkKey] = { source: prevId, target: id, value: 10 };
      }

      if (
        (!full && i >= steps.length)
        || !step.choices
        || !step.choices.length
      ) return;

      step.choices.forEach(({ target }) => {
        nodes[target] = {
          id: target,
          group: allSteps.includes(target) ? 2 : 4,
        };
        const linkKey = [id, target].join('-x-');
        links[linkKey] = links[linkKey] || { source: id, target, value: 1 };
      });
    });

    // nodes.intro.group = 1;
    if (nodes.end) nodes.end.group = 3;
    data.nodes = Object.values(nodes);
    data.links = Object.values(links);
    return data;
  };

  // eslint-disable-next-line arrow-body-style
  color = () => {
    // const scale = d3.scaleOrdinal(d3.schemeCategory10);
    // return (d) => scale(d.group);
    return (d) => {
      switch (d.group) {
        case 1:
          return 'lightgreen';
        case 2:
          return 'blue';
        case 3:
          return 'green';
        default:
          return 'lightgrey';
      }
    };
  };

  drag = (simulation) => {
    /* eslint-disable no-param-reassign */
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
    /* eslint-enable no-param-reassign */
  }

  refEl = (el) => {
    // if (!this.el && el) el.appendChild(this.chart(el));
    this.el = el;
  };

  renderChart = () => {
    if (!this.el) return;
    this.el.textContent = '';
    this.el.appendChild(this.chart());
  };

  render() {
    const { steps, classes } = this.props;
    return (
      <div
        key={steps.join('')}
        ref={this.refEl}
        className={(classes || {}).root}
      />
    );
  }
}

Graph.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  full: PropTypes.bool,
  onItemMouseEnter: PropTypes.func,
  onItemMouseOut: PropTypes.func,
  onItemClick: PropTypes.func,
  getStepInfo: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  episodeSteps: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.shape({
      target: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

Graph.defaultProps = {
  classes: null,
  full: false,
  onItemMouseEnter: null,
  onItemMouseOut: null,
  onItemClick: null,
};

export default (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (<Graph {...props} classes={classes} />);
};

export const Connected = withEpisode(Graph);

Connected.propTypes = {
  onItemMouseEnter: PropTypes.func,
  onItemMouseOut: PropTypes.func,
  onItemClick: PropTypes.func,
};

Connected.defaultProps = {
  onItemMouseEnter: null,
  onItemMouseOut: null,
  onItemClick: null,
};
