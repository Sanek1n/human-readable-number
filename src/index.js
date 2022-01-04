module.exports = function toReadable (number) {
    let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let teens = ['eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';
    let num = String(number);
    
    for (let i = num.length; i>0; i--) {
        if (i==3) {
                str += units[+num[num.length-i]-1] + ' hundred';
        } else if (i==2) {
                if (+num[num.length-i]==1) {
                    (+num[num.length-i+1]==0) ? str += ' ' + decades[+num[num.length-i]-1] : str += ' ' + teens[+num[num.length-i+1]-1];
                    i--;
                } else {
                    (+num[num.length-i]==0) ? str += '' : str += ' ' + decades[+num[num.length-i]-1];
                }
        } else if (i==1) {
            if (+num[num.length-i]==0 && str == '') {
                str = 'zero';
            } else {
                (+num[num.length-i]==0) ? str += '' : str += ' ' + units[+num[num.length-i]-1];
            };
        }
    }
    return str.trim();  
}
