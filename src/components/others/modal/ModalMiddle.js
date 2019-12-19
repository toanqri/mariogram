import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Nothing from '../Nothing';
import { cLoading } from '../../../utils/utils';

const ModalMiddle = ({ loading, list }) => {
  const len = list.length;

  return (
    <div className={classNames('modal_main', cLoading(loading))}>
      {len == 0 ? <Nothing showMssg={false} /> : list}
    </div>
  );
};

ModalMiddle.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ModalMiddle;
