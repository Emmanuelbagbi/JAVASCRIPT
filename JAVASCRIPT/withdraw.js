function withdrawlATM(n) {
    let bill100 = 0
    let bill20 = 0
    let bill9 = 0
    let bill1 = 0

    if (n / 100) {
        bill100 = Math.floor(n / 100);
        n = n % (bill100 * 100)
    }

    if (n / 20 >= 1){
        bill20 = Math.floor(n / 20);
        n = n % (bill20 * 20)
    }

    if (n / 9 >= 1) {
        bill9 = Math.floor(n / 9);
        n = n % (bill9 * 9)
    }

    bill1 = n;

    console.log(bill100 + "100 Naira bills," + bill20 + "20 Naira bills," + bill9 + "9 Naira bills, and" + bill1 + "1 Naira bills.");
}

withdrawlATM(2035)
withdrawlATM(62)
withdrawlATM(227)
withdrawlATM(8)