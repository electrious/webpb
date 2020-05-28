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
proto.electrious.api.v1 = require('./hardware_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.HardwareAPIClient =
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
proto.electrious.api.v1.HardwareAPIPromiseClient =
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
 *   !proto.electrious.api.v1.SetBatteryCountRequest,
 *   !proto.electrious.api.v1.SetBatteryCountResponse>}
 */
const methodDescriptor_HardwareAPI_SetBatteryCount = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HardwareAPI/SetBatteryCount',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.SetBatteryCountRequest,
  proto.electrious.api.v1.SetBatteryCountResponse,
  /**
   * @param {!proto.electrious.api.v1.SetBatteryCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SetBatteryCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.SetBatteryCountRequest,
 *   !proto.electrious.api.v1.SetBatteryCountResponse>}
 */
const methodInfo_HardwareAPI_SetBatteryCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.SetBatteryCountResponse,
  /**
   * @param {!proto.electrious.api.v1.SetBatteryCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SetBatteryCountResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.SetBatteryCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.SetBatteryCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SetBatteryCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HardwareAPIClient.prototype.setBatteryCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HardwareAPI/SetBatteryCount',
      request,
      metadata || {},
      methodDescriptor_HardwareAPI_SetBatteryCount,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.SetBatteryCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.SetBatteryCountResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HardwareAPIPromiseClient.prototype.setBatteryCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HardwareAPI/SetBatteryCount',
      request,
      metadata || {},
      methodDescriptor_HardwareAPI_SetBatteryCount);
};


module.exports = proto.electrious.api.v1;

