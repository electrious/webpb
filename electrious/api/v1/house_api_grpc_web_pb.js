/**
 * @fileoverview gRPC-Web generated client stub for electrious.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var electrious_models_geometry_latlng_pb = require('../../../electrious/models/geometry/latlng_pb.js')

var electrious_models_house_house_pb = require('../../../electrious/models/house/house_pb.js')

var electrious_models_house_state_state_pb = require('../../../electrious/models/house/state/state_pb.js')
const proto = {};
proto.electrious = {};
proto.electrious.api = {};
proto.electrious.api.v1 = require('./house_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.electrious.api.v1.HouseAPIClient =
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
proto.electrious.api.v1.HouseAPIPromiseClient =
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
 *   !proto.electrious.api.v1.DetectedAreaRequest,
 *   !proto.electrious.api.v1.DetectedAreaResponse>}
 */
const methodDescriptor_HouseAPI_DetectedArea = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HouseAPI/DetectedArea',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.DetectedAreaRequest,
  proto.electrious.api.v1.DetectedAreaResponse,
  /**
   * @param {!proto.electrious.api.v1.DetectedAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DetectedAreaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.DetectedAreaRequest,
 *   !proto.electrious.api.v1.DetectedAreaResponse>}
 */
const methodInfo_HouseAPI_DetectedArea = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.DetectedAreaResponse,
  /**
   * @param {!proto.electrious.api.v1.DetectedAreaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DetectedAreaResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.DetectedAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.DetectedAreaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.DetectedAreaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HouseAPIClient.prototype.detectedArea =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/DetectedArea',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_DetectedArea,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.DetectedAreaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.DetectedAreaResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HouseAPIPromiseClient.prototype.detectedArea =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/DetectedArea',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_DetectedArea);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.DetectHousesRequest,
 *   !proto.electrious.api.v1.DetectHousesResponse>}
 */
const methodDescriptor_HouseAPI_DetectHouses = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HouseAPI/DetectHouses',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.DetectHousesRequest,
  proto.electrious.api.v1.DetectHousesResponse,
  /**
   * @param {!proto.electrious.api.v1.DetectHousesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DetectHousesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.DetectHousesRequest,
 *   !proto.electrious.api.v1.DetectHousesResponse>}
 */
const methodInfo_HouseAPI_DetectHouses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.DetectHousesResponse,
  /**
   * @param {!proto.electrious.api.v1.DetectHousesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.DetectHousesResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.DetectHousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.DetectHousesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.DetectHousesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HouseAPIClient.prototype.detectHouses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/DetectHouses',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_DetectHouses,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.DetectHousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.DetectHousesResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HouseAPIPromiseClient.prototype.detectHouses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/DetectHouses',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_DetectHouses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.ListHouseStatesRequest,
 *   !proto.electrious.api.v1.ListHouseStatesResponse>}
 */
const methodDescriptor_HouseAPI_ListHouseStates = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HouseAPI/ListHouseStates',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.ListHouseStatesRequest,
  proto.electrious.api.v1.ListHouseStatesResponse,
  /**
   * @param {!proto.electrious.api.v1.ListHouseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListHouseStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.ListHouseStatesRequest,
 *   !proto.electrious.api.v1.ListHouseStatesResponse>}
 */
const methodInfo_HouseAPI_ListHouseStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.ListHouseStatesResponse,
  /**
   * @param {!proto.electrious.api.v1.ListHouseStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.ListHouseStatesResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.ListHouseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.ListHouseStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.ListHouseStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HouseAPIClient.prototype.listHouseStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/ListHouseStates',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_ListHouseStates,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.ListHouseStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.ListHouseStatesResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HouseAPIPromiseClient.prototype.listHouseStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/ListHouseStates',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_ListHouseStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.SearchHousesRequest,
 *   !proto.electrious.api.v1.SearchHousesResponse>}
 */
const methodDescriptor_HouseAPI_SearchHouses = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HouseAPI/SearchHouses',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.SearchHousesRequest,
  proto.electrious.api.v1.SearchHousesResponse,
  /**
   * @param {!proto.electrious.api.v1.SearchHousesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SearchHousesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.SearchHousesRequest,
 *   !proto.electrious.api.v1.SearchHousesResponse>}
 */
const methodInfo_HouseAPI_SearchHouses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.SearchHousesResponse,
  /**
   * @param {!proto.electrious.api.v1.SearchHousesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.SearchHousesResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.SearchHousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.SearchHousesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.SearchHousesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HouseAPIClient.prototype.searchHouses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/SearchHouses',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_SearchHouses,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.SearchHousesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.SearchHousesResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HouseAPIPromiseClient.prototype.searchHouses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/SearchHouses',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_SearchHouses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.electrious.api.v1.CreateHouseRequest,
 *   !proto.electrious.api.v1.CreateHouseResponse>}
 */
const methodDescriptor_HouseAPI_CreateHouse = new grpc.web.MethodDescriptor(
  '/electrious.api.v1.HouseAPI/CreateHouse',
  grpc.web.MethodType.UNARY,
  proto.electrious.api.v1.CreateHouseRequest,
  proto.electrious.api.v1.CreateHouseResponse,
  /**
   * @param {!proto.electrious.api.v1.CreateHouseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.CreateHouseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.electrious.api.v1.CreateHouseRequest,
 *   !proto.electrious.api.v1.CreateHouseResponse>}
 */
const methodInfo_HouseAPI_CreateHouse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.electrious.api.v1.CreateHouseResponse,
  /**
   * @param {!proto.electrious.api.v1.CreateHouseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.electrious.api.v1.CreateHouseResponse.deserializeBinary
);


/**
 * @param {!proto.electrious.api.v1.CreateHouseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.electrious.api.v1.CreateHouseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.electrious.api.v1.CreateHouseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.electrious.api.v1.HouseAPIClient.prototype.createHouse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/CreateHouse',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_CreateHouse,
      callback);
};


/**
 * @param {!proto.electrious.api.v1.CreateHouseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.electrious.api.v1.CreateHouseResponse>}
 *     A native promise that resolves to the response
 */
proto.electrious.api.v1.HouseAPIPromiseClient.prototype.createHouse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/electrious.api.v1.HouseAPI/CreateHouse',
      request,
      metadata || {},
      methodDescriptor_HouseAPI_CreateHouse);
};


module.exports = proto.electrious.api.v1;

