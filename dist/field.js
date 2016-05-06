'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * props for fields, all are optional
 * - {String} label
 * - {String} type
 * - {Any} options
 * - {Any} value
 * - {Func(value)} onChange
 * - {String} validationState - 'success' or 'error'
 * - {String} validationError
 * - {Boolean} readOnly
 * - {Boolean} disabled
 */

var fieldClass = 'field';

// support types: text, email, password, file
// support options: placeholder

var InputField = function (_React$Component) {
    _inherits(InputField, _React$Component);

    function InputField(props) {
        _classCallCheck(this, InputField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputField).call(this, props));

        _this.id = Math.random() + '';
        return _this;
    }

    _createClass(InputField, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var label = _props.label;
            var type = _props.type;
            var options = _props.options;
            var _onChange = _props.onChange;
            var value = _props.value;
            var validationState = _props.validationState;
            var validationError = _props.validationError;
            var readOnly = _props.readOnly;
            var disabled = _props.disabled;

            var _ref = options || {};

            var placeholder = _ref.placeholder;


            var shouldShowError = validationState === 'error' && validationError;

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: this.id, validationState: validationState },
                label ? _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    label
                ) : null,
                _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: type,
                    value: value || '',
                    placeholder: placeholder,
                    onChange: function onChange(e) {
                        return _onChange(e.target.value);
                    },
                    readOnly: readOnly,
                    disabled: disabled
                }),
                shouldShowError ? _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    validationError
                ) : null
            );
        }
    }]);

    return InputField;
}(_react2.default.Component);

// support types: textarea
// support options: placeholder, rows


var TextareaField = function (_React$Component2) {
    _inherits(TextareaField, _React$Component2);

    function TextareaField(props) {
        _classCallCheck(this, TextareaField);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TextareaField).call(this, props));

        _this2.id = Math.random() + '';
        return _this2;
    }

    _createClass(TextareaField, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var label = _props2.label;
            var options = _props2.options;
            var _onChange2 = _props2.onChange;
            var value = _props2.value;
            var validationState = _props2.validationState;
            var validationError = _props2.validationError;
            var readOnly = _props2.readOnly;
            var disabled = _props2.disabled;

            var _ref2 = options || {};

            var placeholder = _ref2.placeholder;
            var rows = _ref2.rows;


            var shouldShowError = validationState === 'error' && validationError;

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: this.id, validationState: validationState },
                label ? _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    label
                ) : null,
                _react2.default.createElement(_reactBootstrap.FormControl, {
                    componentClass: 'textarea',
                    value: value || '',
                    placeholder: placeholder,
                    rows: rows // todo support 'auto'
                    , onChange: function onChange(e) {
                        return _onChange2(e.target.value);
                    },
                    style: { resize: 'vertical' },
                    readOnly: readOnly,
                    disabled: disabled
                }),
                shouldShowError ? _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    validationError
                ) : null
            );
        }
    }]);

    return TextareaField;
}(_react2.default.Component);

// support types: group.checkbox
// support options: group, vertical
// options.group is an object, where key is checkbox key, and value is checkbox label
// value is an array, where items are the keys of checked checkboxes


var CheckboxGroupField = function (_React$Component3) {
    _inherits(CheckboxGroupField, _React$Component3);

    function CheckboxGroupField(props) {
        _classCallCheck(this, CheckboxGroupField);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxGroupField).call(this, props));

        _this3.id = Math.random() + '';
        return _this3;
    }

    _createClass(CheckboxGroupField, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var label = _props3.label;
            var options = _props3.options;
            var _onChange3 = _props3.onChange;
            var value = _props3.value;
            var validationState = _props3.validationState;
            var validationError = _props3.validationError;
            var readOnly = _props3.readOnly;
            var disabled = _props3.disabled;

            var _ref3 = options || {};

            var group = _ref3.group;
            var vertical = _ref3.vertical;


            var shouldShowError = validationState === 'error' && validationError;

            var checkedItems = new Set(value);

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { validationState: validationState },
                label ? _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    label
                ) : null,
                _react2.default.createElement(
                    'div',
                    null,
                    Object.keys(group).map(function (key) {
                        return _react2.default.createElement(
                            _reactBootstrap.Checkbox,
                            {
                                key: key,
                                inline: !vertical,
                                style: vertical ? null : { marginRight: '1rem' },
                                checked: checkedItems.has(key),
                                onChange: function onChange(e) {
                                    var newValue = (value || []).filter(function (x) {
                                        return x !== key;
                                    });
                                    if (e.target.checked) newValue.push(key);
                                    _onChange3(newValue);
                                },
                                readOnly: readOnly,
                                disabled: disabled
                            },
                            group[key]
                        );
                    })
                ),
                shouldShowError ? _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    validationError
                ) : null
            );
        }
    }]);

    return CheckboxGroupField;
}(_react2.default.Component);

