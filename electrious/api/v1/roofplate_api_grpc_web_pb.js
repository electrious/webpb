/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_roofplate_pb = require('../../../electrious/models/roofplate_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./roofplate_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.RoofplateAPIClient =
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
proto.electrious.api.v1.RoofplateAPIPromiseClient =
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
 *   !proto.electrious.api.v1.RoofplateUpdateAllRequest,
 *   !proto.electrious.api.v1.RoofplateUpdateAllResponse>}
 */
const methodDescriptor_RoofplateAPI_RoofplateUpdateAll = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RoofplateAPI/RoofplateUpdateAll',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.RoofplateUpdateAllRequest,
  proto.electrious.api.v1.RoofplateUpdateAllResponse,
  /**
   * @param {!proto.electrious.api.v1.RoofplateUpdateAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.RoofplateUpdateAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.RoofplateUpdateAllRequest,
 *   !proto.electrious.api.v1.RoofplateUpdateAllResponse>}
 */
const methodInfo_RoofplateAPI_RoofplateUpdateAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.RoofplateUpdateAllResponse,
  /**
   * @param {!proto.electrious.api.v1.RoofplateUpdateAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.RoofplateUpdateAllResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.RoofplateUpdateAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.RoofplateUpdateAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.RoofplateUpdateAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RoofplateAPIClient.prototype.roofplateUpdateAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/RoofplateUpdateAll',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_RoofplateUpdateAll,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.RoofplateUpdateAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.RoofplateUpdateAllResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RoofplateAPIPromiseClient.prototype.roofplateUpdateAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/RoofplateUpdateAll',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_RoofplateUpdateAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.RoofplateResetRequest,
 *   !proto.electrious.api.v1.RoofplateResetResponse>}
 */
const methodDescriptor_RoofplateAPI_RoofplateReset = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RoofplateAPI/RoofplateReset',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.RoofplateResetRequest,
  proto.electrious.api.v1.RoofplateResetResponse,
  /**
   * @param {!proto.electrious.api.v1.RoofplateResetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.RoofplateResetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.RoofplateResetRequest,
 *   !proto.electrious.api.v1.RoofplateResetResponse>}
 */
const methodInfo_RoofplateAPI_RoofplateReset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.RoofplateResetResponse,
  /**
   * @param {!proto.electrious.api.v1.RoofplateResetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.RoofplateResetResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.RoofplateResetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.RoofplateResetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.RoofplateResetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RoofplateAPIClient.prototype.roofplateReset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/RoofplateReset',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_RoofplateReset,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.RoofplateResetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.RoofplateResetResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RoofplateAPIPromiseClient.prototype.roofplateReset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/RoofplateReset',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_RoofplateReset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.ListRoofplatesByLeadIDRequest,
 *   !proto.electrious.api.v1.ListRoofplatesByLeadIDResponse>}
 */
const methodDescriptor_RoofplateAPI_ListRoofplatesByLeadID = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RoofplateAPI/ListRoofplatesByLeadID',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListRoofplatesByLeadIDRequest,
  proto.electrious.api.v1.ListRoofplatesByLeadIDResponse,
  /**
   * @param {!proto.electrious.api.v1.ListRoofplatesByLeadIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListRoofplatesByLeadIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListRoofplatesByLeadIDRequest,
 *   !proto.electrious.api.v1.ListRoofplatesByLeadIDResponse>}
 */
const methodInfo_RoofplateAPI_ListRoofplatesByLeadID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListRoofplatesByLeadIDResponse,
  /**
   * @param {!proto.electrious.api.v1.ListRoofplatesByLeadIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListRoofplatesByLeadIDResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListRoofplatesByLeadIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListRoofplatesByLeadIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListRoofplatesByLeadIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RoofplateAPIClient.prototype.listRoofplatesByLeadID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/ListRoofplatesByLeadID',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_ListRoofplatesByLeadID,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListRoofplatesByLeadIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListRoofplatesByLeadIDResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RoofplateAPIPromiseClient.prototype.listRoofplatesByLeadID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RoofplateAPI/ListRoofplatesByLeadID',
      request,
      metadata || {},
      methodDescriptor_RoofplateAPI_ListRoofplatesByLeadID);
};


module.exports = proto.electrious.api.v1;

