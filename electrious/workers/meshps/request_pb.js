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

var electrious_models_file_pb = require('../../../electrious/models/file_pb.js');
goog.object.extend(proto, electrious_models_file_pb);
var electrious_models_geometry_latlng_pb = require('../../../electrious/models/geometry/latlng_pb.js');
goog.object.extend(proto, electrious_models_geometry_latlng_pb);
goog.exportSymbol('proto.electrious.workers.meshps.Request', null, global);
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
proto.electrious.workers.meshps.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.meshps.Request.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.meshps.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.meshps.Request.displayName = 'proto.electrious.workers.meshps.Request';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.meshps.Request.repeatedFields_ = [2];



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
proto.electrious.workers.meshps.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.meshps.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.meshps.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.meshps.Request.toObject = function(includeInstance, msg) {
  var obj = {
    latlng: (f = msg.getLatlng()) && electrious_models_geometry_latlng_pb.LatLng.toObject(includeInstance, f),
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    electrious_models_file_pb.File.toObject, includeInstance)
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
 * @return {!proto.electrious.workers.meshps.Request}
 */
proto.electrious.workers.meshps.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.meshps.Request;
  return proto.electrious.workers.meshps.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.meshps.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.meshps.Request}
 */
proto.electrious.workers.meshps.Request.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new electrious_models_file_pb.File;
      reader.readMessage(value,electrious_models_file_pb.File.deserializeBinaryFromReader);
      msg.addImages(value);
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
proto.electrious.workers.meshps.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.meshps.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.meshps.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.meshps.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatlng();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_models_geometry_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      electrious_models_file_pb.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional electrious.models.geometry.LatLng latlng = 1;
 * @return {?proto.electrious.models.geometry.LatLng}
 */
proto.electrious.workers.meshps.Request.prototype.getLatlng = function() {
  return /** @type{?proto.electrious.models.geometry.LatLng} */ (
    jspb.Message.getWrapperField(this, electrious_models_geometry_latlng_pb.LatLng, 1));
};


/** @param {?proto.electrious.models.geometry.LatLng|undefined} value */
proto.electrious.workers.meshps.Request.prototype.setLatlng = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.meshps.Request.prototype.clearLatlng = function() {
  this.setLatlng(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.meshps.Request.prototype.hasLatlng = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated electrious.models.File images = 2;
 * @return {!Array<!proto.electrious.models.File>}
 */
proto.electrious.workers.meshps.Request.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.electrious.models.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_file_pb.File, 2));
};


/** @param {!Array<!proto.electrious.models.File>} value */
proto.electrious.workers.meshps.Request.prototype.setImagesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.electrious.models.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.File}
 */
proto.electrious.workers.meshps.Request.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.electrious.models.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.meshps.Request.prototype.clearImagesList = function() {
  this.setImagesList([]);
};


goog.object.extend(exports, proto.electrious.workers.meshps);
