var cli = require('./lib/cli.js');

if(process.argv.length < 3)
{
    console.log("No required parameters");
    console.log("Help: -h or --help");
    process.exit();
}

for(var i = 2, c = process.argv.length; i < c; i++)
{
    switch(process.argv[i].toLowerCase())
    {
        case '-h':
        case '--help':
            cli.help();
            break;
        case '-v':
        case '--version':
            cli.version();
            break;
    }
}