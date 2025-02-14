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

var electrious_uuid_pb = require('../../../../../electrious/uuid_pb.js');
goog.object.extend(proto, electrious_uuid_pb);
goog.exportSymbol('proto.electrious.api.v1.lead.build.CreateEarthBuildRequest', null, global);
goog.exportSymbol('proto.electrious.api.v1.lead.build.CreateEarthBuildResponse', null, global);
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
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.api.v1.lead.build.CreateEarthBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.displayName = 'proto.electrious.api.v1.lead.build.CreateEarthBuildRequest';
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
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.electrious.api.v1.lead.build.CreateEarthBuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.displayName = 'proto.electrious.api.v1.lead.build.CreateEarthBuildResponse';
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
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.toObject = function(includeInstance, msg) {
  var obj = {
    houseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.electrious.api.v1.lead.build.CreateEarthBuildRequest}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.api.v1.lead.build.CreateEarthBuildRequest;
  return proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.api.v1.lead.build.CreateEarthBuildRequest}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHouseId(value);
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
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHouseId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 house_id = 1;
 * @return {number}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.prototype.getHouseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.electrious.api.v1.lead.build.CreateEarthBuildRequest.prototype.setHouseId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
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
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.toObject = function(includeInstance, msg) {
  var obj = {
    uuid: (f = msg.getUuid()) && electrious_uuid_pb.UUID.toObject(includeInstance, f)
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
 * @return {!proto.electrious.api.v1.lead.build.CreateEarthBuildResponse}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.api.v1.lead.build.CreateEarthBuildResponse;
  return proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.api.v1.lead.build.CreateEarthBuildResponse}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new electrious_uuid_pb.UUID;
      reader.readMessage(value,electrious_uuid_pb.UUID.deserializeBinaryFromReader);
      msg.setUuid(value);
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
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.api.v1.lead.build.CreateEarthBuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      electrious_uuid_pb.UUID.serializeBinaryToWriter
    );
  }
};


/**
 * optional electrious.UUID uuid = 1;
 * @return {?proto.electrious.UUID}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.getUuid = function() {
  return /** @type{?proto.electrious.UUID} */ (
    jspb.Message.getWrapperField(this, electrious_uuid_pb.UUID, 1));
};


/** @param {?proto.electrious.UUID|undefined} value */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.setUuid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.clearUuid = function() {
  this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.api.v1.lead.build.CreateEarthBuildResponse.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.electrious.api.v1.lead.build);
