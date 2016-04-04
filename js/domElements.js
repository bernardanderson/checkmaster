"use strict"

var Checkserver = (() => {

// This is the list of elements to be built.  They should be in the form:
//  key: ["Title of Container", "ID", "size in the form "left: #unit; top: #unit;", "Special Text Inside container", "Special Class"]
  var elementParams = { 
    payor: ["Payor Address", "payor-address", "left: 0.9375in; top: 0.375in;", "Joe Anonymous\n1143 East West Rd\nWhoville, TN 33124", ""],
    // bank: ["1st National Bank", "bank-name", "left: 2in; top: 0.5in;"],
    // payee: ["Pay to the Order Of", "payee-name", "left: 2in; top: 0.5in;"],
    // date: ["Date", "date-line", "left: 2in; top: 0.5in;"],
    // payment: ["Dollars", "written-amount", "left: 2in; top: 0.5in;"],
    // memo: ["MEMO", "memo-line", "left: 2in; top: 0.5in;"],
    // sig: ["AUTHORIZED SIGNATURE", "sig-line", "left: 2in; top: 0.5in;"],
    mirc: ["MIRC Routing and Bank Code", "routing-number", "left: 1.40625in; top: 3.125in;", "O000000O T000000000T 0000000000O", " ttfont"]
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