var currentVersion = "0.1.0";

if(process.argv.length < 3)
{
    console.log("No required parameters");
    console.log("Help: -h or --help");
    process.exit();
}

for(var i = 2, c = process.argv.length; i < c; i++)
{
    switch(process.argv[i])
    {
        case '-h':
        case '--help':
            helpPage();
            break;
        case '-v':
        case '--version':
            versionPage();
            break;
    }
}

function helpPage()
{
    console.log("\t-h, --help\t\tHelp");
    console.log("\t-v, --version\t\tVersion");
    process.exit();
}

function  versionPage()
{
    console.log("Current versio: " + currentVersion);
    process.exit();
}