import React, { Component } from 'react';
import { FadeIn } from 'animate-components';
import { connect } from 'react-redux';
import Title from '../../../others/Title';
import { bottomScroll } from '../../../../utils/utils';
import AboutSections from './Sections';
import SocialIcons from './SocialIcons';
import UpdateInstruction from './UpdateInstruction';
import EditPen from '../../../others/EditPen';
import d from '../../../../utils/API/DOM';

class About extends Component {
  toggleEdit = () => new d('.a_edit').toggle()

  componentDidMount = () => bottomScroll()

  render() {
    const { username, firstname, surname } = this.props.ud;

    return (
      <div>
        <Title value={`About @${username} (${firstname} ${surname})`} />

        <FadeIn duration="300ms">
          <div className="senapati pro_senapati">
            <div className="about">
              <div className="sabout">
                <UpdateInstruction />
                <SocialIcons />
              </div>

              <div
                className="fabout"
                onMouseOver={this.toggleEdit}
                onMouseOut={this.toggleEdit}
              >
                <EditPen to="/edit-profile" when="profile" />
                <AboutSections />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  ud: store.User.user_details,
});

export default connect(mapStateToProps)(About);
