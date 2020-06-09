

   // get a reference to the radiobutton where the bill type is to be entered
   var billItemTypeRadio = document.querySelector('.billItemTypeRadio');
   //get a reference to the add button
   var radioBillAddBtnElements = document.querySelector('.radioBillAddBtn');
   var callTotalTwoElements = document.querySelector('.callTotalTwo');
   var smsTotalTwoElements = document.querySelector('.smsTotalTwo');
   var totalTwoElements = document.querySelector('.totalTwo');

var callTotal = 0;
var smsTotal = 0;
var total = 0;

   function addRadioBill(){
      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
      if (checkedRadioBtn){
          var billItemType = checkedRadioBtn.value
          // billItemType will be 'call' or 'sms'
          if(billItemType ==='call'){
            callTotal += 2.75;
            total += 2.75;
          }
          else if(billItemType === 'sms'){
            smsTotal += 0.75;
            total += 0.75;

          }
      }
      
      if(total >= 50){
         totalTwoElements.classList.add('danger')
      }
      if(total>=30 && total< 50){
         totalTwoElements.classList.add('warning')
      }

      callTotalTwoElements.innerHTML = callTotal.toFixed(2)
      smsTotalTwoElements.innerHTML = smsTotal.toFixed(2)

      totalTwoElements.innerHTML = total.toFixed(2);
   }

   radioBillAddBtnElements.addEventListener('click',addRadioBill)

