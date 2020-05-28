/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1.lead.build
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_file_pb = require('../../../../../electrious/models/file_pb.js')

var electrious_uuid_pb = require('../../../../../electrious/uuid_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = {};
proto.electrious.api.v1.lead = {};
proto.electrious.api.v1.lead.build = require('./dron_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.lead.build.DronAPIClient =
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
proto.electrious.api.v1.lead.build.DronAPIPromiseClient =
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
 *   !proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest,
 *   !proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse>}
 */
const methodDescriptor_DronAPI_CreateDronImageGroup = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.build.DronAPI/CreateDronImageGroup',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest,
  proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest,
 *   !proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse>}
 */
const methodInfo_DronAPI_CreateDronImageGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.build.DronAPIClient.prototype.createDronImageGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/CreateDronImageGroup',
      request,
      metadata || {},
      methodDescriptor_DronAPI_CreateDronImageGroup,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateDronImageGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.lead.build.CreateDronImageGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.lead.build.DronAPIPromiseClient.prototype.createDronImageGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/CreateDronImageGroup',
      request,
      metadata || {},
      methodDescriptor_DronAPI_CreateDronImageGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.lead.build.UploadDronImageRequest,
 *   !proto.electrious.api.v1.lead.build.UploadDronImageResponse>}
 */
const methodDescriptor_DronAPI_UploadDronImage = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.build.DronAPI/UploadDronImage',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.lead.build.UploadDronImageRequest,
  proto.electrious.api.v1.lead.build.UploadDronImageResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.UploadDronImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.UploadDronImageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.build.UploadDronImageRequest,
 *   !proto.electrious.api.v1.lead.build.UploadDronImageResponse>}
 */
const methodInfo_DronAPI_UploadDronImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.build.UploadDronImageResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.UploadDronImageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.UploadDronImageResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.build.UploadDronImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.lead.build.UploadDronImageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.build.UploadDronImageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.build.DronAPIClient.prototype.uploadDronImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/UploadDronImage',
      request,
      metadata || {},
      methodDescriptor_DronAPI_UploadDronImage,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.lead.build.UploadDronImageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.lead.build.UploadDronImageResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.lead.build.DronAPIPromiseClient.prototype.uploadDronImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/UploadDronImage',
      request,
      metadata || {},
      methodDescriptor_DronAPI_UploadDronImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.lead.build.CreateDronBuildRequest,
 *   !proto.electrious.api.v1.lead.build.CreateDronBuildResponse>}
 */
const methodDescriptor_DronAPI_CreateDronBuild = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.lead.build.DronAPI/CreateDronBuild',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.lead.build.CreateDronBuildRequest,
  proto.electrious.api.v1.lead.build.CreateDronBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateDronBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateDronBuildResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.lead.build.CreateDronBuildRequest,
 *   !proto.electrious.api.v1.lead.build.CreateDronBuildResponse>}
 */
const methodInfo_DronAPI_CreateDronBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.lead.build.CreateDronBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.lead.build.CreateDronBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.lead.build.CreateDronBuildResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateDronBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.lead.build.CreateDronBuildResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.lead.build.CreateDronBuildResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.lead.build.DronAPIClient.prototype.createDronBuild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/CreateDronBuild',
      request,
      metadata || {},
      methodDescriptor_DronAPI_CreateDronBuild,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.lead.build.CreateDronBuildRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.lead.build.CreateDronBuildResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.lead.build.DronAPIPromiseClient.prototype.createDronBuild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.lead.build.DronAPI/CreateDronBuild',
      request,
      metadata || {},
      methodDescriptor_DronAPI_CreateDronBuild);
};


module.exports = proto.electrious.api.v1.lead.build;

