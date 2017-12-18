'use strict';

var GraphQL               = require("bs-graphql/lib/js/src/GraphQL.js");
var Js_option             = require("bs-platform/lib/js/js_option.js");
var Js_primitive          = require("bs-platform/lib/js/js_primitive.js");
var Graphql$slashlanguage = require("graphql/language");

var intKind = Js_option.getWithDefault("IntValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["INT"]));

var floatKind = Js_option.getWithDefault("FloatValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["FLOAT"]));

var stringKind = Js_option.getWithDefault("StringValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["STRING"]));

var booleanKind = Js_option.getWithDefault("BooleanValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["BOOLEAN"]));

var nullKind = Js_option.getWithDefault("NullValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["NULL"]));

var enumKind = Js_option.getWithDefault("EnumValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["ENUM"]));

var listKind = Js_option.getWithDefault("ListValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["LIST"]));

var objectKind = Js_option.getWithDefault("ObjectValue", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["OBJECT"]));

var objectFieldKind = Js_option.getWithDefault("ObjectField", Js_primitive.undefined_to_opt(Graphql$slashlanguage.Kind["OBJECT_FIELD"]));

var Language = /* module */[
  /* intKind */intKind,
  /* floatKind */floatKind,
  /* stringKind */stringKind,
  /* booleanKind */booleanKind,
  /* nullKind */nullKind,
  /* enumKind */enumKind,
  /* listKind */listKind,
  /* objectKind */objectKind,
  /* objectFieldKind */objectFieldKind
];

exports.Language = Language;
/* intKind Not a pure module */