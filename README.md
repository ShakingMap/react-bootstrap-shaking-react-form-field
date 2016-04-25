# React-Bootstrap Shaking React Form Field
react-bootstrap field class for shaking-react-form.
see [shaking-react-form](https://github.com/ShakingMap/shaking-react-form) to learn more.

## Installation
This package depends on [Bootstrap 3](https://github.com/twbs/bootstrap) and [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap).
So make sure you have correctly install them on your app. Then, `npm install react-bootstrap-shaking-react-form-field --save`.

Often, you will use this package with [shaking-react-form](https://github.com/ShakingMap/shaking-react-form).

After installation, you can import the field class:

`import ReactBootstrapFormField from 'react-bootstrap-shaking-react-form-field';`

## Definition
### For a schema:

- **label** - nothing special
- **type** - allow text, email, password, file, textarea, group.checkbox, group.radio, group.select
- **validate** - nothing special
- **options** - for text, email and password, placeholder is available; for textarea, placeholder and rows are available;
for group.checkbox, group.radio and group.select, group is available. group is an object where keys are keys of group items
and values are labels of group items; for group.select, placeholder and multiple are available.

### For value:
For text, email, password and textarea, value is a string;

For file, value is the browser file object;

For group.checkbox, group.radio and group.select, value is an object where keys are corresponding keys in options.group and 
values are true or false, indicating if the item is selected or checked.