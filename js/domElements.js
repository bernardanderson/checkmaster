"use strict"

var Checkserver = (() => {

// This is the list of elements to be built.  They should be in the form:
//  key: ["Title of Container", "ID", "size in the form "left: #unit; top: #unit;", "Special Text Inside container", "Special Class"]
  var elementParams = { 
    payor: ["Payor Address", "payor-address", "left: 0.9375in; top: 0.375in;", "Joe Anonymous\n1143 East West Rd\nWhoville, TN 33124", ""],
    bank: ["Bank Info", "bank-name", "left: 4.79in; top: 0.40in;", "1st Bank of\nCuccooTown", ""],
    payee: ["Payee Info", "payee-name", "left: 0.37in; top: 1.28in;", "Pay To The\nOrder Of ___________________________________________________________________________ $ __________", ""],
    checknum: ["Check Number", "check-num", "left: 7.0in; top: 0.33in;", "No. 1000", ""],
    date: ["Date of Check", "date-line", "left: 6.0in; top: 0.83in;", "Date ______________", ""],
    payment: ["Written Payment", "written-amount", "left: 0.39in; top: 1.73in;", "________________________________________________________________________________________ Dollars", ""],
    memo: ["Memo Line", "memo-line", "left: 0.41in; top: 2.64in;", "MEMO _________________________", ""],
    sig: ["Signature Line", "sig-line", "left: 5.49in; top: 2.34in;", "____________________________\nAUTHORIZED SIGNATURE", ""],
    bnkfrac: ["Fractional Bank Number", "bnk-frac", "left: 7.45in; top: 0.56in;", "123-123/123", ""],
    mirc: ["MIRC Check, Routing and Account Numbers", "routing-number", "left: 1.40625in; top: 3.125in;", "O000000O T000000000T 0000000000O", " ttfont"]
  };

  return {

    // Allows access to the private array/object "draggableDivType"
    getElementParams: () => elementParams,

    // Isolates and returns selected text
    getTextSelection: () => {
      let selectedText = "";
      if (document.getSelection) {
        selectedText = document.getSelection().toString();
      };

      return selectedText;
    }
  };

})();