/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_syncmessage_pb = require('../../../electrious/models/syncmessage_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./sync_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.SyncAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.SyncAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.SubscribeRequest,
 *   !proto.electrious.api.v1.SubscribeResponse>}
 */
const methodDescriptor_SyncAPI_Subscribe = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.SyncAPI/Subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.electrious.api.v1.SubscribeRequest,
  proto.electrious.api.v1.SubscribeResponse,
  /**
   * @param {!proto.electrious.api.v1.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SubscribeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.SubscribeRequest,
 *   !proto.electrious.api.v1.SubscribeResponse>}
 */
const methodInfo_SyncAPI_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.SubscribeResponse,
  /**
   * @param {!proto.electrious.api.v1.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SubscribeResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SubscribeResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.SyncAPIClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Subscribe);
};


/**
 * @param {!proto.electrious.api.v1.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SubscribeResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.SyncAPIPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Subscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.UnsubscribeRequest,
 *   !proto.electrious.api.v1.UnsubscribeResponse>}
 */
const methodDescriptor_SyncAPI_Unsubscribe = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.SyncAPI/Unsubscribe',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.UnsubscribeRequest,
  proto.electrious.api.v1.UnsubscribeResponse,
  /**
   * @param {!proto.electrious.api.v1.UnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.UnsubscribeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.UnsubscribeRequest,
 *   !proto.electrious.api.v1.UnsubscribeResponse>}
 */
const methodInfo_SyncAPI_Unsubscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.UnsubscribeResponse,
  /**
   * @param {!proto.electrious.api.v1.UnsubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.UnsubscribeResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.UnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.UnsubscribeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.UnsubscribeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.SyncAPIClient.prototype.unsubscribe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Unsubscribe',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Unsubscribe,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.UnsubscribeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.UnsubscribeResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.SyncAPIPromiseClient.prototype.unsubscribe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Unsubscribe',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Unsubscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.PublishRequest,
 *   !proto.electrious.api.v1.PublishResponse>}
 */
const methodDescriptor_SyncAPI_Publish = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.SyncAPI/Publish',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.PublishRequest,
  proto.electrious.api.v1.PublishResponse,
  /**
   * @param {!proto.electrious.api.v1.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.PublishResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.PublishRequest,
 *   !proto.electrious.api.v1.PublishResponse>}
 */
const methodInfo_SyncAPI_Publish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.PublishResponse,
  /**
   * @param {!proto.electrious.api.v1.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.PublishResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.PublishResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.PublishResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.SyncAPIClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Publish',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Publish,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.PublishResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.SyncAPIPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.SyncAPI/Publish',
      request,
      metadata || {},
      methodDescriptor_SyncAPI_Publish);
};


module.exports = proto.electrious.api.v1;

