function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function addAd(imgUrl, header, body) {
    $(`<div class="uniswap ad"><img src="${imgUrl}" width="100%"><h2 class="adtext">${header}</h2>${body}</div>`)
    .appendTo('#flex-container') 
}

function addUI(n=null, a=null) {
    quotes = ["It's a healthy correction", "I am a successful trader", "When moon?", "Thanks for the divs", 
    "It aint much, but it's honest work", "Imagine not buying this dip", "Good project sir", 
    "When rug?", "HODL", "Funds are safu"]
    $('#header').text(quotes[Math.floor(Math.random()*quotes.length)])
    $('html').css('background-image', `url(img/${Math.floor(Math.random()*15)}.jpg)`)

    if (a) {
        a.map(address => {
            console.log(address)
            $(`<embed class='uniswap' src="https://app.uniswap.org/#/swap?theme=dark&inputCurrency=${address}&outputCurrency=ETH" />`)
            .appendTo('#flex-container')
        })
    }
    if (n) {
        for (var i=0; i < n; i++) {
            $('<embed class="uniswap" src="https://app.uniswap.org/#/swap?theme=dark" />')
            .appendTo('#flex-container')
        }
    }
}

function main() {
    let n = getUrlParam('n', null);
    let a = getUrlParam('a', null); 
    if (a) {
        a = a.split(',');
        if (!n) { // if a not n
            n = 0;
        } else { // if a and n
            n = Math.max(n - a.length, 0)
        }
    } else if (!n) { // if not a not n
        n = 12
    } else if(n > 24) { // if not a and n > 24
        console.error('Max of 24 Uniswap UIs')
        n = 24
    }
    //addAd('img/chartex.jpg', 'CHART token launching on Uniswap this Friday!', '<p>Join the <a href="https://discord.gg/3pPur67">Discord</a> for details</p>')
    addUI(n, a);
}

$(document).on('click', '#smalltip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(0.01, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});

$(document).on('click', '#bigtip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(0.1, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});

$(document).on('click', '#hugetip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(1, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});



