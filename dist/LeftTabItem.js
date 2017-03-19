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

var LeftTabItem = function (_React$Component) {
  _inherits(LeftTabItem, _React$Component);

  function LeftTabItem(props) {
    _classCallCheck(this, LeftTabItem);

    var _this = _possibleConstructorReturn(this, (LeftTabItem.__proto__ || Object.getPrototypeOf(LeftTabItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(LeftTabItem, [{
    key: 'handleClick',
    value: function handleClick(evt) {
      var id = this.props.id;
      var onSelect = this.props.onSelect;

      if (!!onSelect) {
        onSelect(id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          extendClassName = _props.className,
          actived = _props.actived;
      var prefixCls = this.props.prefixCls;

      if (!!!prefixCls) {
        prefixCls = 'fy_leftTab';
      }
      var className = (0, _classnames2.default)(prefixCls + '_item', extendClassName);
      if (actived) {
        className = (0, _classnames2.default)(className, 'actived');
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '_item_title', onClick: this.handleClick },
          _react2.default.createElement(
            'span',
            null,
            title
          )
        )
      );
    }
  }]);

  return LeftTabItem;
}(_react2.default.Component);

LeftTabItem.propTyps = {
  id: _react2.default.PropTypes.string,
  onSelect: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  actived: _react2.default.PropTypes.bool
};
exports.default = LeftTabItem;