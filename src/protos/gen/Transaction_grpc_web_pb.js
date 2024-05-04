/**
 * @fileoverview gRPC-Web generated client stub for Transaction
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: Transaction.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Transaction = require('./Transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Transaction.TransactionSvcClient =
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
proto.Transaction.TransactionSvcPromiseClient =
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
 *   !proto.Transaction.PostDataRequest,
 *   !proto.Transaction.TransResponse>}
 */
const methodDescriptor_TransactionSvc_PostDataToTransaction = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/PostDataToTransaction',
  grpc.web.MethodType.UNARY,
  proto.Transaction.PostDataRequest,
  proto.Transaction.TransResponse,
  /**
   * @param {!proto.Transaction.PostDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TransResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.PostDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TransResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TransResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.postDataToTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/PostDataToTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_PostDataToTransaction,
      callback);
};


/**
 * @param {!proto.Transaction.PostDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TransResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.postDataToTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/PostDataToTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_PostDataToTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.PostDataUssdRequest,
 *   !proto.Transaction.TransResponse>}
 */
const methodDescriptor_TransactionSvc_PostDataToTransactionUSSD = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/PostDataToTransactionUSSD',
  grpc.web.MethodType.UNARY,
  proto.Transaction.PostDataUssdRequest,
  proto.Transaction.TransResponse,
  /**
   * @param {!proto.Transaction.PostDataUssdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TransResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.PostDataUssdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TransResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TransResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.postDataToTransactionUSSD =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/PostDataToTransactionUSSD',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_PostDataToTransactionUSSD,
      callback);
};


/**
 * @param {!proto.Transaction.PostDataUssdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TransResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.postDataToTransactionUSSD =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/PostDataToTransactionUSSD',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_PostDataToTransactionUSSD);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.ChargesRequest,
 *   !proto.Transaction.ChargesResponse>}
 */
const methodDescriptor_TransactionSvc_GetChargesOnTransaction = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetChargesOnTransaction',
  grpc.web.MethodType.UNARY,
  proto.Transaction.ChargesRequest,
  proto.Transaction.ChargesResponse,
  /**
   * @param {!proto.Transaction.ChargesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.ChargesResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.ChargesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.ChargesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.ChargesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getChargesOnTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetChargesOnTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetChargesOnTransaction,
      callback);
};


/**
 * @param {!proto.Transaction.ChargesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.ChargesResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getChargesOnTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetChargesOnTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetChargesOnTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.UssdChargesRequest,
 *   !proto.Transaction.ChargesResponse>}
 */
const methodDescriptor_TransactionSvc_GetChargesOnTransactionUssd = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetChargesOnTransactionUssd',
  grpc.web.MethodType.UNARY,
  proto.Transaction.UssdChargesRequest,
  proto.Transaction.ChargesResponse,
  /**
   * @param {!proto.Transaction.UssdChargesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.ChargesResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.UssdChargesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.ChargesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.ChargesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getChargesOnTransactionUssd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetChargesOnTransactionUssd',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetChargesOnTransactionUssd,
      callback);
};


/**
 * @param {!proto.Transaction.UssdChargesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.ChargesResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getChargesOnTransactionUssd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetChargesOnTransactionUssd',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetChargesOnTransactionUssd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.KycRequest,
 *   !proto.Transaction.KycResponse>}
 */
const methodDescriptor_TransactionSvc_GetCustomerKYC = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetCustomerKYC',
  grpc.web.MethodType.UNARY,
  proto.Transaction.KycRequest,
  proto.Transaction.KycResponse,
  /**
   * @param {!proto.Transaction.KycRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.KycResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.KycRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.KycResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.KycResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getCustomerKYC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetCustomerKYC',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetCustomerKYC,
      callback);
};


/**
 * @param {!proto.Transaction.KycRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.KycResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getCustomerKYC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetCustomerKYC',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetCustomerKYC);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.TransactionRequest,
 *   !proto.Transaction.TransactionResponse>}
 */
const methodDescriptor_TransactionSvc_GetMemberTransactions = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetMemberTransactions',
  grpc.web.MethodType.UNARY,
  proto.Transaction.TransactionRequest,
  proto.Transaction.TransactionResponse,
  /**
   * @param {!proto.Transaction.TransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getMemberTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactions,
      callback);
};


/**
 * @param {!proto.Transaction.TransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TransactionResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getMemberTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.TransactionHistoryRequest,
 *   !proto.Transaction.TransactionResponse>}
 */
const methodDescriptor_TransactionSvc_GetMemberTransactionHistory = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetMemberTransactionHistory',
  grpc.web.MethodType.UNARY,
  proto.Transaction.TransactionHistoryRequest,
  proto.Transaction.TransactionResponse,
  /**
   * @param {!proto.Transaction.TransactionHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.TransactionHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getMemberTransactionHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactionHistory',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactionHistory,
      callback);
};


/**
 * @param {!proto.Transaction.TransactionHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TransactionResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getMemberTransactionHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactionHistory',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactionHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.TransAdminRequest,
 *   !proto.Transaction.TransactionResponse>}
 */
