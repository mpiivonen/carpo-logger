var info = require('./package.json');

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

function versionPage()
{
    console.log("Current versio: " + info.version);
    console.log("Copyright (c) 2014 " + info.author.name);
    console.log("License: " + info.licenses[0].type);
    process.exit();
}