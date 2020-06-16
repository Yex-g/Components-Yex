const {
    override,
    addWebpackAlias,
    addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    addWebpackAlias({
        '@': resolve("src"),
        '@views': resolve("src/views"),
        '@components': resolve("src/components"),
        '@style': resolve("src/style"),
        '@assets':resolve("src/assets")
    }),
    addDecoratorsLegacy()
);