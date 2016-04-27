# React-Bootstrap Shaking React Form Field
react-bootstrap field class for [shaking-react-form](https://github.com/ShakingMap/shaking-react-form).

tested with react-bootstrap v0.29.2

## Installation
- install [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- `npm install react-bootstrap-shaking-react-form-field  --save`

## Demo
[demo](https://github.com/ShakingMap/shaking-react-form-demo/tree/master/meteor%2Breact-bootstrap)

## Available Types
### text, email, password, file
- placeholder

### textarea
- placeholder
- rows

### group.checkbox
value is an array, where items are the keys of checked checkboxes

- group - this is an object, where key is checkbox key, and value is checkbox label
- vertical

### group.radio
value is the key of selected radio

- group - this is an object, where key is radio key, and value is radio label
- vertical

### group.select
if it is multiple, value is an array of keys of selected options, else value is the key of selected option

- group - this is an object, where key is option key, and value is option text
- multiple

