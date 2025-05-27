const orgIdOut = document.getElementById('orgIdOut').innerHTML;
const userIdOut = document.getElementById('userIdOut').innerHTML;
const severityOut = document.getElementById('severityOut').innerHTML;
const affUsersOut = document.getElementById('affUsersOut').innerHTML;
const affFunctionsOut = document.getElementById('affFunctionsOut').innerHTML;
const descOut = document.getElementById('descOut').innerHTML;
const toReproduceOut = document.getElementById('toReproduceOut').innerHTML;
const workaroundOut = document.getElementById('workaroundOut').innerHTML;
const azureOut = document.getElementById('azureOut').innerHTML;

const orgIdDiv = document.getElementById('orgIdDiv').innerHTML;


function printFormData() {
    var orgID = document.getElementById('orgID').value;
    var userID = document.getElementById('userID').value;
    var severity = document.getElementById('severity').options[document.getElementById('severity').selectedIndex].text;
    var affectedUsers = document.getElementById('affectedUsers').options[document.getElementById('affectedUsers').selectedIndex].text;
    var affectedFunctions = document.getElementById('affectedFunctions').value;
    var description = document.getElementById('description').value;
    var toReproduce = document.getElementById('toReproduce').value;
    var workaround = document.getElementById('workaround').value;
    var errorMsg = document.getElementById('errorMsg').value;

    

    var output = "<strong>Orgid:</strong> " + orgID + "<br>" +
                 "<strong>UserID:</strong> " + userID + "<br>" +
                 "<strong>Severity:</strong> " + severity + "<br>" +
                 "<strong>Affected Users:</strong> " + affectedUsers + "<br>" +
                 "<strong>Affected Function(s):</strong> " + affectedFunctions + "<br>" +
                 "<strong>Description:</strong> " + description + "<br>" +
                 "<strong>To Reproduce:</strong> " + toReproduce + "<br>" +
                 "<strong>Workaround:</strong> " + workaround + "<br>" +
                 "<strong>Azure Error:</strong> " + errorMsg;

    document.getElementById('outputText').innerHTML = output;

    
    orgIdOut.innerHTML = orgID;

    var copyButtonDiv = document.getElementById("copyButtonDiv");
    copyButtonDiv.style.display = "block";
}


function copyToClipboard() {
    var outputText = document.getElementById('outputText').innerHTML;

    navigator.clipboard.write([
        new ClipboardItem({
            "text/html": new Blob([outputText], { type: "text/html" })
        })
    ])
    .catch(err => {
        console.error('Unable to copy formatted text: ', err);
    });
}


function ifSecurity(){
    var selectElement = document.getElementById("severity");
    var hiddenTextElement = document.getElementById("ifSecurityOpt");

    if (selectElement.value === "severityOpt4") {
        hiddenTextElement.style.display = "block";
    } else {
        hiddenTextElement.style.display = "none";
    }
}
const componentList = document.getElementById('component');
const componentTeam = document.getElementById('componentTeam');
fetch('./components2.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item =>{
            const option = document.createElement('option');
            option.value = item.function;
            option.textContent = item.function;
            componentList.appendChild(option);
        });

        componentList.addEventListener('change', () => {
            const selectedItem = data.find(item => item.function === componentList.value);
            componentTeam.textContent = `Team: ${selectedItem.team}`;
        });
        
    });


//copy of formatted text

//original
/*function copyToClipboard() {
    var outputText = document.getElementById("outputText").innerHTML;
    navigator.clipboard.writeText(outputText)
    
        
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}*/
//new one
function copyFormattedText() {
    var formattedText = document.getElementById('formattedText').innerHTML;

    navigator.clipboard.write([
        new ClipboardItem({
            "text/html": new Blob([formattedText], { type: "text/html" })
        })
    ]).then(() => {
        alert('Formatted text copied to clipboard!');
    }).catch(err => {
        console.error('Unable to copy formatted text: ', err);
    });
}

//combined
/*function copyToClipboard() {
    var outputText = document.getElementById('outputText').innerHTML;

    navigator.clipboard.write([
        new ClipboardItem({
            "text/html": new Blob([outputText], { type: "text/html" })
        })
    ]).then(() => {
        alert('Formatted text copied to clipboard!');
    }).catch(err => {
        console.error('Unable to copy formatted text: ', err);
    });
}*/
