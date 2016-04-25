'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// support text, email, password, file
var InputField = function InputField(props) {
    var schema = props.schema;
    var value = props.value;
    var _onChange = props.onChange;
    var onFocus = props.onFocus;
    var onBlur = props.onBlur;
    var enableValidation = props.enableValidation;
    var label = schema.label;
    var type = schema.type;
    var _schema$validate = schema.validate;
    var validate = _schema$validate === undefined ? defaultValidateFunc : _schema$validate;
    var _schema$options = schema.options;
    var options = _schema$options === undefined ? {} : _schema$options;
    var placeholder = options.placeholder;


    var error = validate(value);
    var validationState = !enableValidation ? null : error ? 'error' : 'success';

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
            controlId: Math.random() + '',
            validationState: validationState
        },
        label ? _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            label
        ) : null,
        _react2.default.createElement(_reactBootstrap.FormControl, {
            type: type,
            placeholder: placeholder,
            value: value,
            onChange: function onChange(e) {
                return _onChange(e.target.value);
            },
            onFocus: onFocus,
            onBlur: onBlur
        }),
        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
        enableValidation && error ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            error
        ) : null
    );
};

var TextareaField = function TextareaField(props) {
    var schema = props.schema;
    var value = props.value;
    var _onChange2 = props.onChange;
    var onFocus = props.onFocus;
    var onBlur = props.onBlur;
    var enableValidation = props.enableValidation;
    var label = schema.label;
    var _schema$validate2 = schema.validate;
    var validate = _schema$validate2 === undefined ? defaultValidateFunc() : _schema$validate2;
    var _schema$options2 = schema.options;
    var options = _schema$options2 === undefined ? {} : _schema$options2;
    var placeholder = options.placeholder;
    var rows = options.rows; // todo support 'auto' for rows

    var error = validate(value);
    var validationState = !enableValidation ? null : error ? 'error' : 'success';

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
            controlId: Math.random() + '',
            validationState: validationState
        },
        label ? _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            label
        ) : null,
        _react2.default.createElement(_reactBootstrap.FormControl, {
            componentClass: 'textarea',
            placeholder: placeholder,
            rows: rows,
            value: value,
            onChange: function onChange(e) {
                return _onChange2(e.target.value);
            },
            onFocus: onFocus,
            onBlur: onBlur,
            style: { resize: 'vertical' }
        }),
        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
        enableValidation && error ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            error
        ) : null
    );
};

var CheckBoxGroupField = function CheckBoxGroupField(props) {
    var schema = props.schema;
    var value = props.value;
    var _onChange3 = props.onChange;
    var onFocus = props.onFocus;
    var onBlur = props.onBlur;
    var enableValidation = props.enableValidation;
    var label = schema.label;
    var _schema$validate3 = schema.validate;
    var validate = _schema$validate3 === undefined ? defaultValidateFunc : _schema$validate3;
    var _schema$options3 = schema.options;
    var options = _schema$options3 === undefined ? {} : _schema$options3;
    var group = options.group;


    var error = validate(value);
    var validationState = !enableValidation ? null : error ? 'error' : 'success';

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
            controlId: Math.random() + '',
            validationState: validationState
        },
        label ? [_react2.default.createElement(
            _reactBootstrap.ControlLabel,
            { key: 0 },
            label
        ), _react2.default.createElement('br', { key: 1 })] : null,
        Object.keys(group).map(function (key, index) {
            return _react2.default.createElement(
                _reactBootstrap.Checkbox,
                {
                    key: index,
                    inline: true,
                    style: { marginRight: '10px' },
                    onFocus: onFocus,
                    onBlur: onBlur,
                    checked: value[key],
                    onChange: function onChange(e) {
                        return _onChange3(Object.assign({}, value, _defineProperty({}, key, e.target.checked)));
                    }
                },
                group[key]
            );
        }),
        enableValidation && error ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            error
        ) : null
    );
};

