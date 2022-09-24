var fs = require('fs');

fs.readFile('nota_1.txt', 'utf-8', function (err, data) {
    if(err) throw err;
    console.log(data + ' <- conteudo que está na nota 1');

    fs.writeFile('nota_2.txt', data, {enconding:'utf-8',flag: 'a'}, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!')
    })
});
