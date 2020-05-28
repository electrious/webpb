/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./root_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.RootAPIClient =
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
proto.electrious.api.v1.RootAPIPromiseClient =
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
 *   !proto.electrious.api.v1.VersionRequest,
 *   !proto.electrious.api.v1.VersionResponse>}
 */
const methodDescriptor_RootAPI_Version = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RootAPI/Version',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.VersionRequest,
  proto.electrious.api.v1.VersionResponse,
  /**
   * @param {!proto.electrious.api.v1.VersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.VersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.VersionRequest,
 *   !proto.electrious.api.v1.VersionResponse>}
 */
const methodInfo_RootAPI_Version = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.VersionResponse,
  /**
   * @param {!proto.electrious.api.v1.VersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.VersionResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.VersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.VersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.VersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RootAPIClient.prototype.version =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RootAPI/Version',
      request,
      metadata || {},
      methodDescriptor_RootAPI_Version,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.VersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.VersionResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RootAPIPromiseClient.prototype.version =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RootAPI/Version',
      request,
      metadata || {},
      methodDescriptor_RootAPI_Version);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.EchoErrorRequest,
 *   !proto.electrious.api.v1.EchoErrorResponse>}
 */
const methodDescriptor_RootAPI_EchoError = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RootAPI/EchoError',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.EchoErrorRequest,
  proto.electrious.api.v1.EchoErrorResponse,
  /**
   * @param {!proto.electrious.api.v1.EchoErrorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.EchoErrorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.EchoErrorRequest,
 *   !proto.electrious.api.v1.EchoErrorResponse>}
 */
const methodInfo_RootAPI_EchoError = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.EchoErrorResponse,
  /**
   * @param {!proto.electrious.api.v1.EchoErrorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.EchoErrorResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.EchoErrorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.EchoErrorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.EchoErrorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RootAPIClient.prototype.echoError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RootAPI/EchoError',
      request,
      metadata || {},
      methodDescriptor_RootAPI_EchoError,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.EchoErrorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.EchoErrorResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RootAPIPromiseClient.prototype.echoError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RootAPI/EchoError',
      request,
      metadata || {},
      methodDescriptor_RootAPI_EchoError);
};


module.exports = proto.electrious.api.v1;

