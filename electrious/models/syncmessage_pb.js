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

goog.exportSymbol('proto.electrious.models.SyncMessage', null, global);
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
proto.electrious.models.SyncMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.models.SyncMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.models.SyncMessage.displayName = 'proto.electrious.models.SyncMessage';
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
proto.electrious.models.SyncMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.models.SyncMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.models.SyncMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.SyncMessage.toObject = function(includeInstance, msg) {
  var obj = {
    leadId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.electrious.models.SyncMessage}
 */
proto.electrious.models.SyncMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.models.SyncMessage;
  return proto.electrious.models.SyncMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.models.SyncMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.models.SyncMessage}
 */
proto.electrious.models.SyncMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeadId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.electrious.models.SyncMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.models.SyncMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.models.SyncMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.SyncMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeadId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSenderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 lead_id = 1;
 * @return {number}
 */
proto.electrious.models.SyncMessage.prototype.getLeadId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.electrious.models.SyncMessage.prototype.setLeadId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sender_id = 2;
 * @return {string}
 */
proto.electrious.models.SyncMessage.prototype.getSenderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.electrious.models.SyncMessage.prototype.setSenderId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.electrious.models.SyncMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.electrious.models.SyncMessage.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.electrious.models);
