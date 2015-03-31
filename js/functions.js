var inherit = function(parent, child) {
    var attributes = child.toJSON(),
        keepkeys = _.keys(attributes);

    // remove special cases
    keepkeys = _.without(keepkeys, 'specialCase1', 'specialCase2');
    // or keepkeys = _.difference(keepkeys, ['specialCase1', 'specialCase2']);

    // remove undefined values
    keepkeys = _.filter(keepkeys, function (key) {
        return typeof(attributes[key])!=="undefined";
    });

    // with underscore>=1.3.3
    var result = _.pick(attributes, keepkeys);

    // with underscore<1.3.3
    // var result = {};
    // _.each(keepkeys, function (key) {
    //    result[key] = attributes[key];
    // });

    parent.set(result);
}