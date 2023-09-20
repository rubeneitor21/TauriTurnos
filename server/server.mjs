import * as http from 'http'
import fs from 'fs'


const server = http.createServer((req, res) => {

    let data = "" 

    req.on("data", d => {
        console.log(d.toString())
        data += d.toString()
    })

    req.on("end", () => {

        console.log(data)


        /* -------------------------------------------------------------------------- */
        /*                                     Put                                    */
        /* -------------------------------------------------------------------------- */

        if (req.method == "PUT") {
            if (req.url === "/user") {
                console.log(data)
                res.end(JSON.stringify({"userData": "Cosas del usuario"}))
            }
        }

        /* -------------------------------------------------------------------------- */
        /*                                    Patch                                   */
        /* -------------------------------------------------------------------------- */

        if (req.method == "PATCH") {

        }

        /* -------------------------------------------------------------------------- */
        /*                                    Post                                    */
        /* -------------------------------------------------------------------------- */

        if (req.method == "POST") {

        }

        /* -------------------------------------------------------------------------- */
        /*                                     Get                                    */
        /* -------------------------------------------------------------------------- */

        if (req.method == "GET") {

        }

    })

}).listen(6969)