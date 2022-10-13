# React Custom Modal

[![npm version](https://badge.fury.io/js/react-datepicker.svg)](https://badge.fury.io/js/react-datepicker)
[![Downloads](https://img.shields.io/npm/dm/react-datepicker.svg)](https://npmjs.org/package/react-datepicker)

A simple and reusable Modal component for REACT ([Demo](https://reactdatepicker.com/))

![](https://raw.githubusercontent.com/Alex-mant/Custom-modal_plugin/master/src/assets/preview.png?token=GHSAT0AAAAAABX2B7722F7QIV63N7LO2Z6OY2IBWCA)
![](https://raw.githubusercontent.com/Alex-mant/Custom-modal_plugin/master/src/assets/preview2.png?token=GHSAT0AAAAAABX2B772B5SNLQSWAA4TYIQEY2IBWFA)

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
![](https://raw.githubusercontent.com/Alex-mant/Custom-modal_plugin/master/src/assets/exampleCall1.png?token=GHSAT0AAAAAABX2B7723EA5QQVVEFJ6E6KKY2ICAJQ)

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