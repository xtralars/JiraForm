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

    document.getElementById('orgIdDiv').innerHTML = orgID;

    var output = orgIdOut + orgID + "<br>" +
             userIdOut + userID + "<br>" +
             severityOut + severity + "<br>" +
             affUsersOut+ affectedUsers + "<br>" +
             affFunctionsOut + affectedFunctions + "<br>" +
             descOut + description + "<br>" +
             toReproduceOut + toReproduce + "<br>" +
             workaroundOut + workaround + "<br>" +
             azureOut + errorMsg

    document.getElementById('outputText').innerHTML = output;

    var copyButtonDiv = document.getElementById("copyButtonDiv");
    copyButtonDiv.style.display = "block";
}


function copyToClipboard() {
    var outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText)
        
        .catch(err => {
            console.error('Could not copy text: ', err);
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

