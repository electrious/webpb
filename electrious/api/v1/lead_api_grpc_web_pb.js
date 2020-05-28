/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_lead_pb = require('../../../electrious/models/lead_pb.js')

var electrious_models_lead_build_pb = require('../../../electrious/models/lead/build_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./lead_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.LeadAPIClient =
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
proto.electrious.api.v1.LeadAPIPromiseClient =
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
 *   !proto.electrious.api.v1.CreateLeadRequest,
 *   !proto.electrious.api.v1.CreateLeadResponse>}
 */
const methodDescriptor_LeadAPI_CreateLead = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.LeadAPI/CreateLead',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.CreateLeadRequest,
  proto.electrious.api.v1.CreateLeadResponse,
  /**
   * @param {!proto.electrious.api.v1.CreateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.CreateLeadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.CreateLeadRequest,
 *   !proto.electrious.api.v1.CreateLeadResponse>}
 */
const methodInfo_LeadAPI_CreateLead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.CreateLeadResponse,
  /**
   * @param {!proto.electrious.api.v1.CreateLeadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.CreateLeadResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.CreateLeadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.CreateLeadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIClient.prototype.createLead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/CreateLead',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_CreateLead,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.CreateLeadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.CreateLeadResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.LeadAPIPromiseClient.prototype.createLead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/CreateLead',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_CreateLead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.SubscribeLeadBuildRequest,
 *   !proto.electrious.api.v1.SubscribeLeadBuildResponse>}
 */
const methodDescriptor_LeadAPI_SubscribeLeadBuild = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.LeadAPI/SubscribeLeadBuild',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.electrious.api.v1.SubscribeLeadBuildRequest,
  proto.electrious.api.v1.SubscribeLeadBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.SubscribeLeadBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SubscribeLeadBuildResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.SubscribeLeadBuildRequest,
 *   !proto.electrious.api.v1.SubscribeLeadBuildResponse>}
 */
const methodInfo_LeadAPI_SubscribeLeadBuild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.SubscribeLeadBuildResponse,
  /**
   * @param {!proto.electrious.api.v1.SubscribeLeadBuildRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SubscribeLeadBuildResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.SubscribeLeadBuildRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SubscribeLeadBuildResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIClient.prototype.subscribeLeadBuild =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.LeadAPI/SubscribeLeadBuild',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_SubscribeLeadBuild);
};


/**
 * @param {!proto.electrious.api.v1.SubscribeLeadBuildRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SubscribeLeadBuildResponse>}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIPromiseClient.prototype.subscribeLeadBuild =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/electrious.api.v1.LeadAPI/SubscribeLeadBuild',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_SubscribeLeadBuild);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.DeleteByHouseIDRequest,
 *   !proto.electrious.api.v1.DeleteByHouseIDResponse>}
 */
const methodDescriptor_LeadAPI_DeleteByHouseID = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.LeadAPI/DeleteByHouseID',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.DeleteByHouseIDRequest,
  proto.electrious.api.v1.DeleteByHouseIDResponse,
  /**
   * @param {!proto.electrious.api.v1.DeleteByHouseIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DeleteByHouseIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.DeleteByHouseIDRequest,
 *   !proto.electrious.api.v1.DeleteByHouseIDResponse>}
 */
const methodInfo_LeadAPI_DeleteByHouseID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.DeleteByHouseIDResponse,
  /**
   * @param {!proto.electrious.api.v1.DeleteByHouseIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DeleteByHouseIDResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.DeleteByHouseIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.DeleteByHouseIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.DeleteByHouseIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIClient.prototype.deleteByHouseID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/DeleteByHouseID',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_DeleteByHouseID,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.DeleteByHouseIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.DeleteByHouseIDResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.LeadAPIPromiseClient.prototype.deleteByHouseID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/DeleteByHouseID',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_DeleteByHouseID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.ListLeadsByHouseIDRequest,
 *   !proto.electrious.api.v1.ListLeadsByHouseIDResponse>}
 */
const methodDescriptor_LeadAPI_ListLeadsByHouseID = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.LeadAPI/ListLeadsByHouseID',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListLeadsByHouseIDRequest,
  proto.electrious.api.v1.ListLeadsByHouseIDResponse,
  /**
   * @param {!proto.electrious.api.v1.ListLeadsByHouseIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListLeadsByHouseIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListLeadsByHouseIDRequest,
 *   !proto.electrious.api.v1.ListLeadsByHouseIDResponse>}
 */
const methodInfo_LeadAPI_ListLeadsByHouseID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListLeadsByHouseIDResponse,
  /**
   * @param {!proto.electrious.api.v1.ListLeadsByHouseIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListLeadsByHouseIDResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListLeadsByHouseIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListLeadsByHouseIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListLeadsByHouseIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIClient.prototype.listLeadsByHouseID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/ListLeadsByHouseID',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_ListLeadsByHouseID,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListLeadsByHouseIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListLeadsByHouseIDResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.LeadAPIPromiseClient.prototype.listLeadsByHouseID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/ListLeadsByHouseID',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_ListLeadsByHouseID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.ListLeadsByAddressRequest,
 *   !proto.electrious.api.v1.ListLeadsByAddressResponse>}
 */
const methodDescriptor_LeadAPI_ListLeadsByAddress = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.LeadAPI/ListLeadsByAddress',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListLeadsByAddressRequest,
  proto.electrious.api.v1.ListLeadsByAddressResponse,
  /**
   * @param {!proto.electrious.api.v1.ListLeadsByAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListLeadsByAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListLeadsByAddressRequest,
 *   !proto.electrious.api.v1.ListLeadsByAddressResponse>}
 */
const methodInfo_LeadAPI_ListLeadsByAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListLeadsByAddressResponse,
  /**
   * @param {!proto.electrious.api.v1.ListLeadsByAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListLeadsByAddressResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListLeadsByAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListLeadsByAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListLeadsByAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.LeadAPIClient.prototype.listLeadsByAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/ListLeadsByAddress',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_ListLeadsByAddress,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListLeadsByAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListLeadsByAddressResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.LeadAPIPromiseClient.prototype.listLeadsByAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.LeadAPI/ListLeadsByAddress',
      request,
      metadata || {},
      methodDescriptor_LeadAPI_ListLeadsByAddress);
};


module.exports = proto.electrious.api.v1;

