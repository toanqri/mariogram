import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Me } from '../../../../../utils/utils';
import { isAdmin } from '../../../../../utils/admin-utils';
import { deletePost } from '../../../../../utils/post-utils';
import Prompt from '../../../../others/Prompt';

class DeletePostOption extends Component {
  state = {
    deletePost: false,
    redirect: false,
  }

  showDeletePost = (e) => {
    // e ? e.preventDefault() : null;
    this.setState({ deletePost: !this.state.deletePost });
  }

  delete = (e) => {
    e.preventDefault();
    const {
      postDetails: { post_id, when },
      dispatch,
    } = this.props;
    deletePost({
      post_id,
      when,
      dispatch,
      redirect: () => this.setState({ redirect: true }),
    });
  }

  modalBack = () => {
    this.props.toggleOptions();
    this.setState({ deletePost: false });
  }

  render() {
    const {
      postDetails: { user },
    } = this.props;
    const { deletePost, redirect } = this.state;

    return (
      <>
        {redirect && <Redirect to="/" />}

        {(Me(user) || isAdmin()) && (
          <li>
            <a href="#" className="delete_post" onClick={this.showDeletePost}>
              Delete post
              {' '}
              {isAdmin() ? 'as admin' : null}
            </a>
          </li>
        )}

        {deletePost && (
          <Prompt
            title="Delete post"
            content="This post will be deleted. There's no undo so you won't be able to find it."
            actionText="Delete"
            action={this.delete}
            back={this.modalBack}
          />
        )}
      </>
    );
  }
}

export default DeletePostOption;
