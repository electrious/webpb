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

var electrious_models_racking_kind_pb = require('../../../../electrious/models/racking/kind_pb.js');
goog.object.extend(proto, electrious_models_racking_kind_pb);
var electrious_models_racking_mount_pb = require('../../../../electrious/models/racking/mount_pb.js');
goog.object.extend(proto, electrious_models_racking_mount_pb);
var electrious_models_racking_rafter_pb = require('../../../../electrious/models/racking/rafter_pb.js');
goog.object.extend(proto, electrious_models_racking_rafter_pb);
var electrious_models_roofplate_panel_pb = require('../../../../electrious/models/roofplate/panel_pb.js');
goog.object.extend(proto, electrious_models_roofplate_panel_pb);
goog.exportSymbol('proto.electrious.workers.nodes.racking.Request', null, global);
goog.exportSymbol('proto.electrious.workers.nodes.racking.Request.Spacing', null, global);
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
proto.electrious.workers.nodes.racking.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.workers.nodes.racking.Request.repeatedFields_, null);
};
goog.inherits(proto.electrious.workers.nodes.racking.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.nodes.racking.Request.displayName = 'proto.electrious.workers.nodes.racking.Request';
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
proto.electrious.workers.nodes.racking.Request.Spacing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.workers.nodes.racking.Request.Spacing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.workers.nodes.racking.Request.Spacing.displayName = 'proto.electrious.workers.nodes.racking.Request.Spacing';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.workers.nodes.racking.Request.repeatedFields_ = [3];



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
proto.electrious.workers.nodes.racking.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.nodes.racking.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.nodes.racking.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.racking.Request.toObject = function(includeInstance, msg) {
  var obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spacingMap: (f = msg.getSpacingMap()) ? f.toObject(includeInstance, proto.electrious.workers.nodes.racking.Request.Spacing.toObject) : [],
    panelsList: jspb.Message.toObjectList(msg.getPanelsList(),
    electrious_models_roofplate_panel_pb.Panel.toObject, includeInstance)
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
 * @return {!proto.electrious.workers.nodes.racking.Request}
 */
proto.electrious.workers.nodes.racking.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.nodes.racking.Request;
  return proto.electrious.workers.nodes.racking.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.nodes.racking.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.nodes.racking.Request}
 */
proto.electrious.workers.nodes.racking.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.electrious.models.racking.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = msg.getSpacingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.electrious.workers.nodes.racking.Request.Spacing.deserializeBinaryFromReader, "");
         });
      break;
    case 3:
      var value = new electrious_models_roofplate_panel_pb.Panel;
      reader.readMessage(value,electrious_models_roofplate_panel_pb.Panel.deserializeBinaryFromReader);
      msg.addPanels(value);
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
proto.electrious.workers.nodes.racking.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.nodes.racking.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.nodes.racking.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.racking.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSpacingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.electrious.workers.nodes.racking.Request.Spacing.serializeBinaryToWriter);
  }
  f = message.getPanelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      electrious_models_roofplate_panel_pb.Panel.serializeBinaryToWriter
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
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.workers.nodes.racking.Request.Spacing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.workers.nodes.racking.Request.Spacing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.racking.Request.Spacing.toObject = function(includeInstance, msg) {
  var obj = {
    mount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rafter: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.electrious.workers.nodes.racking.Request.Spacing}
 */
proto.electrious.workers.nodes.racking.Request.Spacing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.workers.nodes.racking.Request.Spacing;
  return proto.electrious.workers.nodes.racking.Request.Spacing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.workers.nodes.racking.Request.Spacing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.workers.nodes.racking.Request.Spacing}
 */
proto.electrious.workers.nodes.racking.Request.Spacing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.electrious.models.racking.Mount.Spacing} */ (reader.readEnum());
      msg.setMount(value);
      break;
    case 2:
      var value = /** @type {!proto.electrious.models.racking.Rafter.Spacing} */ (reader.readEnum());
      msg.setRafter(value);
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
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.workers.nodes.racking.Request.Spacing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.workers.nodes.racking.Request.Spacing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.workers.nodes.racking.Request.Spacing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMount();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRafter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional electrious.models.racking.Mount.Spacing mount = 1;
 * @return {!proto.electrious.models.racking.Mount.Spacing}
 */
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.getMount = function() {
  return /** @type {!proto.electrious.models.racking.Mount.Spacing} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.electrious.models.racking.Mount.Spacing} value */
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.setMount = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional electrious.models.racking.Rafter.Spacing rafter = 2;
 * @return {!proto.electrious.models.racking.Rafter.Spacing}
 */
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.getRafter = function() {
  return /** @type {!proto.electrious.models.racking.Rafter.Spacing} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.electrious.models.racking.Rafter.Spacing} value */
proto.electrious.workers.nodes.racking.Request.Spacing.prototype.setRafter = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional electrious.models.racking.Kind kind = 1;
 * @return {!proto.electrious.models.racking.Kind}
 */
proto.electrious.workers.nodes.racking.Request.prototype.getKind = function() {
  return /** @type {!proto.electrious.models.racking.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.electrious.models.racking.Kind} value */
proto.electrious.workers.nodes.racking.Request.prototype.setKind = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * map<string, Spacing> spacing = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.electrious.workers.nodes.racking.Request.Spacing>}
 */
proto.electrious.workers.nodes.racking.Request.prototype.getSpacingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.electrious.workers.nodes.racking.Request.Spacing>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.electrious.workers.nodes.racking.Request.Spacing));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.electrious.workers.nodes.racking.Request.prototype.clearSpacingMap = function() {
  this.getSpacingMap().clear();
};


/**
 * repeated electrious.models.roofplate.Panel panels = 3;
 * @return {!Array<!proto.electrious.models.roofplate.Panel>}
 */
proto.electrious.workers.nodes.racking.Request.prototype.getPanelsList = function() {
  return /** @type{!Array<!proto.electrious.models.roofplate.Panel>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_roofplate_panel_pb.Panel, 3));
};


/** @param {!Array<!proto.electrious.models.roofplate.Panel>} value */
proto.electrious.workers.nodes.racking.Request.prototype.setPanelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.electrious.models.roofplate.Panel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.roofplate.Panel}
 */
proto.electrious.workers.nodes.racking.Request.prototype.addPanels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.electrious.models.roofplate.Panel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.workers.nodes.racking.Request.prototype.clearPanelsList = function() {
  this.setPanelsList([]);
};


goog.object.extend(exports, proto.electrious.workers.nodes.racking);
