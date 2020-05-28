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

var electrious_models_file_pb = require('../../../../electrious/models/file_pb.js');
goog.object.extend(proto, electrious_models_file_pb);
goog.exportSymbol('proto.electrious.workers.nodes.imagearth.Response', null, global);
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
proto.electrious.workers.nodes.imagearth.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.workers.nodes.imagearth.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.nodes.imagearth.Response.displayName = 'proto.electrious.workers.nodes.imagearth.Response';
}



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
proto.electrious.workers.nodes.imagearth.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.nodes.imagearth.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.nodes.imagearth.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.imagearth.Response.toObject = function(includeInstance, msg) {
  var obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    file: (f = msg.getFile()) && electrious_models_file_pb.File.toObject(includeInstance, f)
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
 * @return {!proto.electrious.workers.nodes.imagearth.Response}
 */
proto.electrious.workers.nodes.imagearth.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.nodes.imagearth.Response;
  return proto.electrious.workers.nodes.imagearth.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.nodes.imagearth.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.nodes.imagearth.Response}
 */
proto.electrious.workers.nodes.imagearth.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new electrious_models_file_pb.File;
      reader.readMessage(value,electrious_models_file_pb.File.deserializeBinaryFromReader);
      msg.setFile(value);
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
proto.electrious.workers.nodes.imagearth.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.nodes.imagearth.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.nodes.imagearth.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.imagearth.Response.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      electrious_models_file_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.electrious.workers.nodes.imagearth.Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.electrious.workers.nodes.imagearth.Response.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.electrious.workers.nodes.imagearth.Response.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.electrious.workers.nodes.imagearth.Response.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional electrious.models.File file = 3;
 * @return {?proto.electrious.models.File}
 */
proto.electrious.workers.nodes.imagearth.Response.prototype.getFile = function() {
  return /** @type{?proto.electrious.models.File} */ (
    jspb.Message.getWrapperField(this, electrious_models_file_pb.File, 3));
};


/** @param {?proto.electrious.models.File|undefined} value */
proto.electrious.workers.nodes.imagearth.Response.prototype.setFile = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.imagearth.Response.prototype.clearFile = function() {
  this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.imagearth.Response.prototype.hasFile = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.electrious.workers.nodes.imagearth);
