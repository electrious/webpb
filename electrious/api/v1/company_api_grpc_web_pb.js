/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_company_pb = require('../../../electrious/models/company_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./company_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.CompanyAPIClient =
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
proto.electrious.api.v1.CompanyAPIPromiseClient =
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
 *   !proto.electrious.api.v1.ListCompaniesRequest,
 *   !proto.electrious.api.v1.ListCompaniesResponse>}
 */
const methodDescriptor_CompanyAPI_ListCompanies = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.CompanyAPI/ListCompanies',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListCompaniesRequest,
  proto.electrious.api.v1.ListCompaniesResponse,
  /**
   * @param {!proto.electrious.api.v1.ListCompaniesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListCompaniesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListCompaniesRequest,
 *   !proto.electrious.api.v1.ListCompaniesResponse>}
 */
const methodInfo_CompanyAPI_ListCompanies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListCompaniesResponse,
  /**
   * @param {!proto.electrious.api.v1.ListCompaniesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListCompaniesResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListCompaniesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListCompaniesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListCompaniesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.CompanyAPIClient.prototype.listCompanies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.CompanyAPI/ListCompanies',
      request,
      metadata || {},
      methodDescriptor_CompanyAPI_ListCompanies,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListCompaniesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListCompaniesResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.CompanyAPIPromiseClient.prototype.listCompanies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.CompanyAPI/ListCompanies',
      request,
      metadata || {},
      methodDescriptor_CompanyAPI_ListCompanies);
};


module.exports = proto.electrious.api.v1;

