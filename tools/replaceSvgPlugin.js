/**
 *
 * @param {{ types: any }} param0
 * @returns
 */
export const replaceSvgPlugin = ({ types }) => {
  const replaceSvg = {
    JSXElement(path) {
      if (!path.get('openingElement.name').isJSXIdentifier({ name: 'svg' })) return;

      const openingElementName = path.get('openingElement.name');
      openingElementName.replaceWith(types.jsxIdentifier('Svg'));
      if (path.has('closingElement')) {
        const closingElementName = path.get('closingElement.name');
        closingElementName.replaceWith(types.jsxIdentifier('Svg'));
      }
    },
  };

  return {
    visitor: {
      Program(path) {
        path.traverse(replaceSvg);
      },
    },
  };
};