var RadioGroupField = function RadioGroupField(props) {
    var schema = props.schema;
    var value = props.value;
    var _onChange4 = props.onChange;
    var onFocus = props.onFocus;
    var onBlur = props.onBlur;
    var enableValidation = props.enableValidation;
    var label = schema.label;
    var _schema$validate4 = schema.validate;
    var validate = _schema$validate4 === undefined ? defaultValidateFunc : _schema$validate4;
    var _schema$options4 = schema.options;
    var options = _schema$options4 === undefined ? {} : _schema$options4;
    var group = options.group;


    var error = validate(value);
    var validationState = !enableValidation ? null : error ? 'error' : 'success';

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
            controlId: Math.random() + '',
            validationState: validationState
        },
        label ? [_react2.default.createElement(
            _reactBootstrap.ControlLabel,
            { key: 0 },
            label
        ), _react2.default.createElement('br', { key: 1 })] : null,
        Object.keys(group).map(function (key, index) {
            return _react2.default.createElement(
                _reactBootstrap.Radio,
                {
                    key: index,
                    inline: true,
                    style: { marginRight: '10px' },
                    onFocus: onFocus,
                    onBlur: onBlur,
                    checked: value[key],
                    onChange: function onChange(e) {
                        var newValue = {};
                        for (var k in value) {
                            if (value.hasOwnProperty(k)) newValue[k] = false;
                        }
                        newValue[key] = e.target.checked;
                        _onChange4(newValue);
                    }
                },
                group[key]
            );
        }),
        enableValidation && error ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            error
        ) : null
    );
};

var SelectGroupField = function SelectGroupField(props) {
    var schema = props.schema;
    var value = props.value;
    var onChange = props.onChange;
    var onFocus = props.onFocus;
    var onBlur = props.onBlur;
    var enableValidation = props.enableValidation;
    var label = schema.label;
    var _schema$validate5 = schema.validate;
    var validate = _schema$validate5 === undefined ? defaultValidateFunc : _schema$validate5;
    var _schema$options5 = schema.options;
    var options = _schema$options5 === undefined ? {} : _schema$options5;
    var group = options.group;
    var placeholder = options.placeholder;
    var multiple = options.multiple;


    var error = validate(value);
    var validationState = !enableValidation ? null : error ? 'error' : 'success';

    var selectValue = void 0;
    if (!multiple) {
        for (var k in value) {
            if (value.hasOwnProperty(k) && value[k]) {
                selectValue = k;
                break;
            }
        }
    } else {
        selectValue = [];
        for (var _k in value) {
            if (value.hasOwnProperty(_k) && value[_k]) {
                selectValue.push(_k);
            }
        }
    }

    var onSelectChange = void 0;
    if (!multiple) {
        onSelectChange = function onSelectChange(e) {
            var newValue = {};
            for (var _k2 in value) {
                if (value.hasOwnProperty(_k2)) newValue[_k2] = false;
            }
            newValue[e.target.value] = true;
            onChange(newValue);
        };
    } else {
        onSelectChange = function onSelectChange(e) {
            var newValue = {};
            var options = e.target.options;
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    newValue[options[i].value] = !!options[i].selected;
                }
            }
            onChange(newValue);
        };
    }

    return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        {
            controlId: Math.random() + '',
            validationState: validationState
        },
        label ? _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            { key: 0 },
            label
        ) : null,
        _react2.default.createElement(
            _reactBootstrap.FormControl,
            {
                componentClass: 'select',
                placeholder: placeholder,
                multiple: multiple,
                onFocus: onFocus,
                onBlur: onBlur,
                value: selectValue,
                onChange: onSelectChange
            },
            Object.keys(group).map(function (key, index) {
                return _react2.default.createElement(
                    'option',
                    {
                        key: index,
                        value: key
                    },
                    group[key]
                );
            })
        ),
        enableValidation && error ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            error
        ) : null
    );
};

var FormField = function FormField(props) {
    var type = props.schema.type;

    var Field = void 0;

    if (type === 'textarea') Field = TextareaField;else if (type === 'group.checkbox') Field = CheckBoxGroupField;else if (type === 'group.radio') Field = RadioGroupField;else if (type === 'group.select') Field = SelectGroupField;else Field = InputField;

    return _react2.default.createElement(Field, props);
};

FormField.getDefaultValue = function (schema) {
    if (/^group/.test(schema.type)) {
        var _ret = function () {
            var value = Object.assign({}, schema.options.group);
            Object.keys(value).forEach(function (key) {
                value[key] = false;
            });
            return {
                v: value
            };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
        return '';
    }
};

exports.default = FormField;


function defaultValidateFunc() {}

