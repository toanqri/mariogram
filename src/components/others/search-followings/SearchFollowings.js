import React, { Component } from 'react';
import { post } from 'axios';
import { uniqBy } from 'lodash';
import PropTypes from 'prop-types';
import MapSFUsers from './MapUsers';
import d from '../../../utils/API/DOM';
import TextInput from '../input/Text';

export default class SearchFollowings extends Component {
  state = {
    value: '',
    data: [],
    followings: [],
    selected: [],
  }

  componentDidMount = async () => {
    new d('.p_add_taggings_text').focus();
    const { data } = await post('/api/search-followings');
    await this.setState({ data });
  }

  getFollowings = async (e) => {
    const value = e.target.value.trim();
    const { data } = this.state;
    const ff = !value
      ? []
      : data.filter((f) => f.follow_to_username.toLowerCase().includes(value));
    await this.setState({
      value,
      followings: ff,
    });
  }

  selectUser = (user, username) => {
    const { selected } = this.state;
    const { when, done } = this.props;

    selected.unshift({ user, username });
    this.setState({
      selected,
      value: '',
      followings: [],
    });

    new d('.p_add_taggings_text').focus();

    const f_users = uniqBy(selected, 'username');
    this.setState({ selected: f_users });

    /* eslint-disable indent */ //TODO
    // when == 'tag'
    //   ? done(f_users)
    //   : when == 'add_grp_members'
    //     ? done(user)
    //     : when == 'new_con'
    //       ? done(user, username)
    //       : null;
    /* eslint-enable indent */
  }

  render() {
    const { value, followings } = this.state;
    const { placeholder, disabled } = this.props;

    return (
      <div className="search_followings">
        <div className="p_add_taggings">
          <TextInput
            className="p_add_taggings_text"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            valueChange={this.getFollowings}
          />
        </div>

        <MapSFUsers followings={followings} selectUser={this.selectUser} />
      </div>
    );
  }
}

SearchFollowings.defaulProps = {
  placeholder: 'Search',
  disabled: false,
};

SearchFollowings.propTypes = {
  when: PropTypes.oneOf(['tag', 'add_grp_members', 'new_con']).isRequired,
  done: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
