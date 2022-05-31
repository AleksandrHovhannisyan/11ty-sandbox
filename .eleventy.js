const TEMPLATE_ENGINE = 'liquid';

module.exports = (eleventyConfig) => {
  eleventyConfig.on('eleventy.after', () => {
    eleventyConfig.addGlobalData('key', 'value');
    console.log(`eleventyConfig.globalData in eleventy.js`, eleventyConfig.globalData);
  });
  return {
    dir: {
        input: 'src',
        output: '_site',
        includes: '_includes',
        layout: '_layouts'
    },
    dataTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ['html', 'md', TEMPLATE_ENGINE],
  };
};
