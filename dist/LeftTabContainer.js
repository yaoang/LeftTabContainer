'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import '../assets/leftTablContainer.scss'

var LeftTabContainer = function (_React$Component) {
  _inherits(LeftTabContainer, _React$Component);

  function LeftTabContainer(props) {
    _classCallCheck(this, LeftTabContainer);

    var _this = _possibleConstructorReturn(this, (LeftTabContainer.__proto__ || Object.getPrototypeOf(LeftTabContainer)).call(this, props));

    _this.generalTabs = _this.generalTabs.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.state = {
      activedId: props.activedId || 0,
      activedChild: null
    };
    return _this;
  }

  _createClass(LeftTabContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var children = this.props.children;
      var activedId = this.state.activedId;

      if (!!!activedId) {
        if (children.length > 0) {
          this.state.activedChild = children[0].props.children;
        }
        return;
      }

      _react2.default.Children.map(children, function (child) {
        if (!!!child) {
          return;
        }
        if (activedId === child.props.id) {
          _this2.state.activedChild = child.props.children;
        }
      });
    }
  }, {
    key: 'generalTabs',
    value: function generalTabs() {
      var _this3 = this;

      var children = this.props.children;
      var activedId = this.state.activedId;

      var items = _react2.default.Children.map(children, function (child) {
        if (!!!child) {
          return;
        }
        if (activedId === child.props.id) {
          return _react2.default.cloneElement(child, { actived: true, onSelect: _this3.handleSelect });
        }
        return _react2.default.cloneElement(child, { onSelect: _this3.handleSelect });
      });

      if (!!!activedId) {
        if (items.length > 0) {
          items[0] = _react2.default.cloneElement(items[0], { actived: true });
        }
      }

      return items;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
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
  }, {
    key: 'handleSelect',
    value: function handleSelect(activedId) {
      var _props = this.props,
          children = _props.children,
          onSelect = _props.onSelect;

      var activedChild = null;
      _react2.default.Children.forEach(children, function (child) {
        if (child.props.id === activedId) {
          activedChild = child.props.children;
        }
      });
      this.setState({
        activedId: activedId,
        activedChild: activedChild
      });
      if (!!onSelect) {
        onSelect(activedId);
      }
      // return activedChild;
    }
  }, {
    key: 'render',
    value: function render() {
      var extendClassName = this.props.className;
      var prefixCls = this.props.prefixCls;

      if (!!!prefixCls) {
        prefixCls = 'fy_leftTab';
      }
      var className = (0, _classnames2.default)(extendClassName, prefixCls + '_Container');
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '_tabs' },
          this.generalTabs()
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '_body' },
          this.state.activedChild
        )
      );
    }
  }]);

  return LeftTabContainer;
}(_react2.default.Component);

LeftTabContainer.propTypes = {
  activedId: _react2.default.PropTypes.string
};
exports.default = LeftTabContainer;