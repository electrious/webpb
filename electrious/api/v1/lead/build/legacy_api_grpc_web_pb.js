/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1.lead.build
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_uuid_pb = require('../../../../../electrious/uuid_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = {};
proto.electrious.api.v1.lead = {};
proto.electrious.api.v1.lead.build = require('./legacy_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.lead.build.LegacyAPIClient =
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
proto.electrious.api.v1.lead.build.LegacyAPIPromiseClient =
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
 *   !proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest,
 *   !proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse>}
 */
const methodDescriptor_LegacyAPI_CreateLegacyBuild = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.build.LegacyAPI/CreateLegacyBuild',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest,
  proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest,
 *   !proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse>}
 */
const methodInfo_LegacyAPI_CreateLegacyBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.build.LegacyAPIClient.prototype.createLegacyBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.lead.build.LegacyAPI/CreateLegacyBuild',
      request,
      metadata || {},
      methodDescriptor_LegacyAPI_CreateLegacyBuild,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateLegacyBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.lead.build.CreateLegacyBuildResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.lead.build.LegacyAPIPromiseClient.prototype.createLegacyBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.lead.build.LegacyAPI/CreateLegacyBuild',
      request,
      metadata || {},
      methodDescriptor_LegacyAPI_CreateLegacyBuild);
};


module.exports = proto.electrious.api.v1.lead.build;

