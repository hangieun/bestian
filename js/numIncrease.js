function increase_num(tagid){
    function stringNumberToInt(stringNumber){
        return parseInt(stringNumber.replace(/,/g , ''));
    }

    let countBox = document.querySelector(tagid);
    let num_count = 0;
    let num = stringNumberToInt(countBox.textContent);

    let counting = setInterval(function () {
        if (num_count >= num) {
            num_count = num;
            clearInterval(counting);
        } else {
            num_count += num/100;
        }
        countBox.innerHTML = new Intl.NumberFormat().format(num_count);
    }, 10);
}
