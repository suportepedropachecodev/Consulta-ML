const ObjectsToCsv = require('objects-to-csv');
const {app,shell} = require('electron');
const fs = require('fs');

//const diretorio = __dirname + '/RELATORIOS-ML';
const diretorio = app.getPath('documents')+'/RELATORIOS-ML';

const timestamp = new Date().getTime();

const saveCsv = async (dados, prd) => {
    const nomeproduto = prd.replace(' ', '');
    const csv = new ObjectsToCsv(dados);
    let arquivo = `${diretorio}/Relatorio-${nomeproduto}-${timestamp}.csv`
    if (!fs.existsSync(diretorio)) {
        fs.mkdirSync(diretorio);
    }

    await csv.toDisk(arquivo);
    setTimeout(function () {
        //console.log(`Relatorio em: ${diretorio}`)
        shell.openPath(diretorio)
    }, 3000);

};
module.exports = saveCsv;