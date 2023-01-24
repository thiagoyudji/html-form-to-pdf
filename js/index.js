const button = document.getElementById('download-button');
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

function refreshDiv() {
    const email = document.getElementById('nome').value;
    const dataHora = document.getElementById('dataHora').value;
    const textArea = document.getElementById('textarea').value;
    var dataObj = new Date(dataHora);
    let dataFormatada = validaData(dataObj);

    document.getElementById('localNome').innerHTML = email;
    document.getElementById('localData').innerHTML = dataFormatada;
    document.getElementById('localTextarea').innerHTML = textArea;
}

function validaData(dataObj) {
    if(isNaN(dataObj)) {
        return " ";
    } else {
        return "Data: "+(((dataObj.getDate()+1) + " " + meses[(dataObj.getMonth())] + " " + dataObj.getFullYear()));
    }
}

function generatePDF() {
    // Choose the element that your content will be rendered to.
    const element = document.getElementById('invoice');

    var opt = {
        margin:       0,
        filename:     'receita.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    // Choose the element and save the PDF for your user.
    html2pdf().set(opt).from(element).save();
}
button.addEventListener('click', generatePDF);