import express from "express"; // importing Express. syntax for "type": "module"

    /** note:
     * express() creates our Express application., 
     * stores it in: app
     app is used to configure the server.
    */
const app = express ();
const PORT = 5000; // server will an run at this port of local host

    /** Note
     * When someone sends a GET request to root (/), send back "Todo API is running"
     */
app.get("/" ,(req, res)=>{
    res.send("Niu's kitchen test API running")
})

    // starts the server
app.listen(PORT, ()=>{
    console.log(`Nilu's kitchen dash board running on port ${PORT}`);
})