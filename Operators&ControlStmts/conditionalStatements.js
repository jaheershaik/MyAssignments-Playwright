//function launch browser 
function launchBrowser(browser){
    if(browser ==="chrome"){
        console.log("Launching Chrome Browser")
    }else {
        console.log("Launching other browser")
    }
}

// function runTests
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests")
            break;
        case "sanity":
            console.log("Running Sanity Tests")
            break;
            
        case "regression":
            console.log("Running Regression Tests")
            break;

        default:
            console.log("Running Smoke Tests")
            break;
    }
}

//calling Functions
launchBrowser("chrome")
runTests("regression")

launchBrowser("edge")
runTests("security")

