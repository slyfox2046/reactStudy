import classnames from 'classnames';
import React from 'react';

/**
 * 成功
 * 失败
 * */
export default class FlashMessage extends React.Component {
  render() {
    const { type, text } = this.props.message;
    return (
      <div
        className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'danger',
        })}
      >
        {text}
      </div>
    );
  }
}
