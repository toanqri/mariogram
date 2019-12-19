import React, { useEffect, useState } from 'react';
import { FadeIn } from 'animate-components';
import {
  Button, Form, Image,
} from 'semantic-ui-react';
import Title from '../others/Title';
import Loading from '../others/IsLoading';
import { cLoading } from '../../utils/utils';
import api from '../../api/helpers';
import { useAuth } from '../../context/auth';
import { showError, showSuccess } from '../../utils/helpers';
import { DEFAULT_AVATAR } from '../../config/Constants';

function EditProfile() {
  const [id, setId] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  function _getUserDetail() {
    if (!currentUser || !currentUser.username) return;
    setLoading(true);
    api.get(`/users/${currentUser.username}`)
      .then((response) => {
        setId(response.id);
        setAvatarUrl(response.avatarUrl);
        setFirstName(response.firstName);
        setLastName(response.lastName);
        setEmail(response.email);
        setPhone(response.phone);
        setBirthday(response.birthday);
        if (response.address) {
          setStreet(response.address.street);
          setCity(response.address.city);
          setState(response.address.state);
          setZipcode(response.address.zipcode);
          setCountry(response.address.country);
        }
      })
      .catch((error) => {
        showError(error.message);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    _getUserDetail();
  }, [currentUser]);

  function _update() {
    let user = {
      id, firstName, lastName, email, phone, birthday,
    };
    if ([street, city, state, zipcode, country].some((el) => el)) {
      user = {
        ...user,
        address: {
          street, city, state, zipcode, country,
        },
      };
    }
    console.log('data', user);
    api.put(`/users/${currentUser.username}`, user)
      .then((response) => {
        showSuccess('Update profile success');
      })
      .catch((error) => {
        showError(error.message);
      });
  }

  return (
    <div>
      <Title
        value="Edit profile"
        desc="Edit your profile, add tags and links"
      />

      <Loading loading={loading} when="page" />

      <FadeIn duration="300ms" className={cLoading(loading)}>
        <div className="edit_profile">
          <div className="edit_info">
            <Image src={avatarUrl || DEFAULT_AVATAR} />
            <span>{currentUser.username}</span>
          </div>

          <Form>
            <Form.Field>
              <label>Username</label>
              <Form.Input value={currentUser.username} disabled />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>First Name</label>
                <Form.Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Form.Input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <Form.Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Phone</label>
              <Form.Input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Birthday</label>
              <Form.Input
                type="date"
                placeholder="Birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Street</label>
                <Form.Input
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>City</label>
                <Form.Input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>State</label>
                <Form.Input
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Zipcode</label>
                <Form.Input
                  placeholder="Zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Country</label>
              <Form.Dropdown
                placeholder="Country"
                selection
                value={country}
                options={[{
                  key: 'us', value: 'USA', flag: 'us', text: 'USA',
                }]}
                onChange={(e, data) => setCountry(data.value)}
              />
            </Form.Field>
            <Button type="submit" onClick={_update}>Submit</Button>
          </Form>
        </div>
      </FadeIn>
    </div>
  );
}

export default EditProfile;
