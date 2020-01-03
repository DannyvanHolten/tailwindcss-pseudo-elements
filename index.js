module.exports = function () {
  return ({ addVariant, addUtilities, e }) => {
    const elements = [
      'after',
      'backdrop',
      'before',
      'cue',
      'first-letter',
      'first-line',
      'grammar-error',
      'marker',
      'placeholder',
      'selection',
    ];

    elements.forEach(pseudo => {
      addVariant(pseudo, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`);
      });
    });

    addUtilities({
      '.content': {
        content: '\'\'',
      },
    }, ['before', 'after']);
  };
};
