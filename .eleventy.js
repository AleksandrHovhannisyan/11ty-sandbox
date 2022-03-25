const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const { increment } = require('./config/filters');

const TEMPLATE_ENGINE = 'liquid';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "onrequest",
    functionsDir: "./netlify/functions/",
  });
  eleventyConfig.addFilter('increment', increment);

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
