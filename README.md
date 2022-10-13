# React Custom Modal

[![Downloads](https://raw.githubusercontent.com/Alex-mant/Custom-modal_plugin/4d1489e31ec9ddbb9e6ef4d786695e21ae193ca1/src/assets/downloadBadge.svg)](https://npmjs.org/package/@alexandre_m/custom-modal)

A simple and reusable Modal component for REACT

![](https://github.com/Alex-mant/Custom-modal_plugin/blob/master/src/assets/preview.png?raw=true)
![](https://github.com/Alex-mant/Custom-modal_plugin/blob/master/src/assets/preview2.png?raw=true)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install @alexandre_m/custom-modal --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add @alexandre_m/custom-modal
```
#### dependencies:
    styled-components: ^5.3.5
    
#### devDependencies
    @types/react: ^17.0.14,
    @types/styled-components: ^5.1.26,
    css-loader: 6.7.1,
    react-dom: ^17.0.2,
    style-loader: 3.3.1,
    typescript: ^4.3.5

## Configuration
### You can call the modal as a usual component
![](https://github.com/Alex-mant/Custom-modal_plugin/blob/master/src/assets/exampleCall1.png?raw=true)

### Type of props: 

```ts
    Interface Props {
        text: string;
        id: string;
        success: Boolean;
        icon: string
    }
```


## License

Copyright (c) 2022 Lych Inc. and individual contributors. Licensed under ISC license, see [LICENSE](LICENSE) for the full license.