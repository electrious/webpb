/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_geometry_latlng_pb = require('../../../electrious/models/geometry/latlng_pb.js')

var electrious_models_house_cluster_cluster_pb = require('../../../electrious/models/house/cluster/cluster_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./cluster_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.ClusterAPIClient =
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
proto.electrious.api.v1.ClusterAPIPromiseClient =
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
 *   !proto.electrious.api.v1.ListClustersRequest,
 *   !proto.electrious.api.v1.ListClustersResponse>}
 */
const methodDescriptor_ClusterAPI_ListClusters = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.ClusterAPI/ListClusters',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListClustersRequest,
  proto.electrious.api.v1.ListClustersResponse,
  /**
   * @param {!proto.electrious.api.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListClustersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListClustersRequest,
 *   !proto.electrious.api.v1.ListClustersResponse>}
 */
const methodInfo_ClusterAPI_ListClusters = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListClustersResponse,
  /**
   * @param {!proto.electrious.api.v1.ListClustersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListClustersResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListClustersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListClustersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.ClusterAPIClient.prototype.listClusters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.ClusterAPI/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterAPI_ListClusters,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListClustersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListClustersResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.ClusterAPIPromiseClient.prototype.listClusters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.ClusterAPI/ListClusters',
      request,
      metadata || {},
      methodDescriptor_ClusterAPI_ListClusters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.GetClusterExpRequest,
 *   !proto.electrious.api.v1.GetClusterExpResponse>}
 */
const methodDescriptor_ClusterAPI_GetClusterExp = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.ClusterAPI/GetClusterExp',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.GetClusterExpRequest,
  proto.electrious.api.v1.GetClusterExpResponse,
  /**
   * @param {!proto.electrious.api.v1.GetClusterExpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.GetClusterExpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.GetClusterExpRequest,
 *   !proto.electrious.api.v1.GetClusterExpResponse>}
 */
const methodInfo_ClusterAPI_GetClusterExp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.GetClusterExpResponse,
  /**
   * @param {!proto.electrious.api.v1.GetClusterExpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.GetClusterExpResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.GetClusterExpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.GetClusterExpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.GetClusterExpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.ClusterAPIClient.prototype.getClusterExp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.ClusterAPI/GetClusterExp',
      request,
      metadata || {},
      methodDescriptor_ClusterAPI_GetClusterExp,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.GetClusterExpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.GetClusterExpResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.ClusterAPIPromiseClient.prototype.getClusterExp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.ClusterAPI/GetClusterExp',
      request,
      metadata || {},
      methodDescriptor_ClusterAPI_GetClusterExp);
};


module.exports = proto.electrious.api.v1;

