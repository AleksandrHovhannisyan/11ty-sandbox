const TEMPLATE_ENGINE = 'liquid';

module.exports = (eleventyConfig) => {
  return {
    dir: {
        input: 'src',
        output: '_site',
        data: '_data',
        includes: '_includes',
        layout: '_layouts'
    },
    dataTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ['html', 'md', TEMPLATE_ENGINE],
  };
};
