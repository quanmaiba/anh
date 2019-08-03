function Convert() {

    let dauvao = document.getElementById('inputMoney').value;
    let frommoney1 = document.getElementById('FromMoney').value;
    let tomoney = document.getElementById('ToMoney').value;


    switch (frommoney1) {
        case 'USD':
            {
                switch (tomoney) {
                    case 'USD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + dauvao + ' ' + tomoney;
                            break;
                        }
                    case 'VND':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao * 23000) + ' ' + tomoney;
                            break;
                        }
                    case 'AUD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao / 2) + ' ' + tomoney;
                            break;
                        }
                }
                break;
            }
        case 'VND':
            {
                switch (tomoney) {
                    case 'USD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao / 23000) + ' ' + tomoney;
                            break;
                        }
                    case 'VND':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + dauvao + ' ' + tomoney;
                            break;
                        }
                    case 'AUD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao * 16000) + ' ' + tomoney;
                            break;
                        }
                }
                break;
            }
        case 'AUD':
            {
                switch (tomoney) {
                    case 'USD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao / 2) + ' ' + tomoney;
                            break;
                        }
                    case 'VND':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao * 16000) + ' ' + tomoney;
                            break;
                        }
                    case 'AUD':
                        {
                            document.getElementById('result').innerHTML = 'Result: ' + (dauvao) + ' ' + tomoney;
                            break;
                        }
                }
                break;
            }
    }
}