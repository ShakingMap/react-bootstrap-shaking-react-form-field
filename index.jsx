import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio} from 'react-bootstrap';

// support text, email, password, file
const InputField = (props) => {
    const {schema, value, onChange, onFocus, onBlur, enableValidation} = props;
    const {label, type, validate=defaultValidateFunc, options={}} = schema;
    const {placeholder} = options;

    const error = validate(value);
    const validationState = !enableValidation ? null : error ? 'error' : 'success';

    return <FormGroup
        controlId={Math.random()+''}
        validationState={validationState}
    >
        {
            label ? <ControlLabel>{label}</ControlLabel> : null
        }
        <FormControl
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        <FormControl.Feedback/>
        {
            enableValidation && error ? <HelpBlock>{error}</HelpBlock> : null
        }
    </FormGroup>
};

const TextareaField = (props) => {
    const {schema, value, onChange, onFocus, onBlur, enableValidation} = props;
    const {label, validate=defaultValidateFunc(), options={}} = schema;
    const {placeholder, rows} = options; // todo support 'auto' for rows

    const error = validate(value);
    const validationState = !enableValidation ? null : error ? 'error' : 'success';

    return <FormGroup
        controlId={Math.random()+''}
        validationState={validationState}
    >
        {
            label ? <ControlLabel>{label}</ControlLabel> : null
        }
        <FormControl
            componentClass="textarea"
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{resize: 'vertical'}}
        />
        <FormControl.Feedback/>
        {
            enableValidation && error ? <HelpBlock>{error}</HelpBlock> : null
        }
    </FormGroup>
};

const CheckBoxGroupField = (props)=> {
    const {schema, value, onChange, onFocus, onBlur, enableValidation} = props;
    const {label, validate=defaultValidateFunc, options={}} = schema;
    const {group} = options;

    const error = validate(value);
    const validationState = !enableValidation ? null : error ? 'error' : 'success';

    return <FormGroup
        controlId={Math.random()+''}
        validationState={validationState}
    >
        {
            label ? [<ControlLabel key={0}>{label}</ControlLabel>, <br key={1}/>] : null
        }
        {
            Object.keys(group).map((key, index)=>
                <Checkbox
                    key={index}
                    inline
                    style={{marginRight: '10px'}}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    checked={value[key]}
                    onChange={(e)=>onChange(Object.assign({}, value, {[key]:e.target.checked}))}
                >{group[key]}</Checkbox>
            )
        }
        {
            enableValidation && error ? <HelpBlock>{error}</HelpBlock> : null
        }
    </FormGroup>
};

const RadioGroupField = (props)=> {
    const {schema, value, onChange, onFocus, onBlur, enableValidation} = props;
    const {label, validate=defaultValidateFunc, options={}} = schema;
    const {group} = options;

    const error = validate(value);
    const validationState = !enableValidation ? null : error ? 'error' : 'success';

    return <FormGroup
        controlId={Math.random()+''}
        validationState={validationState}
    >
        {
            label ? [<ControlLabel key={0}>{label}</ControlLabel>, <br key={1}/>] : null
        }
        {
            Object.keys(group).map((key, index)=>
                <Radio
                    key={index}
                    inline
                    style={{marginRight: '10px'}}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    checked={value[key]}
                    onChange={(e)=>{
                        const newValue = {};
                        for(let k in value) {
                            if (value.hasOwnProperty(k)) newValue[k] = false;
                        }
                        newValue[key] = e.target.checked;
                        onChange(newValue);
                    }}
                >{group[key]}</Radio>
            )
        }
        {
            enableValidation && error ? <HelpBlock>{error}</HelpBlock> : null
        }
    </FormGroup>
};

const SelectGroupField = (props)=> {
    const {schema, value, onChange, onFocus, onBlur, enableValidation} = props;
    const {label, validate=defaultValidateFunc, options={}} = schema;
    const {group, placeholder, multiple} = options;

    const error = validate(value);
    const validationState = !enableValidation ? null : error ? 'error' : 'success';

    let selectValue;
    if (!multiple) {
        for (let k in value) {
            if (value.hasOwnProperty(k) && value[k]) {
                selectValue = k;
                break;
            }
        }
    }
    else {
        selectValue = [];
        for (let k in value) {
            if (value.hasOwnProperty(k) && value[k]) {
                selectValue.push(k);
            }
        }
    }

    let onSelectChange;
    if (!multiple) {
        onSelectChange = (e)=> {
            const newValue = {};
            for (let k in value) {
                if (value.hasOwnProperty(k)) newValue[k] = false;
            }
            newValue[e.target.value] = true;
            onChange(newValue);
        }
    }
    else {
        onSelectChange = (e)=> {
            const newValue = {};
            const options = e.target.options;
            for (let i in options) {
                if (options.hasOwnProperty(i)) {
                    newValue[options[i].value] = !!options[i].selected;
                }
            }
            onChange(newValue);
        }
    }

    return <FormGroup
        controlId={Math.random()+''}
        validationState={validationState}
    >
        {
            label ? <ControlLabel key={0}>{label}</ControlLabel> : null
        }
        <FormControl
            componentClass="select"
            placeholder={placeholder}
            multiple={multiple}
            onFocus={onFocus}
            onBlur={onBlur}
            value={selectValue}
            onChange={onSelectChange}
        >
            {
                Object.keys(group).map((key, index)=>
                    <option
                        key={index}
                        value={key}
                    >{group[key]}</option>
                )
            }
        </FormControl>
        {
            enableValidation && error ? <HelpBlock>{error}</HelpBlock> : null
        }
    </FormGroup>
};

export default FormField = (props) => {
    const {type} = props.schema;
    let Field;

    if (type === 'textarea') Field = TextareaField;
    else if (type === 'group.checkbox') Field = CheckBoxGroupField;
    else if (type === 'group.radio') Field = RadioGroupField;
    else if (type === 'group.select') Field = SelectGroupField;
    else Field = InputField;

    return <Field {...props}/>
};

FormField.getDefaultValue = (schema)=> {
    if (/^group/.test(schema.type)) {
        const value = Object.assign({}, schema.options.group);
        Object.keys(value).forEach((key)=> {
            value[key] = false;
        });
        return value;
    }
    else {
        return '';
    }
};

function defaultValidateFunc() {}