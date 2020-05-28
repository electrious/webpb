/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1.lead
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_lead_build_pb = require('../../../../electrious/models/lead/build_pb.js')

var electrious_uuid_pb = require('../../../../electrious/uuid_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = {};
proto.electrious.api.v1.lead = require('./build_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.lead.BuildAPIClient =
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
proto.electrious.api.v1.lead.BuildAPIPromiseClient =
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
 *   !proto.electrious.api.v1.lead.GetBuildRequest,
 *   !proto.electrious.api.v1.lead.GetBuildResponse>}
 */
const methodDescriptor_BuildAPI_GetBuild = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.BuildAPI/GetBuild',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.lead.GetBuildRequest,
  proto.electrious.api.v1.lead.GetBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.GetBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.GetBuildResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.GetBuildRequest,
 *   !proto.electrious.api.v1.lead.GetBuildResponse>}
 */
const methodInfo_BuildAPI_GetBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.GetBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.GetBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.GetBuildResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.GetBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.lead.GetBuildResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.GetBuildResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.BuildAPIClient.prototype.getBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.lead.BuildAPI/GetBuild',
      request,
      metadata || {},
      methodDescriptor_BuildAPI_GetBuild,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.lead.GetBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.lead.GetBuildResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.lead.BuildAPIPromiseClient.prototype.getBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.lead.BuildAPI/GetBuild',
      request,
      metadata || {},
      methodDescriptor_BuildAPI_GetBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.lead.SubscribeBuildRequest,
 *   !proto.electrious.api.v1.lead.SubscribeBuildResponse>}
 */
const methodDescriptor_BuildAPI_SubscribeBuild = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.BuildAPI/SubscribeBuild',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.electrious.api.v1.lead.SubscribeBuildRequest,
  proto.electrious.api.v1.lead.SubscribeBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.SubscribeBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.SubscribeBuildResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.SubscribeBuildRequest,
 *   !proto.electrious.api.v1.lead.SubscribeBuildResponse>}
 */
const methodInfo_BuildAPI_SubscribeBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.SubscribeBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.SubscribeBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.SubscribeBuildResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.SubscribeBuildRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.SubscribeBuildResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.BuildAPIClient.prototype.subscribeBuild =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.lead.BuildAPI/SubscribeBuild',
      request,
      metadata || {},
      methodDescriptor_BuildAPI_SubscribeBuild);
};


/**
 * @param {!proto.electrious.api.v1.lead.SubscribeBuildRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.SubscribeBuildResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.BuildAPIPromiseClient.prototype.subscribeBuild =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.lead.BuildAPI/SubscribeBuild',
      request,
      metadata || {},
      methodDescriptor_BuildAPI_SubscribeBuild);
};


module.exports = proto.electrious.api.v1.lead;

