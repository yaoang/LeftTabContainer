import React from 'react';
import classnames from 'classnames';
// import '../assets/leftTablContainer.scss'

class LeftTabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.generalTabs = ::this.generalTabs;
    this.handleSelect = ::this.handleSelect;
    this.state = {
      activedId: props.activedId || 0,
      activedChild: null,
    }
  }

  static propTypes = {
    activedId: React.PropTypes.string,
  }

  componentWillMount(){
    const {children} = this.props;
    const {activedId} =this.state;
    if(!!!activedId){
      this.state.activedChild = children[0].props.children;
      return;
    }

    React.Children.map(children, child=> {
      if(!!!child){
        return;
      }
      if (activedId === child.props.id) {
        this.state.activedChild = child.props.children;
      }
    });
  }

  generalTabs() {
    const {children} = this.props;
    const {activedId} =this.state;
    let items = React.Children.map(children, child=> {
      if(!!!child){
        return;
      }
      if (activedId === child.props.id) {
        return React.cloneElement(child, {actived: true, onSelect: this.handleSelect});
      }
      return React.cloneElement(child, {onSelect: this.handleSelect});
    });

    if(!!!activedId){
      items[0] = React.cloneElement(items[0], {actived: true});
    }

    return items;
  }

  componentDidMount() {
    // const {children, activedId} = this.props;
    // if(!!!activedId){
    //   const firstChild = children[0];
    //   this.setState({
    //     activedId: firstChild.props.id,
    //     activedChild: firstChild.props.children,
    //   });
    //   // console.log(firstChild.props.id)
    // } else {
    //
    // }
  }

  handleSelect(activedId){
    const {children, onSelect} = this.props;
    let activedChild = null;
    React.Children.forEach(children, child=>{
      if(child.props.id===activedId){
        activedChild = child.props.children;
      }
    });
    this.setState({
      activedId,
      activedChild,
    });
    if(!!onSelect) {
      onSelect(activedId);
    }
    // return activedChild;
  }

  render() {
    const {className: extendClassName} = this.props;
    let {prefixCls} = this.props;
    if(!!!prefixCls){
      prefixCls = 'fy_leftTab';
    }
    let className = classnames(extendClassName, `${prefixCls}_Container`);
    return (
      <div className={className}>
        <div className={`${prefixCls}_tabs`}>
          {this.generalTabs()}
        </div>
        <div className={`${prefixCls}_body`}>
          {this.state.activedChild}
        </div>
      </div>
    );
  }
}

export default LeftTabContainer;
