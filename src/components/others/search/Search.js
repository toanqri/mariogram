import React, { Component } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import MapSearch from './map-search/MapSearch';
import TextInput from '../input/Text';

export default class Search extends Component {
  state = {
    value: '',
    search: {
      users: [],
      groups: [],
      hashtags: [],
    },
  }

  hide = () => {
    this.setState({
      search: {
        users: [],
        groups: [],
        hashtags: [],
      },
    });
  }

  search = async ({ target: { value } }) => {
    this.setState({ value });
    if (value.trim() !== '') {
      const { data } = await axios.post('/api/search-instagram', { value });
      this.setState({ search: data });
    } else {
      this.hide();
    }
  }

  clicked = () => {
    this.setState({ value: '' });
    this.hide();
  }

  render() {
    const {
      value,
      search: { users, groups, hashtags },
    } = this.state;

    return (
      <div>
        <div className="search_box">
          <TextInput
            placeholder="Search Instagram"
            autoFocus
            value={value}
            valueChange={this.search}
            className="search"
          />
          <span className="search_icon">
            <FaSearch />
          </span>
        </div>

        {users.length > 0 || groups.length > 0 || hashtags.length > 0 ? (
          <MapSearch
            users={users}
            groups={groups}
            hashtags={hashtags}
            clicked={this.clicked}
          />
        ) : null}
      </div>
    );
  }
}
