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

var electrious_uuid_pb = require('../../../electrious/uuid_pb.js');
goog.object.extend(proto, electrious_uuid_pb);
goog.exportSymbol('proto.electrious.models.racking.Skirt', null, global);
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
proto.electrious.models.racking.Skirt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.models.racking.Skirt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.models.racking.Skirt.displayName = 'proto.electrious.models.racking.Skirt';
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
proto.electrious.models.racking.Skirt.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.models.racking.Skirt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.models.racking.Skirt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.racking.Skirt.toObject = function(includeInstance, msg) {
  var obj = {
    id: (f = msg.getId()) && electrious_uuid_pb.UUID.toObject(includeInstance, f),
    arrayNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    length: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    x: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    y: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    z: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.electrious.models.racking.Skirt}
 */
proto.electrious.models.racking.Skirt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.models.racking.Skirt;
  return proto.electrious.models.racking.Skirt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.models.racking.Skirt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.models.racking.Skirt}
 */
proto.electrious.models.racking.Skirt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new electrious_uuid_pb.UUID;
      reader.readMessage(value,electrious_uuid_pb.UUID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setArrayNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
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
proto.electrious.models.racking.Skirt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.models.racking.Skirt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.models.racking.Skirt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.racking.Skirt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_uuid_pb.UUID.serializeBinaryToWriter
    );
  }
  f = message.getArrayNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLength();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional electrious.UUID id = 1;
 * @return {?proto.electrious.UUID}
 */
proto.electrious.models.racking.Skirt.prototype.getId = function() {
  return /** @type{?proto.electrious.UUID} */ (
    jspb.Message.getWrapperField(this, electrious_uuid_pb.UUID, 1));
};


/** @param {?proto.electrious.UUID|undefined} value */
proto.electrious.models.racking.Skirt.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.models.racking.Skirt.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.models.racking.Skirt.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 array_number = 2;
 * @return {number}
 */
proto.electrious.models.racking.Skirt.prototype.getArrayNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.electrious.models.racking.Skirt.prototype.setArrayNumber = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double length = 3;
 * @return {number}
 */
proto.electrious.models.racking.Skirt.prototype.getLength = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.electrious.models.racking.Skirt.prototype.setLength = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double x = 4;
 * @return {number}
 */
proto.electrious.models.racking.Skirt.prototype.getX = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.electrious.models.racking.Skirt.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double y = 5;
 * @return {number}
 */
proto.electrious.models.racking.Skirt.prototype.getY = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.electrious.models.racking.Skirt.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double z = 6;
 * @return {number}
 */
proto.electrious.models.racking.Skirt.prototype.getZ = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.electrious.models.racking.Skirt.prototype.setZ = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


goog.object.extend(exports, proto.electrious.models.racking);
