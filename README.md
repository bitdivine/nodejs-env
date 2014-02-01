nodejs-env
==========

Override node.js configuration with environment variables.

###Usage:

* Put your configuration in a .json file (optional but most common)
* In any of your files that need to access the configuration:

        var defaults = require('./yourfile.json'),
            config   = require('nodejs-env')(defaults);

* If your defaults are:

        { 'server':
          { 'host': 'morethanabit.com'
          , 'port': 666
          }
        , 'log': 'log/log'
        }

    You can override them with environment variables like this:

        server_port=69 log='/var/log/morethanabit/current' npm start

    (Replace ```npm start``` with however you run your program.)
