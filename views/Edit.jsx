const React = require("react");

function Edit(props) {
  const { logs } = props;

  return (
    <div>
      <form method="POST" action={`/logs/${logs._id}/?_method=PUT`}>
        Title: <input type="text" name="title" defaultValue={logs.title} />
        <br />
        Entry: <input type="text" name="entry" defaultValue={logs.entry} />
        <br />
        Is ship broken:
        {logs.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    </div>
  );
}
module.exports = Edit;
