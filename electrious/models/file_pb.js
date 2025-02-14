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

goog.exportSymbol('proto.electrious.models.File', null, global);
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
proto.electrious.models.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.models.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.models.File.displayName = 'proto.electrious.models.File';
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
proto.electrious.models.File.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.models.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.models.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.File.toObject = function(includeInstance, msg) {
  var obj = {
    content: msg.getContent_asB64(),
    extension: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.electrious.models.File}
 */
proto.electrious.models.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.models.File;
  return proto.electrious.models.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.models.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.models.File}
 */
proto.electrious.models.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.electrious.models.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.models.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.models.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getExtension$();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {string}
 */
proto.electrious.models.File.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.electrious.models.File.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.electrious.models.File.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/** @param {!(string|Uint8Array)} value */
proto.electrious.models.File.prototype.setContent = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string extension = 2;
 * @return {string}
 */
proto.electrious.models.File.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.electrious.models.File.prototype.setExtension$ = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content_type = 3;
 * @return {string}
 */
proto.electrious.models.File.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.electrious.models.File.prototype.setContentType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.electrious.models.File.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.electrious.models.File.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.electrious.models);
