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

var electrious_models_file_pb = require('../../../../../electrious/models/file_pb.js');
goog.object.extend(proto, electrious_models_file_pb);
var electrious_models_geometry_latlng_pb = require('../../../../../electrious/models/geometry/latlng_pb.js');
goog.object.extend(proto, electrious_models_geometry_latlng_pb);
var electrious_models_inverter_pb = require('../../../../../electrious/models/inverter_pb.js');
goog.object.extend(proto, electrious_models_inverter_pb);
var electrious_models_panel_pb = require('../../../../../electrious/models/panel_pb.js');
goog.object.extend(proto, electrious_models_panel_pb);
var electrious_models_roofplate_pb = require('../../../../../electrious/models/roofplate_pb.js');
goog.object.extend(proto, electrious_models_roofplate_pb);
goog.exportSymbol('proto.electrious.workers.nodes.vision.preprocess.Request', null, global);
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
proto.electrious.workers.nodes.vision.preprocess.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.nodes.vision.preprocess.Request.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.nodes.vision.preprocess.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.nodes.vision.preprocess.Request.displayName = 'proto.electrious.workers.nodes.vision.preprocess.Request';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.nodes.vision.preprocess.Request.repeatedFields_ = [4,5];



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
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.nodes.vision.preprocess.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.nodes.vision.preprocess.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.vision.preprocess.Request.toObject = function(includeInstance, msg) {
  var obj = {
    latlng: (f = msg.getLatlng()) && electrious_models_geometry_latlng_pb.LatLng.toObject(includeInstance, f),
    ply: (f = msg.getPly()) && electrious_models_file_pb.File.toObject(includeInstance, f),
    panel: (f = msg.getPanel()) && electrious_models_panel_pb.Panel.toObject(includeInstance, f),
    invertersList: jspb.Message.toObjectList(msg.getInvertersList(),
    electrious_models_inverter_pb.Inverter.toObject, includeInstance),
    roofplatesList: jspb.Message.toObjectList(msg.getRoofplatesList(),
    electrious_models_roofplate_pb.RoofplateDetected.toObject, includeInstance)
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
 * @return {!proto.electrious.workers.nodes.vision.preprocess.Request}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.nodes.vision.preprocess.Request;
  return proto.electrious.workers.nodes.vision.preprocess.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.nodes.vision.preprocess.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.nodes.vision.preprocess.Request}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPly(value);
      break;
    case 3:
      var value = new electrious_models_panel_pb.Panel;
      reader.readMessage(value,electrious_models_panel_pb.Panel.deserializeBinaryFromReader);
      msg.setPanel(value);
      break;
    case 4:
      var value = new electrious_models_inverter_pb.Inverter;
      reader.readMessage(value,electrious_models_inverter_pb.Inverter.deserializeBinaryFromReader);
      msg.addInverters(value);
      break;
    case 5:
      var value = new electrious_models_roofplate_pb.RoofplateDetected;
      reader.readMessage(value,electrious_models_roofplate_pb.RoofplateDetected.deserializeBinaryFromReader);
      msg.addRoofplates(value);
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
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.nodes.vision.preprocess.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.nodes.vision.preprocess.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.vision.preprocess.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatlng();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_models_geometry_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getPly();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      electrious_models_file_pb.File.serializeBinaryToWriter
    );
  }
  f = message.getPanel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      electrious_models_panel_pb.Panel.serializeBinaryToWriter
    );
  }
  f = message.getInvertersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      electrious_models_inverter_pb.Inverter.serializeBinaryToWriter
    );
  }
  f = message.getRoofplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      electrious_models_roofplate_pb.RoofplateDetected.serializeBinaryToWriter
    );
  }
};


/**
 * optional electrious.models.geometry.LatLng latlng = 1;
 * @return {?proto.electrious.models.geometry.LatLng}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.getLatlng = function() {
  return /** @type{?proto.electrious.models.geometry.LatLng} */ (
    jspb.Message.getWrapperField(this, electrious_models_geometry_latlng_pb.LatLng, 1));
};


/** @param {?proto.electrious.models.geometry.LatLng|undefined} value */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.setLatlng = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.clearLatlng = function() {
  this.setLatlng(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.hasLatlng = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional electrious.models.File ply = 2;
 * @return {?proto.electrious.models.File}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.getPly = function() {
  return /** @type{?proto.electrious.models.File} */ (
    jspb.Message.getWrapperField(this, electrious_models_file_pb.File, 2));
};


/** @param {?proto.electrious.models.File|undefined} value */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.setPly = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.clearPly = function() {
  this.setPly(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.hasPly = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional electrious.models.Panel panel = 3;
 * @return {?proto.electrious.models.Panel}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.getPanel = function() {
  return /** @type{?proto.electrious.models.Panel} */ (
    jspb.Message.getWrapperField(this, electrious_models_panel_pb.Panel, 3));
};


/** @param {?proto.electrious.models.Panel|undefined} value */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.setPanel = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.clearPanel = function() {
  this.setPanel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.hasPanel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated electrious.models.Inverter inverters = 4;
 * @return {!Array<!proto.electrious.models.Inverter>}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.getInvertersList = function() {
  return /** @type{!Array<!proto.electrious.models.Inverter>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_inverter_pb.Inverter, 4));
};


/** @param {!Array<!proto.electrious.models.Inverter>} value */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.setInvertersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.electrious.models.Inverter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.Inverter}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.addInverters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.electrious.models.Inverter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.clearInvertersList = function() {
  this.setInvertersList([]);
};


/**
 * repeated electrious.models.RoofplateDetected roofplates = 5;
 * @return {!Array<!proto.electrious.models.RoofplateDetected>}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.getRoofplatesList = function() {
  return /** @type{!Array<!proto.electrious.models.RoofplateDetected>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_roofplate_pb.RoofplateDetected, 5));
};


/** @param {!Array<!proto.electrious.models.RoofplateDetected>} value */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.setRoofplatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.electrious.models.RoofplateDetected=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.RoofplateDetected}
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.addRoofplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.electrious.models.RoofplateDetected, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.vision.preprocess.Request.prototype.clearRoofplatesList = function() {
  this.setRoofplatesList([]);
};


goog.object.extend(exports, proto.electrious.workers.nodes.vision.preprocess);
