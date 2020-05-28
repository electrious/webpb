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

var electrious_models_address_pb = require('../../../../electrious/models/address_pb.js');
goog.object.extend(proto, electrious_models_address_pb);
var electrious_models_lead_pb = require('../../../../electrious/models/lead_pb.js');
goog.object.extend(proto, electrious_models_lead_pb);
var electrious_models_panel_pb = require('../../../../electrious/models/panel_pb.js');
goog.object.extend(proto, electrious_models_panel_pb);
var electrious_models_racking_pb = require('../../../../electrious/models/racking_pb.js');
goog.object.extend(proto, electrious_models_racking_pb);
var electrious_models_roofplate_pb = require('../../../../electrious/models/roofplate_pb.js');
goog.object.extend(proto, electrious_models_roofplate_pb);
var electrious_models_roofplate_panel_pb = require('../../../../electrious/models/roofplate/panel_pb.js');
goog.object.extend(proto, electrious_models_roofplate_panel_pb);
var electrious_models_user_pb = require('../../../../electrious/models/user_pb.js');
goog.object.extend(proto, electrious_models_user_pb);
goog.exportSymbol('proto.electrious.workers.nodes.planset.Request', null, global);
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
proto.electrious.workers.nodes.planset.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.nodes.planset.Request.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.nodes.planset.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.nodes.planset.Request.displayName = 'proto.electrious.workers.nodes.planset.Request';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.nodes.planset.Request.repeatedFields_ = [3,4,5];



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
proto.electrious.workers.nodes.planset.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.nodes.planset.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.nodes.planset.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.planset.Request.toObject = function(includeInstance, msg) {
  var obj = {
    lead: (f = msg.getLead()) && electrious_models_lead_pb.Lead.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && electrious_models_address_pb.Address.toObject(includeInstance, f),
    homeownersList: jspb.Message.toObjectList(msg.getHomeownersList(),
    electrious_models_user_pb.User.toObject, includeInstance),
    roofplatesList: jspb.Message.toObjectList(msg.getRoofplatesList(),
    electrious_models_roofplate_pb.Roofplate.toObject, includeInstance),
    panelsList: jspb.Message.toObjectList(msg.getPanelsList(),
    electrious_models_roofplate_panel_pb.Panel.toObject, includeInstance),
    racking: (f = msg.getRacking()) && electrious_models_racking_pb.Racking.toObject(includeInstance, f),
    panel: (f = msg.getPanel()) && electrious_models_panel_pb.Panel.toObject(includeInstance, f)
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
 * @return {!proto.electrious.workers.nodes.planset.Request}
 */
proto.electrious.workers.nodes.planset.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.nodes.planset.Request;
  return proto.electrious.workers.nodes.planset.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.nodes.planset.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.nodes.planset.Request}
 */
proto.electrious.workers.nodes.planset.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new electrious_models_lead_pb.Lead;
      reader.readMessage(value,electrious_models_lead_pb.Lead.deserializeBinaryFromReader);
      msg.setLead(value);
      break;
    case 2:
      var value = new electrious_models_address_pb.Address;
      reader.readMessage(value,electrious_models_address_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 3:
      var value = new electrious_models_user_pb.User;
      reader.readMessage(value,electrious_models_user_pb.User.deserializeBinaryFromReader);
      msg.addHomeowners(value);
      break;
    case 4:
      var value = new electrious_models_roofplate_pb.Roofplate;
      reader.readMessage(value,electrious_models_roofplate_pb.Roofplate.deserializeBinaryFromReader);
      msg.addRoofplates(value);
      break;
    case 5:
      var value = new electrious_models_roofplate_panel_pb.Panel;
      reader.readMessage(value,electrious_models_roofplate_panel_pb.Panel.deserializeBinaryFromReader);
      msg.addPanels(value);
      break;
    case 6:
      var value = new electrious_models_racking_pb.Racking;
      reader.readMessage(value,electrious_models_racking_pb.Racking.deserializeBinaryFromReader);
      msg.setRacking(value);
      break;
    case 7:
      var value = new electrious_models_panel_pb.Panel;
      reader.readMessage(value,electrious_models_panel_pb.Panel.deserializeBinaryFromReader);
      msg.setPanel(value);
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
proto.electrious.workers.nodes.planset.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.nodes.planset.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.nodes.planset.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.planset.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_models_lead_pb.Lead.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      electrious_models_address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getHomeownersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      electrious_models_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getRoofplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      electrious_models_roofplate_pb.Roofplate.serializeBinaryToWriter
    );
  }
  f = message.getPanelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      electrious_models_roofplate_panel_pb.Panel.serializeBinaryToWriter
    );
  }
  f = message.getRacking();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      electrious_models_racking_pb.Racking.serializeBinaryToWriter
    );
  }
  f = message.getPanel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      electrious_models_panel_pb.Panel.serializeBinaryToWriter
    );
  }
};


