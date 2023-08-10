

const i18n = require("eleventy-plugin-i18n-gettext");
const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    layout: "layouts/project.njk",
    headerBgColor: "coral-500",
    headerBorderColor: "coral-800",
    headerTextColor: "black",
    eleventyComputed: {
        langDir: data => data.supportedLanguages[data.locale].dir,
        /* Configure navigation */
        eleventyNavigation: {
            key: data => data.title,
            parent: data => data.parentTitle || "Projects",
            order: data => data.subPageOrder
        },
        /* Build a permalink using the title and language key if a custom permalink was not supplied. */
        permalink: data => {
            const locale = data.locale;
            return generatePermalink(data, "projects", i18n._(locale, "projects"));
        }
    }
};
