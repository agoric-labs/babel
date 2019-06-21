import { declare } from "@babel/helper-plugin-utils";

export default declare(api => {
  api.assertVersion(7);

  return {
    name: "syntax-infix-bang",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push(["infixBang", { resolver: "E" }]);
    },
  };
});
