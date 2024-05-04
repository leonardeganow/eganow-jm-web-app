/**
 * @fileoverview gRPC-Web generated client stub for CardType
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: CardType.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.CardType = require('./CardType_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CardType.CardTypeSvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.CardType.CardTypeSvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CardType.CardTypeRequest,
 *   !proto.CardType.CardTypeResponse>}
 */
const methodDescriptor_CardTypeSvc_CreateCardType = new grpc.web.MethodDescriptor(
  '/CardType.CardTypeSvc/CreateCardType',
  grpc.web.MethodType.UNARY,
  proto.CardType.CardTypeRequest,
  proto.CardType.CardTypeResponse,
  /**
   * @param {!proto.CardType.CardTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CardType.CardTypeResponse.deserializeBinary
);


/**
 * @param {!proto.CardType.CardTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CardType.CardTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CardType.CardTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CardType.CardTypeSvcClient.prototype.createCardType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CardType.CardTypeSvc/CreateCardType',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_CreateCardType,
      callback);
};


/**
 * @param {!proto.CardType.CardTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CardType.CardTypeResponse>}
 *     Promise that resolves to the response
 */
proto.CardType.CardTypeSvcPromiseClient.prototype.createCardType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CardType.CardTypeSvc/CreateCardType',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_CreateCardType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CardType.CardTypeRequest,
 *   !proto.CardType.CardTypeResponse>}
 */
const methodDescriptor_CardTypeSvc_UpdateCardType = new grpc.web.MethodDescriptor(
  '/CardType.CardTypeSvc/UpdateCardType',
  grpc.web.MethodType.UNARY,
  proto.CardType.CardTypeRequest,
  proto.CardType.CardTypeResponse,
  /**
   * @param {!proto.CardType.CardTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CardType.CardTypeResponse.deserializeBinary
);


/**
 * @param {!proto.CardType.CardTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CardType.CardTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CardType.CardTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CardType.CardTypeSvcClient.prototype.updateCardType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CardType.CardTypeSvc/UpdateCardType',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_UpdateCardType,
      callback);
};


/**
 * @param {!proto.CardType.CardTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CardType.CardTypeResponse>}
 *     Promise that resolves to the response
 */
proto.CardType.CardTypeSvcPromiseClient.prototype.updateCardType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CardType.CardTypeSvc/UpdateCardType',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_UpdateCardType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CardType.CardEmptyRequest,
 *   !proto.CardType.CardListResponse>}
 */
const methodDescriptor_CardTypeSvc_GetAllCardTypes = new grpc.web.MethodDescriptor(
  '/CardType.CardTypeSvc/GetAllCardTypes',
  grpc.web.MethodType.UNARY,
  proto.CardType.CardEmptyRequest,
  proto.CardType.CardListResponse,
  /**
   * @param {!proto.CardType.CardEmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CardType.CardListResponse.deserializeBinary
);


/**
 * @param {!proto.CardType.CardEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CardType.CardListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CardType.CardListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CardType.CardTypeSvcClient.prototype.getAllCardTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CardType.CardTypeSvc/GetAllCardTypes',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_GetAllCardTypes,
      callback);
};


/**
 * @param {!proto.CardType.CardEmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CardType.CardListResponse>}
 *     Promise that resolves to the response
 */
proto.CardType.CardTypeSvcPromiseClient.prototype.getAllCardTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CardType.CardTypeSvc/GetAllCardTypes',
      request,
      metadata || {},
      methodDescriptor_CardTypeSvc_GetAllCardTypes);
};


module.exports = proto.CardType;

