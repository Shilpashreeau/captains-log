const React = require("react");

function Edit(props) {
    const {logs}=props;

  return (
  <div>
        
      <form method="POST" action={`/logs/${logs._id}/?_method=PUT`}>
        Name: <input type="text" name="name" defaultValue={logs.title} />
        <br/>
        Color: <input type="text" name="color"  defaultValue={logs.entry}/>
        <br/>
        Is ship broken:{ logs.shipIsBroken ? 
                <input type="checkbox" name="shipIsBroken" defaultChecked/> 
                : 
                 <input type="checkbox" name="shipIsBroken"/>}
                <br/>
                
                <input type="submit" value="Submit Changes"/>
            </form>
            </div>
  );
}
module.exports = Edit;
