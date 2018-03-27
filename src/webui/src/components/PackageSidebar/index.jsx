import React from 'react';
import PropTypes from 'prop-types';
import LastSync from './modules/LastSync';
import Maintainers from './modules/Maintainers';
import Dependencies from './modules/Dependencies';
import Downloads from './modules/Downloads';

import API from '../../../utils/api';

export default class PackageSidebar extends React.Component {
  state = {};

  static propTypes = {
    packageName: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.loadPackageData = this.loadPackageData.bind(this);
  }

  async componentDidMount() {
    await this.loadPackageData(this.props.packageName);
    this.loadPackageDownloadData(this.props.packageName);
  }

  async componentWillReceiveProps(newProps) {
    if (newProps.packageName !== this.props.packageName) {
      await this.loadPackageData(newProps.packageName);
    }
  }

  async loadPackageData(packageName) {
    let packageMeta;

    try {
      packageMeta = (await API.get(`sidebar/${packageName}`)).data;
    } catch (err) {
      this.setState({
        failed: true
      });
      return;
    }

    this.setState({
      packageMeta
    });
  }

  async loadPackageDownloadData(packageName) {
    let downloadMeta;

    try {
      downloadMeta = (await API.get(`sidebar/extinfo/${packageName}/`)).data;
    } catch (err) {
      this.setState({
        failed: true
      });
      return;
    }

    this.setState({
      ...this.state.packageMeta,
      downloadMeta
    });
  }

  render() {
    let {packageMeta, downloadMeta} = this.state;

    return packageMeta ?
      (<aside>
        <LastSync packageMeta={packageMeta} />
        <Maintainers packageMeta={packageMeta} />
        <Dependencies packageMeta={packageMeta} />
        { downloadMeta ? <Downloads packageMeta={downloadMeta} /> : null }
        {/* Package management module? Help us implement it! */}
      </aside>):
      (<aside>Loading package information...</aside>);
  }
}
