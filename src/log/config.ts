import * as log4js from "log4js";

const logLevel = require('../../templates/info.json').StreamerHelper.debug ? "debug" : "info"

log4js.configure({
    appenders: {
        cheese: {
            type: "file",
            filename: process.cwd() + "/logs/artanis.log",
            // 1M
            maxLogSize: 1048576,
            backups: 5,
            encoding: "utf-8",
        },
        memory: {
            type: "file",
            filename: process.cwd() + "/logs/memory.log",
            // 1M
            maxLogSize: 1048576,
            backups: 0,
            encoding: "utf-8",
        },
        console: {
            type: "console"
        }
    },
    categories: {
        cheese: {
            appenders: ["cheese", "console"], level: logLevel
        },
        memory: {
            appenders: ["memory"], level: "info"
        },
        check: {
            appenders: ["console"], level: "debug"
        },
        default: {
            appenders: ["cheese", "console"], level: logLevel
        },
    },
});

export { log4js }
