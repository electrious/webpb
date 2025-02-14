/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var electrious_models_geometry_latlng_pb = require('../../../electrious/models/geometry/latlng_pb.js');
goog.object.extend(proto, electrious_models_geometry_latlng_pb);
goog.exportSymbol('proto.electrious.workers.housedet.Response', null, global);
goog.exportSymbol('proto.electrious.workers.housedet.Response.Position', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.electrious.workers.housedet.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.housedet.Response.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.housedet.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.housedet.Response.displayName = 'proto.electrious.workers.housedet.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.electrious.workers.housedet.Response.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.workers.housedet.Response.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.housedet.Response.Position.displayName = 'proto.electrious.workers.housedet.Response.Position';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.housedet.Response.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.electrious.workers.housedet.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.housedet.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.housedet.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.housedet.Response.toObject = function(includeInstance, msg) {
  var obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    housesList: jspb.Message.toObjectList(msg.getHousesList(),
    proto.electrious.workers.housedet.Response.Position.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.electrious.workers.housedet.Response}
 */
proto.electrious.workers.housedet.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.housedet.Response;
  return proto.electrious.workers.housedet.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.housedet.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.housedet.Response}
 */
proto.electrious.workers.housedet.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = new proto.electrious.workers.housedet.Response.Position;
      reader.readMessage(value,proto.electrious.workers.housedet.Response.Position.deserializeBinaryFromReader);
      msg.addHouses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.electrious.workers.housedet.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.housedet.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.housedet.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.housedet.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHousesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.electrious.workers.housedet.Response.Position.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.electrious.workers.housedet.Response.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.housedet.Response.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.housedet.Response.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.housedet.Response.Position.toObject = function(includeInstance, msg) {
  var obj = {
    latlng: (f = msg.getLatlng()) && electrious_models_geometry_latlng_pb.LatLng.toObject(includeInstance, f),
    diameter: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    probability: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.electrious.workers.housedet.Response.Position}
 */
proto.electrious.workers.housedet.Response.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.housedet.Response.Position;
  return proto.electrious.workers.housedet.Response.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.housedet.Response.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.housedet.Response.Position}
 */
proto.electrious.workers.housedet.Response.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new electrious_models_geometry_latlng_pb.LatLng;
      reader.readMessage(value,electrious_models_geometry_latlng_pb.LatLng.deserializeBinaryFromReader);
      msg.setLatlng(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiameter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProbability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.electrious.workers.housedet.Response.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.housedet.Response.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.housedet.Response.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.housedet.Response.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatlng();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_models_geometry_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getDiameter();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional electrious.models.geometry.LatLng latlng = 1;
 * @return {?proto.electrious.models.geometry.LatLng}
 */
proto.electrious.workers.housedet.Response.Position.prototype.getLatlng = function() {
  return /** @type{?proto.electrious.models.geometry.LatLng} */ (
    jspb.Message.getWrapperField(this, electrious_models_geometry_latlng_pb.LatLng, 1));
};


/** @param {?proto.electrious.models.geometry.LatLng|undefined} value */
proto.electrious.workers.housedet.Response.Position.prototype.setLatlng = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.housedet.Response.Position.prototype.clearLatlng = function() {
  this.setLatlng(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.housedet.Response.Position.prototype.hasLatlng = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double diameter = 2;
 * @return {number}
 */
proto.electrious.workers.housedet.Response.Position.prototype.getDiameter = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.electrious.workers.housedet.Response.Position.prototype.setDiameter = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double probability = 3;
 * @return {number}
 */
proto.electrious.workers.housedet.Response.Position.prototype.getProbability = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.electrious.workers.housedet.Response.Position.prototype.setProbability = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.electrious.workers.housedet.Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.electrious.workers.housedet.Response.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.electrious.workers.housedet.Response.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.electrious.workers.housedet.Response.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Position houses = 3;
 * @return {!Array<!proto.electrious.workers.housedet.Response.Position>}
 */
proto.electrious.workers.housedet.Response.prototype.getHousesList = function() {
  return /** @type{!Array<!proto.electrious.workers.housedet.Response.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.electrious.workers.housedet.Response.Position, 3));
};


/** @param {!Array<!proto.electrious.workers.housedet.Response.Position>} value */
proto.electrious.workers.housedet.Response.prototype.setHousesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.electrious.workers.housedet.Response.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.workers.housedet.Response.Position}
 */
proto.electrious.workers.housedet.Response.prototype.addHouses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.electrious.workers.housedet.Response.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.housedet.Response.prototype.clearHousesList = function() {
  this.setHousesList([]);
};


goog.object.extend(exports, proto.electrious.workers.housedet);
