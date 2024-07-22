/**  @type {import('@svgr/core').Config} */
export default {
  typescript: true,
  replaceAttrValues: {
    '#363738': 'currentColor',
  },
  ref: true,
  jsxRuntime: 'automatic',
  exportType: 'named',
  titleProp: true,
  svgProps: {
    width: '{size}',
    height: '{size}',
    color: '{color}',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'removeAttrs',
        params: {
          attrs: 'xmlns',
        },
      },
    ],
  },
  template: (variables, { tpl }) => {
    variables.componentName = variables.componentName.replace(/^Svg/, '');
    variables.interfaces[0].body.body.push({
      type: 'TSPropertySignature',
      key: { type: 'Identifier', name: 'size' },
      typeAnnotation: {
        type: 'TSTypeAnnotation',
        typeAnnotation: { type: 'TSNumberKeyword' },
      },
      kind: null,
      optional: true,
    });
    variables.props.forEach(prop => {
      if (prop.type === 'ObjectPattern') {
        prop.properties = [
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'title' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'title' },
              right: { type: 'StringLiteral', value: `${variables.componentName}` },
            },
            computed: false,
            shorthand: true,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'titleId' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'titleId' },
              right: { type: 'StringLiteral', value: `CDS-${variables.componentName}Icon` },
            },
            computed: false,
            shorthand: true,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'size' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'size' },
              right: { type: 'NumericLiteral', value: 20 },
            },
            computed: false,
            shorthand: false,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'color' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'color' },
              right: { type: 'StringLiteral', value: '#363738' },
            },
            computed: false,
            shorthand: false,
            decorators: null,
          },
          prop.properties[prop.properties.length - 1],
        ];
      }
      return prop;
    });

    return tpl`
    ${variables.imports}
    ${variables.interfaces}
    
    const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
    
    const ForwardRef = forwardRef(${variables.componentName});
    export { ForwardRef as ${variables.componentName} };
    
    `;
  },
};
