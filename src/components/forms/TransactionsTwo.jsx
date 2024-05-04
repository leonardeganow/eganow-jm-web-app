import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import { toast } from "react-toastify";
import arise from "../../images/cardImages/arise_105325.png";
import bronze from "../../images/cardImages/bronze_105326.png";
import freedom from "../../images/cardImages/Freedom_105328.png";
import gold from "../../images/cardImages/gold_105329.png";
import hope from "../../images/cardImages/Hope_105331.png";
import justice from "../../images/cardImages/Justice_105308.png";
import loyalty from "../../images/cardImages/Loyalty_105317.png";
import platinum from "../../images/cardImages/Platinum_105319.png";
import prestige from "../../images/cardImages/prestige_105320.png";
import silver from "../../images/cardImages/Silver_105322.png";
import standard from "../../images/cardImages/Standard_105323.png";
import starter from "../../images/cardImages/starter.png";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { IoIosRefresh } from "react-icons/io";

// MATERIAL UI FOR TABLE
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";
import { Avatar, Skeleton } from "@mui/material";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import { jsPDF } from "jspdf";

const TransactionsTwo = (props) => {
  const { getTransactions, getTotalDonations, getCardPerTransaction } =
    TransactionAPI();
  const { loginMember } = membersGRPC();
  const [showLogin, setShowLogin] = useState(true); //state to show or hide the login page
  const [isLoading, setIsLoading] = useState(false);
  const [cardName, setCardName] = useState(null);
  const [cardNo, setCardNo] = useState(false);
  const [cardType, setCardType] = useState(null); //state to manage card type
  const [transactions, setTransaction] = useState([]); //transaction data
  const { showReset, setShowReset } = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [totalDonations, setTotalDonations] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // DATE FORMATTER FUNCTION
  const formatDate = (dateString) => {
    // splitdate string
    let dateSplit = dateString?.split("-");
    return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
  };

  // Get the current date
  const currentDate = new Date();

  // Get the last month's date
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(currentDate.getMonth() - 1);

  // Format the dates as strings (you can customize the format as needed)
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  const formattedLastMonthDate = lastMonthDate.toISOString().split("T")[0];
  // console.log(formattedLastMonthDate);

  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      // memeberType: props.formHandler.getValues("role"),
      role: props.formHandler.getValues("role"),

      startDate: "", //formatDate(formattedLastMonthDate),
      endDate: "", // formatDate(formattedCurrentDate),
      memberid: props.formHandler.getValues("memberId"),
      cardTypeId: "",
    },
  });

  watch(() => setIsLoading(false));

  async function totalDonationsHandler() {
    const data = getValues();
    const newData = {
      ...data,
      memberid: props.formHandler.getValues("memberId"),
      role: props.formHandler.getValues("role"),
    };
    try {
      getCardPerTransactionHandler();

      const response = await getTotalDonations(newData);
      // console.log(response);
      if (response.status) {
        setTotalDonations(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //get carddetails per transaction handler
  async function getCardPerTransactionHandler() {
    const data = getValues();
    try {
      const response = await getCardPerTransaction(data);
      console.log(response);
      setCardType(response.cardtypeid);
    } catch (error) {
      console.error(error);
    }
  }

  // function to get all tranactions
  const onSubmitTransaction = async (start, end) => {
    const data = getValues();
    // console.log(data);
    setIsLoading(true);
    const formatedData = {
      ...data,
      // memeberType: props.formHandler.getValues("role"),
      // memberid: props.formHandler.getValues("memberId"),
      // startDate: formatDate(data?.startDate), //sending formated startDate
      // endDate: formatDate(data?.endDate), //seending formated endDate
      startDate: start, //sending formated startDate
      endDate: end, //seending formated endDate
    };
    // console.log(formatedData);
    try {
      // sending api request
      const transaction = await getTransactions(formatedData);
      // console.log(transaction);
      setIsLoading(false);
      setShowTable(true);
      setTransaction(transaction.translistList); //assigning the reponse to the state
    } catch (err) {
      if (err.message) {
        setIsLoading(false);
        toast("Network Error");
      }
      // console.log(err);
      // toast("Invalid date format");
    }
  };

  //getting transactions one month before when user logs in
  useEffect(() => {
    setValue("endDate", formatDate(formattedCurrentDate));
    setValue("startDate", formatDate(formattedLastMonthDate));
    totalDonationsHandler();
    setStartDate(formattedLastMonthDate); //setting form fields value
    setEndDate(formattedCurrentDate); //setting form fields value

    onSubmitTransaction(
      formatDate(formattedLastMonthDate),
      formatDate(formattedCurrentDate)
    );
  }, []);

  // function to search date
  function submitTransaction(startDate, endDate) {
    onSubmitTransaction(formatDate(startDate), formatDate(endDate));
  }

  // STATUS STYLINg
  function statusStyles(status) {
    switch (status) {
      case "FAILED":
        return "bg-danger text-white p-1 rounded fw-semibold";
        break;
      case "PENDING":
        return "bg-warning text-black p-1 rounded fw-semibold";
        break;
      case "SUCCESSFUL":
        return "bg-success text-white p-1 rounded fw-semibold";
        break;
      default:
        return "";
    }
  }

  //card images
  function memberCards(cardId) {
    switch (cardId) {
      case "AG007":
        return prestige;
        break;
      case "AG006":
        return platinum;
        break;
      case "AG050":
        return starter;
        break;
      case "AG009":
        return justice;
        break;
      case "AG005":
        return gold;
        break;
      case "AG004":
        return silver;
        break;
      case "AG003":
        return bronze;
        break;
      case "AG001":
        return standard;
        break;
      case "AG002":
        return loyalty;
        break;
      case "AG008":
        return freedom;
        break;
      case "AG011":
        return hope;
        break;
      case "AG010":
        return arise;
        break;

      default:
        return null;
    }
  }

  // const cardType = getValues("cardTypeId"); //store card type here
  const newTransactions = transactions.map((item, i) => {
    const formatDate = new Date(item.date).toLocaleDateString();

    return { ...item, date: formatDate };
  });

  function downloadHistory() {
    const pdf = new jsPDF();

    const title = "GGC Transaction Details Report";
    const titleWidth =
      (pdf.getStringUnitWidth(title) * pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;
    const centerX = (pdf.internal.pageSize.width - titleWidth) / 2;

    pdf.text(title, centerX, 15);

    const heading = `Customer name: ${props.formHandler.getValues("fullName")}`;
    const customerCardtype = `Card type: ${props.formHandler.getValues(
      "plan"
    )}`;
    pdf.setFontSize(12);

    pdf.text(heading, 10, 40);
    pdf.setFontSize(12);
    pdf.text(customerCardtype, 10, 47);

    const columns = [
      { header: "Date", dataKey: "date" },
      { header: "Payment Name", dataKey: "paymentname" },
      { header: "Amount(GHS)", dataKey: "amount" },
      { header: "Status", dataKey: "status" },
      { header: "Transaction ID", dataKey: "transactionid" },

      // { header: "Type", dataKey: "type" },
      // Add more columns as needed
    ];

    pdf.autoTable({
      head: [columns.map((column) => column.header)],
      body: newTransactions.map((item) =>
        columns.map((column) => {
          return item[column.dataKey];
        })
      ),
      startY: 55,
    });

    pdf.save("GGChistory.pdf");
  }

  const handleDownload = () => {
    const divToPrint = document.getElementById("divId"); // Replace 'divId' with the actual id of your div

    html2canvas(divToPrint).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      const scaleFactor = 0.5;

      const xPosition =
        (pdf.internal.pageSize.width - pdfWidth * scaleFactor) / 2;
      const yPosition =
        (pdf.internal.pageSize.height - pdfHeight * scaleFactor) / 2;
      pdf.addImage(
        imgData,
        "PNG",
        xPosition,
        yPosition,
        pdfWidth * scaleFactor,
        pdfHeight * scaleFactor
      );

      const heading = "My Good governance card";
      const fontSize = 16;
      const textWidth =
        (pdf.getStringUnitWidth(heading) * fontSize) / pdf.internal.scaleFactor;
      const textXPosition = (pdf.internal.pageSize.width - textWidth) / 2;
      const textYPosition = 15; // Adjust the Y position as needed

      pdf.setFontSize(fontSize);
      pdf.text(heading, textXPosition, textYPosition);

      pdf.save("GGC.pdf");
    });
  };

  const refreshData = () => {
    totalDonationsHandler();
    getCardPerTransactionHandler();

    onSubmitTransaction(
      formatDate(formattedLastMonthDate),
      formatDate(formattedCurrentDate)
    );
  };

  return (
    <div>
      <div className="position-relative">
        <h3 className="text-center m-0 p-0">Transactions</h3>
        <p className="text-center m-0 p-0">View your transaction</p>
        <FaWindowClose
          size={25}
          className="position-absolute end-0 top-0 text-danger"
          onClick={() => props.handleClose()}
        />

        <hr />
        <div className="px-3">
          <div className="d-flex justify-content-end">
            <button
              onClick={refreshData}
              className="btn d-flex align-items-center gap-2 btn-sm btn-danger"
            >
              {" "}
              <IoIosRefresh />
              Refresh
            </button>

            <div></div>
          </div>
          <div className="row">
            <h6 className="text-center">Donated Amount</h6>
            <h2 className="display-5  align-items-center text-success text-center">
              GH₵ {totalDonations}{" "}
              <span
                className="ml-2"
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                {/* <IoIosRefresh onClick={refreshData} /> */}
              </span>
            </h2>
            <div className="col-md-6 text-center ">
              {/* card */}
              <div
                id="divId"
                style={{
                  backgroundImage: `url(${memberCards(cardType)})`,
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  height: "150px",
                  width: "100%",
                  position: "relative",
                  borderRadius: "15px",
                }}
                className="rounded"
              >
                <p
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "35px",
                    color: "white",
                    fontSize: "13px",
                    color: `${
                      cardType === "AG050" || "AG011" || "AG006"
                        ? "white"
                        : "black"
                    }`,
                  }}
                >
                  {props.formHandler.getValues("fullName") ||
                    props.formHandler.getValues("membername")}
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "35px",
                    color: "white",
                    // letterSpacing: "1px",
                    color: `${
                      cardType === "AG050" || "AG011" || "AG006"
                        ? "white"
                        : "black"
                    }`,
                    fontSize: "14px",
                  }}
                >
                  {props.formHandler.getValues("ndcCardNo")}
                </p>
                {/* <img  src={arise} alt="" /> */}
                {/* <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={150}
                        >
                          <Avatar src="" className="w-25" />
                        </Skeleton> */}
              </div>
            </div>

            {/* search form */}
            <div className="col-md-6 align-self-end">
              <div>
                <form
                  // onSubmit={handleSubmit(onSubmitTransaction)}
                  className="mt-3"
                  // className="d-flex flex-md-row flex-column flex-wrap gap-2 my-md-3 justify-content-center py-2"
                >
                  {/* forms cards */}
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div>
                        <label htmlFor="">Start Date</label> <br />
                        <input
                          value={startDate}
                          type="date"
                          placeholder="End Date"
                          className="form-control"
                          onChange={(e) => setStartDate(e.target.value)}
                          // {...register("startDate")}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div>
                        <label htmlFor="">End Date</label> <br />
                        <input
                          value={endDate}
                          type="date"
                          placeholder="End Date"
                          className="form-control"
                          // {...register("endDate")}
                          required
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-12"
                      style={{ paddingLeft: "10px" }}
                    >
                      <button
                        // onClick={() => onSubmitTransaction()}
                        onClick={() => submitTransaction(startDate, endDate)}
                        style={{ marginTop: "20px" }}
                        type="button"
                        className="btn btn-success w-100 "
                      >
                        {isLoading ? (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        ) : (
                          // <FaSearch className="" />
                          "search"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* end of search form */}
          </div>
          <div className="row gy-2 my-3 align-items-center">
            <div className="col-12  col-md-4">
              <button
                onClick={() => {
                  props.formHandler.setValue("amount", "");
                  props.formHandler.setValue("momoname", "");
                  props.formHandler.setValue("paymentMethodId", "");
                  props.handleBack(4);
                }}
                className="btn btn-danger w-100"
              >
                Top Up
              </button>
            </div>
            <div className="col-12 col-md-4">
              <button
                onClick={handleDownload}
                className="btn btn-success w-100"
              >
                Download card
              </button>
            </div>
            <div className="col-12 col-md-4 mt-2 mt-md-0">
              <button
                onClick={downloadHistory}
                className="btn btn-success w-100"
              >
                Download to pdf
              </button>
            </div>
          </div>
          {/*  */}
          {/* SELECT START AND END DATES */}

          {/* END OF START AND END DATE */}

          {/* LISTING OUT TRANSACTIONS TABLES */}
          {showTable == false ? (
            ""
          ) : (
            <TableContainer
              component={Paper}
              className=" py-3"
              style={{
                height: "400px",
                overflow: "auto",
                backgroundColor: "#fafaff",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className="fw-bold"
                      style={{ minWidth: "110px" }}
                    >
                      Date
                    </TableCell>
                    <TableCell className="fw-bold">Name</TableCell>
                    <TableCell className="fw-bold text-center">
                      Amount
                    </TableCell>
                    <TableCell className="fw-bold">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="p-3">
                  {/* check if there are transactinos */}
                  {transactions.length > 0 ? (
                    // if there are transaction then we map through to display the rows
                    transactions.map((each, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          {new Date(each.date).toLocaleDateString("en-GB")}
                        </TableCell>
                        <TableCell>{each.membername}</TableCell>
                        <TableCell className="text-center">
                          GH {each.amount}
                        </TableCell>
                        <TableCell>
                          <span className={`${statusStyles(each.status)}`}>
                            {each.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-danger lead text-center fs-4"
                      >
                        No transactions available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsTwo;
