import React from 'react';
import PropTypes from 'prop-types';
import Module from '../../Module';
import classnames from './style.scss';

export default class Downloads extends React.Component {
  static propTypes = {
    packageMeta: PropTypes.array.isRequired
  }

  getDefaultProps() {
    return {
      packageMeta: []
    };
  }

  get allVersionDownloads() {
    return this.props.packageMeta.sort(function(d1, d2) {
      return d1.version > d2.version
    })
  }

  render() {
    return (
      <Module title="Downloads" className={classnames.downloadsModule}>
        <ul>
          {
            this.allVersionDownloads.map((info) => {
              return <li key={info.version}>
                <span>{info.version}</span>
                <span>{info.download_times}</span>
              </li>;
            })
          }
        </ul>
      </Module>
    );
  }
}
