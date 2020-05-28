/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_racking_pb = require('../../../electrious/models/racking_pb.js')

var electrious_workers_racking_request_pb = require('../../../electrious/workers/racking/request_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./racking_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.RackingAPIClient =
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
proto.electrious.api.v1.RackingAPIPromiseClient =
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
 *   !proto.electrious.api.v1.UpdateRackingRequest,
 *   !proto.electrious.api.v1.UpdateRackingResponse>}
 */
const methodDescriptor_RackingAPI_UpdateRacking = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RackingAPI/UpdateRacking',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.UpdateRackingRequest,
  proto.electrious.api.v1.UpdateRackingResponse,
  /**
   * @param {!proto.electrious.api.v1.UpdateRackingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.UpdateRackingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.UpdateRackingRequest,
 *   !proto.electrious.api.v1.UpdateRackingResponse>}
 */
const methodInfo_RackingAPI_UpdateRacking = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.UpdateRackingResponse,
  /**
   * @param {!proto.electrious.api.v1.UpdateRackingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.UpdateRackingResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.UpdateRackingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.UpdateRackingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.UpdateRackingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RackingAPIClient.prototype.updateRacking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RackingAPI/UpdateRacking',
      request,
      metadata || {},
      methodDescriptor_RackingAPI_UpdateRacking,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.UpdateRackingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.UpdateRackingResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RackingAPIPromiseClient.prototype.updateRacking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RackingAPI/UpdateRacking',
      request,
      metadata || {},
      methodDescriptor_RackingAPI_UpdateRacking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.DoRackRequest,
 *   !proto.electrious.api.v1.DoRackResponse>}
 */
const methodDescriptor_RackingAPI_DoRack = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.RackingAPI/DoRack',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.DoRackRequest,
  proto.electrious.api.v1.DoRackResponse,
  /**
   * @param {!proto.electrious.api.v1.DoRackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DoRackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.DoRackRequest,
 *   !proto.electrious.api.v1.DoRackResponse>}
 */
const methodInfo_RackingAPI_DoRack = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.DoRackResponse,
  /**
   * @param {!proto.electrious.api.v1.DoRackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DoRackResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.DoRackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.DoRackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.DoRackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.RackingAPIClient.prototype.doRack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.RackingAPI/DoRack',
      request,
      metadata || {},
      methodDescriptor_RackingAPI_DoRack,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.DoRackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.DoRackResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.RackingAPIPromiseClient.prototype.doRack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.RackingAPI/DoRack',
      request,
      metadata || {},
      methodDescriptor_RackingAPI_DoRack);
};


module.exports = proto.electrious.api.v1;

