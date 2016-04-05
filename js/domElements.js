"use strict"

var Checkserver = (() => {

// This is the list of elements to be built.  They should be in the form:
//  key: inputtype: ["Title of Container", "ID", "size in the form "left: #unit; top: #unit;", "Special Text Inside container", "Special Class"]
  var elementParams = { 
    bank: {blankInput: ["Bank Info", "bank-name", "left: 4.79in; top: 0.40in;", "1st Bank of\nCuccooTown", ""]},
    checknum: {blankInput: ["Check Number", "check-num", "left: 7.0in; top: 0.12in;", "No. 1000", ""]},
    bnkfrac: {blankInput: ["Fractional Bank Number", "bnk-frac", "left: 7.45in; top: 0.56in;", "123-123/123", ""]},
    mirc: {blankInput: ["MIRC Check, Routing and Account Numbers", "routing-number", "left: 1.40625in; top: 3.125in;", "O000000O T000000000T 0000000000O", " ttfont"]},
    payor: {blankInput: ["Payor Address", "payor-address", "left: 0.9375in; top: 0.375in;", "Joe Anonymous\n1143 East West Rd\nWhoville, TN 33124", ""]},
    date: {contentInput: ["Date of Check", "date-line", ["left: 6.0in; top: 0.83in;", "left: 0.40in; bottom: 0.25in; width: 1.1in;"], "Date ______________", ""]},
    memo: {contentInput: ["Memo Line", "memo-line", ["left: 0.41in; top: 2.64in;", "left: 0.65in; bottom: 0.25in; width: 1.9in;"], "MEMO _________________________", ""]},
    payee: {contentInput: ["Payee Info", "payee-name", ["left: 0.37in; top: 1.05in;", "left: 0.85in; bottom: 0.05in; width: 5.85in;", "left: 7in; bottom: 0.05in; width: 0.9in;"], "Pay To The\nOrder Of __________________________________________________________________________ $ ___________", ""]},
    payment: {contentInput: ["Written Payment", "written-amount", ["left: 0.39in; top: 1.73in;", "left: 0.1in; bottom: 0.25in; width: 7.2in;"], "________________________________________________________________________________________ Dollars", ""]},
    sig: {contentInput: ["Signature Line", "sig-line", ["left: 5.49in; top: 2.34in;", "bottom: 0.45in; width: 2.3in;"], "____________________________\nAUTHORIZED SIGNATURE", ""]}
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