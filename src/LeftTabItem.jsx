import React from 'react';
import classnames from 'classnames';

class LeftTabItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
  }

  static propTyps = {
    id: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    actived: React.PropTypes.bool,
  }

  handleClick(evt){
    const {id} = this.props;
    const {onSelect} = this.props;
    if(!!onSelect) {
      onSelect(id);
    }
  }

  render() {
    const {title, className: extendClassName, actived} = this.props;
    let {prefixCls} = this.props;
    if(!!!prefixCls) {
      prefixCls = 'fy_leftTab';
    }
    let className = classnames(`${prefixCls}_item`, extendClassName);
    if(actived) {
      className = classnames(className, 'actived');
    }

    return (
      <div className={className}>
        <div className={`${prefixCls}_item_title`} onClick={this.handleClick}>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}

export default LeftTabItem;