const methodDescriptor_TransactionSvc_GetMemberTransactionsForAdmin = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetMemberTransactionsForAdmin',
  grpc.web.MethodType.UNARY,
  proto.Transaction.TransAdminRequest,
  proto.Transaction.TransactionResponse,
  /**
   * @param {!proto.Transaction.TransAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.TransAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getMemberTransactionsForAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactionsForAdmin',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactionsForAdmin,
      callback);
};


/**
 * @param {!proto.Transaction.TransAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TransactionResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getMemberTransactionsForAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetMemberTransactionsForAdmin',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetMemberTransactionsForAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.StatusRequest,
 *   !proto.Transaction.StatusResponse>}
 */
const methodDescriptor_TransactionSvc_GetTransactionStatus = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetTransactionStatus',
  grpc.web.MethodType.UNARY,
  proto.Transaction.StatusRequest,
  proto.Transaction.StatusResponse,
  /**
   * @param {!proto.Transaction.StatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.StatusResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.StatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.StatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getTransactionStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTransactionStatus',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTransactionStatus,
      callback);
};


/**
 * @param {!proto.Transaction.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.StatusResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getTransactionStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTransactionStatus',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTransactionStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.DonatedAmountRequest,
 *   !proto.Transaction.DontaedAmountResponse>}
 */
const methodDescriptor_TransactionSvc_GetTotalAmountDonated = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetTotalAmountDonated',
  grpc.web.MethodType.UNARY,
  proto.Transaction.DonatedAmountRequest,
  proto.Transaction.DontaedAmountResponse,
  /**
   * @param {!proto.Transaction.DonatedAmountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.DontaedAmountResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.DonatedAmountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.DontaedAmountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.DontaedAmountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getTotalAmountDonated =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTotalAmountDonated',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTotalAmountDonated,
      callback);
};


/**
 * @param {!proto.Transaction.DonatedAmountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.DontaedAmountResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getTotalAmountDonated =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTotalAmountDonated',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTotalAmountDonated);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.CardTypePerTransactionRequest,
 *   !proto.Transaction.CardTypePerTransactionResponse>}
 */
const methodDescriptor_TransactionSvc_GetCardTypeDetailsPerTransactionByMemberId = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetCardTypeDetailsPerTransactionByMemberId',
  grpc.web.MethodType.UNARY,
  proto.Transaction.CardTypePerTransactionRequest,
  proto.Transaction.CardTypePerTransactionResponse,
  /**
   * @param {!proto.Transaction.CardTypePerTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.CardTypePerTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.CardTypePerTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.CardTypePerTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.CardTypePerTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getCardTypeDetailsPerTransactionByMemberId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetCardTypeDetailsPerTransactionByMemberId',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetCardTypeDetailsPerTransactionByMemberId,
      callback);
};


/**
 * @param {!proto.Transaction.CardTypePerTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.CardTypePerTransactionResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getCardTypeDetailsPerTransactionByMemberId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetCardTypeDetailsPerTransactionByMemberId',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetCardTypeDetailsPerTransactionByMemberId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Transaction.TotalTransactionDoneByAgentRequest,
 *   !proto.Transaction.TotalTransactionDoneByAgentResponse>}
 */
const methodDescriptor_TransactionSvc_GetTotalTransactionsDoneByAgent = new grpc.web.MethodDescriptor(
  '/Transaction.TransactionSvc/GetTotalTransactionsDoneByAgent',
  grpc.web.MethodType.UNARY,
  proto.Transaction.TotalTransactionDoneByAgentRequest,
  proto.Transaction.TotalTransactionDoneByAgentResponse,
  /**
   * @param {!proto.Transaction.TotalTransactionDoneByAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Transaction.TotalTransactionDoneByAgentResponse.deserializeBinary
);


/**
 * @param {!proto.Transaction.TotalTransactionDoneByAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Transaction.TotalTransactionDoneByAgentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Transaction.TotalTransactionDoneByAgentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Transaction.TransactionSvcClient.prototype.getTotalTransactionsDoneByAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTotalTransactionsDoneByAgent',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTotalTransactionsDoneByAgent,
      callback);
};


/**
 * @param {!proto.Transaction.TotalTransactionDoneByAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Transaction.TotalTransactionDoneByAgentResponse>}
 *     Promise that resolves to the response
 */
proto.Transaction.TransactionSvcPromiseClient.prototype.getTotalTransactionsDoneByAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Transaction.TransactionSvc/GetTotalTransactionsDoneByAgent',
      request,
      metadata || {},
      methodDescriptor_TransactionSvc_GetTotalTransactionsDoneByAgent);
};


module.exports = proto.Transaction;