// support types: group.radio
// support options: group, vertical
// options.group is an object, where key is radio key, and value is radio label
// value is the key of selected radio


var RadioGroupField = function (_React$Component4) {
    _inherits(RadioGroupField, _React$Component4);

    function RadioGroupField(props) {
        _classCallCheck(this, RadioGroupField);

        var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioGroupField).call(this, props));

        _this4.id = Math.random() + '';
        return _this4;
    }

    _createClass(RadioGroupField, [{
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var label = _props4.label;
            var options = _props4.options;
            var _onChange4 = _props4.onChange;
            var value = _props4.value;
            var validationState = _props4.validationState;
            var validationError = _props4.validationError;
            var readOnly = _props4.readOnly;
            var disabled = _props4.disabled;

            var _ref4 = options || {};

            var group = _ref4.group;
            var vertical = _ref4.vertical;


            var shouldShowError = validationState === 'error' && validationError;

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { validationState: validationState },
                label ? _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    label
                ) : null,
                _react2.default.createElement(
                    'div',
                    null,
                    Object.keys(group).map(function (key) {
                        return _react2.default.createElement(
                            _reactBootstrap.Radio,
                            {
                                key: key,
                                inline: !vertical,
                                style: vertical ? null : { marginRight: '1rem' },
                                checked: key === value,
                                onChange: function onChange(e) {
                                    return _onChange4(key);
                                },
                                readOnly: readOnly,
                                disabled: disabled
                            },
                            group[key]
                        );
                    })
                ),
                shouldShowError ? _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    validationError
                ) : null
            );
        }
    }]);

    return RadioGroupField;
}(_react2.default.Component);

// support types: group.select
// support options: group, multiple
// options.group is an object, where key is option key, and value is option text
// if not multiple, value is the key of selected option
// else value is an array of keys of selected options


var SelectGroupField = function (_React$Component5) {
    _inherits(SelectGroupField, _React$Component5);

    function SelectGroupField(props) {
        _classCallCheck(this, SelectGroupField);

        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectGroupField).call(this, props));

        _this5.id = Math.random() + '';
        return _this5;
    }

    _createClass(SelectGroupField, [{
        key: 'render',
        value: function render() {
            var _props5 = this.props;
            var label = _props5.label;
            var options = _props5.options;
            var onChange = _props5.onChange;
            var value = _props5.value;
            var validationState = _props5.validationState;
            var validationError = _props5.validationError;
            var readOnly = _props5.readOnly;
            var disabled = _props5.disabled;

            var _ref5 = options || {};

            var group = _ref5.group;
            var multiple = _ref5.multiple;


            var shouldShowError = validationState === 'error' && validationError;

            var onFieldChange = multiple ? function (e) {
                var options = e.target.options;
                var value = [];
                for (var i in options) {
                    if (options.hasOwnProperty(i) && options[i].selected) value.push(options[i].value);
                }
                onChange(value);
            } : function (e) {
                return onChange(e.target.value);
            };

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: this.id, validationState: validationState },
                label ? _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    { htmlFor: this.id },
                    label
                ) : null,
                _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    {
                        componentClass: 'select',
                        value: value || (multiple ? [] : ''),
                        onChange: onFieldChange,
                        multiple: multiple,
                        readOnly: readOnly,
                        disabled: disabled
                    },
                    Object.keys(group).map(function (key) {
                        return _react2.default.createElement(
                            'option',
                            { key: key, value: key },
                            group[key]
                        );
                    })
                ),
                shouldShowError ? _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    validationError
                ) : null
            );
        }
    }]);

    return SelectGroupField;
}(_react2.default.Component);

var FormField = function FormField(props) {
    var type = props.type;

    var Field = void 0;

    if (type === 'textarea') Field = TextareaField;else if (type === 'group.checkbox') Field = CheckboxGroupField;else if (type === 'group.radio') Field = RadioGroupField;else if (type === 'group.select') Field = SelectGroupField;else Field = InputField;

    return _react2.default.createElement(Field, props);
};

exports.default = FormField;

