import { METADATA, URL } from "../../utils/constants";
import { TransactionSvcClient } from "../../protos/gen/Transaction_grpc_web_pb";
import {
  PostDataRequest,
  KycRequest,
  TransactionRequest,
  DonatedAmountRequest,
  TotalTransactionDoneByAgentRequest,
  CardTypePerTransactionRequest,
} from "../../protos/gen/Transaction_pb";

function TransactionAPI() {
  const client = new TransactionSvcClient(URL, null, null); //initalizes the client to use

  // FUNCTION TO POST A NEW TRANSACTION
  function postNewTransaction(data) {
    const request = new PostDataRequest();
    // console.log(request); //initalize request
    // console.log(request);
    // SETTING REQUEST BODY TO POST
    request.setMobileno(data.telephoneNo ? data.telephoneNo : data.email);
    request.setMemberid(data.memberId);
    request.setTranstypejmorgcc(data.transType);
    request.setTransamount(data.amount);
    request.setPaymentacctormomono(data.paymentCardNo);
    request.setPaymentaccountname(data.nameOnPaymentCard);
    request.setNetworkid(data.paymentMethodId);
    request.setNarration(data.narration);
    request.setAgentid(data.agentId ? data.agentId : null);
    request.setCvv(data.cvv);
    request.setExpirydatemonth(data.expiryDateMonth);
    request.setExpirydateyear(data.expiryDateYear);
    request.setChannel("WEB");

    return new Promise((resolve, reject) => {
      client.postDataToTransaction(request, METADATA, (err, resp) => {
        if (err) {
          reject(err);
        }
        const result = resp?.toObject();
        resolve(result);
      });
    });
  }

  //get total transactions by member
  function getTotalDonations(data) {
    const request = new DonatedAmountRequest(); //initalize request

    request.setMemberid(data.memberid);
    request.setMembertype(data.role);

    return new Promise((resolve, reject) => {
      client.getTotalAmountDonated(request, METADATA, (err, resp) => {
        if (err) {
          reject(err);
        }
        const result = resp?.toObject();
        resolve(result);
      });
    });
  }
  //get total transactions by member
  function getTotalCommission(data) {
    const request = new TotalTransactionDoneByAgentRequest(); //initalize request

    request.setAgentid(data.agentId);
    // request.setMemberid(data.memberid);
    // request.setMembertype(data.role);

    return new Promise((resolve, reject) => {
      client.getTotalTransactionsDoneByAgent(request, METADATA, (err, resp) => {
        if (err) {
          reject(err);
        }
        const result = resp?.toObject();
        resolve(result);
      });
    });
  }

  function getKyc(data) {
    const request = new KycRequest(); //initalize request
    // SETTING REQUEST BODY TO POST

    request.setMobilenumber(data.watchMomoNumber);
    request.setNetworkid(data.watchMomoId);

    return new Promise((resolve, reject) => {
      client.getCustomerKYC(request, METADATA, (err, resp) => {
        if (err) {
          reject(err);
        }
        const result = resp?.toObject();
        resolve(result);
      });
    });
  }

  // FUNCTION FOR CARD TRANSACTION
  //   function postCardTransaction(data) {
  //     // INITALIZE A REQUEST TO POST CARD DATA
  //
  //     const request = new CardDataRequest();

  //     // SETTING REQUEST BODY
  //     request.setAccountname(data.Accountname);
  //     request.setCardnumber(data.Cardnumber);
  //     request.setCvv(data.Cvv);
  //     request.setExpirydatemonth(data.Expirydate);
  //     request.setExpirydateyear(data.Expirydatyear);
  //     request.setTranstypejmorgcc(data.Jmorggc);
  //     request.setMobileno(data.Mobileno);
  //     request.setMemberid(data.Memberid);
  //     request.setTransamount(data.Transamount);
  //     request.setNarration(data.narration);
  //     request.setServiceid(data.Serviceid);
  //     request.setAgentid(data.Agentid);

  //     return new Promise((resolve, reject) => {
  //       client.postDataToTransactionCard(request, METADATA, (err, response) => {
  //         if (err) {
  //           reject(err); //reject nad return from function when error is encounted
  //         }
  //         const result = response?.toObject();
  //
  //         resolve(result);
  //       });
  //     });
  //   }

  // FUNCTION TO GET TRANSACTIONS
  function getTransactions(data) {
    const request = new TransactionRequest(); //initalize request

    request.setEnddate(data.endDate);
    request.setMemberid(data.memberid);
    request.setMembertype(data.role);
    request.setStartdate(data.startDate);

    return new Promise((resolve, reject) => {
      client.getMemberTransactions(request, METADATA, (err, resp) => {
        if (err) {
          reject(err);
        }
        const result = resp?.toObject();
        resolve(result);
      });
    });
  }

  function getCardPerTransaction(data) {
    const request = new CardTypePerTransactionRequest();
    request.setMemberid(data.memberid);
    return new Promise((resolve, reject) => {
      client.getCardTypeDetailsPerTransactionByMemberId(
        request,
        METADATA,
        (err, resp) => {
          if (err) {
            reject(err);
          }
          const result = resp?.toObject();
          resolve(result);
        }
      );
    });
  }

  return {
    postNewTransaction,
    getKyc,
    getTransactions,
    getTotalDonations,
    getTotalCommission,
    getCardPerTransaction,
  };
}

export default TransactionAPI;
