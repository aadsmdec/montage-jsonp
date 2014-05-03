/**
 * @module test/jsonp-spec
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class JsonpSpec
 * @extends Montage
 */
exports.JsonpSpec = Montage.specialize(/** @lends JsonpSpec# */ {
    constructor: {
        value: function JsonpSpec() {
            this.super();
        }
    }
});
