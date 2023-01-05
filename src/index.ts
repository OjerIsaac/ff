import dotenv from 'dotenv';
dotenv.config(); // load env variables
import 'reflect-metadata';
import app from './app';
import config from './db-mysql';

(async () => {
    try {
        // connect to db
        config.connection.connect(function(err) {
            if (err) {
              return console.error('error: ' + err.message);
            }
          
            console.log('Connected to the MySQL server.');
        });

        const port = Number(process.env.PORT) || 2020;

        // spin up the server
        app.listen(port, () => {
            console.log("Food court backend service is running on http://localhost:" + port);
        });
    } catch(err) {
        console.log(err);
        process.exit();
    }

})();

// server needs to crash gracefully 
process.on('uncaughtException', (err) => {
    if(process.env.NODE_ENV === 'production') {
        // notify us of the error either by sending pass err.message and err.stack to cloud watcher log
    }
    console.log('Server crashing gracefully..');
    console.log(err);
    process.exit(1); //server needs to crash and a process manager will restart it
})