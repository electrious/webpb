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

var electrious_models_roofplate_pb = require('../../../electrious/models/roofplate_pb.js');
goog.object.extend(proto, electrious_models_roofplate_pb);
goog.exportSymbol('proto.electrious.workers.roofplatedet.Response', null, global);
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
proto.electrious.workers.roofplatedet.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.roofplatedet.Response.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.roofplatedet.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.roofplatedet.Response.displayName = 'proto.electrious.workers.roofplatedet.Response';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.roofplatedet.Response.repeatedFields_ = [3];



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
proto.electrious.workers.roofplatedet.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.roofplatedet.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.roofplatedet.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.roofplatedet.Response.toObject = function(includeInstance, msg) {
  var obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roofplatesList: jspb.Message.toObjectList(msg.getRoofplatesList(),
    electrious_models_roofplate_pb.RoofplateDetected.toObject, includeInstance),
    qualityScore: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    version: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.electrious.workers.roofplatedet.Response}
 */
proto.electrious.workers.roofplatedet.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.roofplatedet.Response;
  return proto.electrious.workers.roofplatedet.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.roofplatedet.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.roofplatedet.Response}
 */
proto.electrious.workers.roofplatedet.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new electrious_models_roofplate_pb.RoofplateDetected;
      reader.readMessage(value,electrious_models_roofplate_pb.RoofplateDetected.deserializeBinaryFromReader);
      msg.addRoofplates(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQualityScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.electrious.workers.roofplatedet.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.roofplatedet.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.roofplatedet.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.roofplatedet.Response.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRoofplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      electrious_models_roofplate_pb.RoofplateDetected.serializeBinaryToWriter
    );
  }
  f = message.getQualityScore();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.electrious.workers.roofplatedet.Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.electrious.workers.roofplatedet.Response.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.electrious.workers.roofplatedet.Response.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.electrious.workers.roofplatedet.Response.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated electrious.models.RoofplateDetected roofplates = 3;
 * @return {!Array<!proto.electrious.models.RoofplateDetected>}
 */
proto.electrious.workers.roofplatedet.Response.prototype.getRoofplatesList = function() {
  return /** @type{!Array<!proto.electrious.models.RoofplateDetected>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_roofplate_pb.RoofplateDetected, 3));
};


/** @param {!Array<!proto.electrious.models.RoofplateDetected>} value */
proto.electrious.workers.roofplatedet.Response.prototype.setRoofplatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.electrious.models.RoofplateDetected=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.RoofplateDetected}
 */
proto.electrious.workers.roofplatedet.Response.prototype.addRoofplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.electrious.models.RoofplateDetected, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.roofplatedet.Response.prototype.clearRoofplatesList = function() {
  this.setRoofplatesList([]);
};


/**
 * optional float quality_score = 4;
 * @return {number}
 */
proto.electrious.workers.roofplatedet.Response.prototype.getQualityScore = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.electrious.workers.roofplatedet.Response.prototype.setQualityScore = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.electrious.workers.roofplatedet.Response.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.electrious.workers.roofplatedet.Response.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.electrious.workers.roofplatedet);
