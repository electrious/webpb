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

var electrious_models_company_pb = require('../../electrious/models/company_pb.js');
goog.object.extend(proto, electrious_models_company_pb);
var electrious_models_user_contact_pb = require('../../electrious/models/user/contact_pb.js');
goog.object.extend(proto, electrious_models_user_contact_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.electrious.models.User', null, global);
goog.exportSymbol('proto.electrious.models.User.Role', null, global);
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
proto.electrious.models.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.electrious.models.User.repeatedFields_, null);
};
goog.inherits(proto.electrious.models.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.electrious.models.User.displayName = 'proto.electrious.models.User';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.electrious.models.User.repeatedFields_ = [11];



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
proto.electrious.models.User.prototype.toObject = function(opt_includeInstance) {
  return proto.electrious.models.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.electrious.models.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.User.toObject = function(includeInstance, msg) {
  var obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSignedAt: (f = msg.getLastSignedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    firstname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    role: jspb.Message.getFieldWithDefault(msg, 7, 0),
    creatorId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    companyId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    company: (f = msg.getCompany()) && electrious_models_company_pb.Company.toObject(includeInstance, f),
    contactsList: jspb.Message.toObjectList(msg.getContactsList(),
    electrious_models_user_contact_pb.Contact.toObject, includeInstance)
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
 * @return {!proto.electrious.models.User}
 */
proto.electrious.models.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.electrious.models.User;
  return proto.electrious.models.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.electrious.models.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.electrious.models.User}
 */
proto.electrious.models.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastSignedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 7:
      var value = /** @type {!proto.electrious.models.User.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatorId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCompanyId(value);
      break;
    case 10:
      var value = new electrious_models_company_pb.Company;
      reader.readMessage(value,electrious_models_company_pb.Company.deserializeBinaryFromReader);
      msg.setCompany(value);
      break;
    case 11:
      var value = new electrious_models_user_contact_pb.Contact;
      reader.readMessage(value,electrious_models_user_contact_pb.Contact.deserializeBinaryFromReader);
      msg.addContacts(value);
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
proto.electrious.models.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.electrious.models.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.electrious.models.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.electrious.models.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastSignedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreatorId();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getCompanyId();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getCompany();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      electrious_models_company_pb.Company.serializeBinaryToWriter
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      electrious_models_user_contact_pb.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.electrious.models.User.Role = {
  ROLE_INVALID: 0,
  ROLE_SUPER_USER: 1,
  ROLE_SALES_MANAGER: 2,
  ROLE_SALES: 3,
  ROLE_HOMEOWNER: 4
};

/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.electrious.models.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.electrious.models.User.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.electrious.models.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.electrious.models.User.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.models.User.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.models.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.electrious.models.User.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.electrious.models.User.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.models.User.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.models.User.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp last_signed_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.electrious.models.User.prototype.getLastSignedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.electrious.models.User.prototype.setLastSignedAt = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.models.User.prototype.clearLastSignedAt = function() {
  this.setLastSignedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.models.User.prototype.hasLastSignedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string firstname = 5;
 * @return {string}
 */
proto.electrious.models.User.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.electrious.models.User.prototype.setFirstname = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string lastname = 6;
 * @return {string}
 */
proto.electrious.models.User.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.electrious.models.User.prototype.setLastname = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Role role = 7;
 * @return {!proto.electrious.models.User.Role}
 */
proto.electrious.models.User.prototype.getRole = function() {
  return /** @type {!proto.electrious.models.User.Role} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.electrious.models.User.Role} value */
proto.electrious.models.User.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint64 creator_id = 8;
 * @return {number}
 */
proto.electrious.models.User.prototype.getCreatorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.electrious.models.User.prototype.setCreatorId = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 company_id = 9;
 * @return {number}
 */
proto.electrious.models.User.prototype.getCompanyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.electrious.models.User.prototype.setCompanyId = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional Company company = 10;
 * @return {?proto.electrious.models.Company}
 */
proto.electrious.models.User.prototype.getCompany = function() {
  return /** @type{?proto.electrious.models.Company} */ (
    jspb.Message.getWrapperField(this, electrious_models_company_pb.Company, 10));
};


/** @param {?proto.electrious.models.Company|undefined} value */
proto.electrious.models.User.prototype.setCompany = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.electrious.models.User.prototype.clearCompany = function() {
  this.setCompany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.electrious.models.User.prototype.hasCompany = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated user.Contact contacts = 11;
 * @return {!Array<!proto.electrious.models.user.Contact>}
 */
proto.electrious.models.User.prototype.getContactsList = function() {
  return /** @type{!Array<!proto.electrious.models.user.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, electrious_models_user_contact_pb.Contact, 11));
};


/** @param {!Array<!proto.electrious.models.user.Contact>} value */
proto.electrious.models.User.prototype.setContactsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.electrious.models.user.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.electrious.models.user.Contact}
 */
proto.electrious.models.User.prototype.addContacts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.electrious.models.user.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.electrious.models.User.prototype.clearContactsList = function() {
  this.setContactsList([]);
};


goog.object.extend(exports, proto.electrious.models);
