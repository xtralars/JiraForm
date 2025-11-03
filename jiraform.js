function parseList(text) {
    // Split text by new lines to handle multiline input
    const lines = text.split('\n');
    let isOrderedList = false;
    let isUnorderedList = false;
    
    // Begin parsing
    for (let i = 0; i < lines.length; i++) {
        const trimmedLine = lines[i].trim();
        
        // Check for ordered list (e.g., lines starting with 1., 2., etc.)
        if (/^\d+\.\s/.test(trimmedLine)) {
            if (!isOrderedList) {
                lines[i] = "<ol><li>" + trimmedLine.replace(/^\d+\.\s/, '') + "</li>";
                isOrderedList = true;
            } else {
                lines[i] = "<li>" + trimmedLine.replace(/^\d+\.\s/, '') + "</li>";
            }
        }
        // Check for unordered list (e.g., lines starting with -, *, etc.)
        else if (/^[\*-]\s/.test(trimmedLine)) {
            if (!isUnorderedList) {
                lines[i] = "<ul><li>" + trimmedLine.replace(/^[\*-]\s/, '') + "</li>";
                isUnorderedList = true;
            } else {
                lines[i] = "<li>" + trimmedLine.replace(/^[\*-]\s/, '') + "</li>";
            }
        } else {
            // Close any open lists
            if (isOrderedList) {
                lines[i - 1] += "</ol>";
                isOrderedList = false;
            }
            if (isUnorderedList) {
                lines[i - 1] += "</ul>";
                isUnorderedList = false;
            }
        }
    }
    
    // Ensure lists are properly closed at the end of the input
    if (isOrderedList) {
        lines[lines.length - 1] += "</ol>";
    }
    if (isUnorderedList) {
        lines[lines.length - 1] += "</ul>";
    }
    
    return lines.join('\n');
}

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
    var environment = document.getElementById('environment').options[document.getElementById('environment').selectedIndex].text;

    // Parse lists in the "To Reproduce" field
    var formattedToReproduce = parseList(toReproduce);

    var output = "<strong>Orgid:</strong> " + orgID + "<br>" +
                 "<strong>UserID:</strong> " + userID + "<br>" +
                 "<strong>Severity:</strong> " + severity + "<br>" +
                 "<strong>Affected Users:</strong> " + affectedUsers + "<br>" +
                 "<strong>Environment: </strong>" + environment + "<br>" +
                 "<strong>Affected Function(s):</strong> " + affectedFunctions + "<br>" +
                 "<strong>Description:</strong> " + description + "<br>" +
                 "<strong>To Reproduce:</strong> " + formattedToReproduce + "<br>" +
                 "<strong>Workaround:</strong> " + workaround + "<br>" +
                 "<strong>Azure Error:</strong> " + errorMsg;

    document.getElementById('outputText').innerHTML = output;

    orgIdOut.innerHTML = orgID;
    var copyButtonDiv = document.getElementById("copyButtonDiv");
    copyButtonDiv.style.display = "block";
}
