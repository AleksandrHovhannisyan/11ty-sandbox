module.exports = {
  eleventyComputed: {
    async: async (data) => {
      console.log(`async data.object`, data.object);
    },
    sync: (data) => {
      console.log(`sync data.object`, data.object);
    },
  },
};
