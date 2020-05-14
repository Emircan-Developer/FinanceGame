import Bank from './Bank'
class Main {
    bank1;
    bank2;
    bank3;
    currentBank = "nan";
    remainingTime = 0;
    currentMoney = 5000;
    currentBankArr = null;
    inBankMoney = 0;
    bank1 = new Bank();
    bank3 = new Bank();
    bank2 = new Bank();
    faiz;
    constructor() {

        this.bank1.bankName = "AlkBank";
        this.bank2.bankName = "SalkBank";
        this.bank3.bankName = "BasBank";
        this.banks = [this.bank1, this.bank2, this.bank3];

    }
    selected = (bankNumber) => {
        if (this.remainingTime == 0) {
            if (this.currentBank == this.banks[bankNumber].bankName) {
                alert("you already selected this bank");
            }
            this.currentBank = this.banks[bankNumber].bankName;
            this.remainingTime = 120;
            this.currentBankArr = this.banks[bankNumber];
            this.faiz = (this.inBankMoney / 100) * (this.currentBankArr.faizOrani[Math.floor(Math.random() * 900)]) / 365;
            alert(this.faiz)
        }

        else {
            alert("you cannot select other bank in  " + this.remainingTime + "Second");
        }
        console.log("Currently Bank :" + this.currentBank +"interest : "+this.currentBankArr.faizOrani );
    }

    selectedBank = "";

    //{this.currentBank}

    calculate(){
        
        if(this.currentMoney > 0){
            this.inBankMoney = 5000;
            this.currentMoney = 0;
        }
    }
    
    Update() {
        console.log(this.currentMoney);
        if (this.remainingTime > 0) {
            this.remainingTime -= 1;
        }
        if(this.inBankMoney> 0 && this.currentBank != "nan"){
            this.newMoney();
        }
    }
    
   newMoney(){

       this.inBankMoney += this.faiz;
       console.log("Currently Bank :" + this.currentBank + "interest : " + this.faiz);
   }

}
export default Main;
