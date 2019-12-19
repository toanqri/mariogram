import React, { Component } from 'react';
import { FadeIn } from 'animate-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import d from '../../../utils/API/DOM';
import ModalHeader from '../../others/modal/ModalHeader';
import ModalBack from '../../others/modal/ModalBack';
import { editPost } from '../../../utils/post-utils';
import PrimaryButton from '../../others/button/PrimaryButton';
import TextArea from '../../others/input/TextArea';
import Overlay from '../../others/Overlay';

class EditPost extends Component {
  state = {
    description: '',
    ogDescription: '',
  }

  componentDidMount = () => {
    const { description } = this.props;
    this.setState({
      description,
      ogDescription: description,
    });
  }

  back = () => {
    const { back } = this.props;
    this.returnOgDescription();
    back();
  }

  descChange = ({ target: { value } }) => {
    this.setState({ description: value });
    this.props.changeDesc(value);
  }

  returnOgDescription = () => {
    const { ogDescription } = this.state;
    this.props.changeDesc(ogDescription);
  }

  updatePost = async (e) => {
    e.preventDefault();
    new d('.e_p_update').addClass('a_disabled');
    const { description } = this.state;
    const { dispatch, post, back } = this.props;
    editPost({
      post_id: post,
      description,
      dispatch,
      done: () => back(),
      failed: this.returnOgDescription(),
    });
  }

  render() {
    const { description } = this.state;

    return (
      <div>
        <Overlay />

        <div className="edit_post modal">
          <FadeIn duration="300ms">
            <ModalHeader title="Edit post" />

            <div className="e_p_middle modal_middle">
              <TextArea
                placeholder="Description.."
                className="e_p_textarea"
                autoFocus
                value={description}
                valueChange={this.descChange}
              />
            </div>

            <div className="e_p_bottom modal_bottom" style={{ marginTop: 0 }}>
              <ModalBack back={this.back} btnType="secondary" />

              <PrimaryButton
                label="Update post"
                onClick={this.updatePost}
                extraClass="e_p_update"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired,
  changeDesc: PropTypes.func.isRequired,
};

export default connect()(EditPost);
export { EditPost as PureEditPost };