/**
 * optional electrious.models.Lead lead = 1;
 * @return {?proto.electrious.models.Lead}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getLead = function() {
  return /** @type{?proto.electrious.models.Lead} */ (
    jspb.Message.getWrapperField(this, electrious_models_lead_pb.Lead, 1));
};


/** @param {?proto.electrious.models.Lead|undefined} value */
proto.electrious.workers.nodes.planset.Request.prototype.setLead = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearLead = function() {
  this.setLead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.planset.Request.prototype.hasLead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional electrious.models.Address address = 2;
 * @return {?proto.electrious.models.Address}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getAddress = function() {
  return /** @type{?proto.electrious.models.Address} */ (
    jspb.Message.getWrapperField(this, electrious_models_address_pb.Address, 2));
};


/** @param {?proto.electrious.models.Address|undefined} value */
proto.electrious.workers.nodes.planset.Request.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.planset.Request.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated electrious.models.User homeowners = 3;
 * @return {!Array<!proto.electrious.models.User>}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getHomeownersList = function() {
  return /** @type{!Array<!proto.electrious.models.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_user_pb.User, 3));
};


/** @param {!Array<!proto.electrious.models.User>} value */
proto.electrious.workers.nodes.planset.Request.prototype.setHomeownersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.electrious.models.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.User}
 */
proto.electrious.workers.nodes.planset.Request.prototype.addHomeowners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.electrious.models.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearHomeownersList = function() {
  this.setHomeownersList([]);
};


/**
 * repeated electrious.models.Roofplate roofplates = 4;
 * @return {!Array<!proto.electrious.models.Roofplate>}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getRoofplatesList = function() {
  return /** @type{!Array<!proto.electrious.models.Roofplate>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_roofplate_pb.Roofplate, 4));
};


/** @param {!Array<!proto.electrious.models.Roofplate>} value */
proto.electrious.workers.nodes.planset.Request.prototype.setRoofplatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.electrious.models.Roofplate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.Roofplate}
 */
proto.electrious.workers.nodes.planset.Request.prototype.addRoofplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.electrious.models.Roofplate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearRoofplatesList = function() {
  this.setRoofplatesList([]);
};


/**
 * repeated electrious.models.roofplate.Panel panels = 5;
 * @return {!Array<!proto.electrious.models.roofplate.Panel>}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getPanelsList = function() {
  return /** @type{!Array<!proto.electrious.models.roofplate.Panel>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_roofplate_panel_pb.Panel, 5));
};


/** @param {!Array<!proto.electrious.models.roofplate.Panel>} value */
proto.electrious.workers.nodes.planset.Request.prototype.setPanelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.electrious.models.roofplate.Panel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.roofplate.Panel}
 */
proto.electrious.workers.nodes.planset.Request.prototype.addPanels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.electrious.models.roofplate.Panel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearPanelsList = function() {
  this.setPanelsList([]);
};


/**
 * optional electrious.models.Racking racking = 6;
 * @return {?proto.electrious.models.Racking}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getRacking = function() {
  return /** @type{?proto.electrious.models.Racking} */ (
    jspb.Message.getWrapperField(this, electrious_models_racking_pb.Racking, 6));
};


/** @param {?proto.electrious.models.Racking|undefined} value */
proto.electrious.workers.nodes.planset.Request.prototype.setRacking = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearRacking = function() {
  this.setRacking(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.planset.Request.prototype.hasRacking = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional electrious.models.Panel panel = 7;
 * @return {?proto.electrious.models.Panel}
 */
proto.electrious.workers.nodes.planset.Request.prototype.getPanel = function() {
  return /** @type{?proto.electrious.models.Panel} */ (
    jspb.Message.getWrapperField(this, electrious_models_panel_pb.Panel, 7));
};


/** @param {?proto.electrious.models.Panel|undefined} value */
proto.electrious.workers.nodes.planset.Request.prototype.setPanel = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.workers.nodes.planset.Request.prototype.clearPanel = function() {
  this.setPanel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.workers.nodes.planset.Request.prototype.hasPanel = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.electrious.workers.nodes.planset);
