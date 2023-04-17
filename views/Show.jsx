const React = require("react");

function Show(props) {
  const { logs } = props;

  return (
    <div>
      <p>
        The {logs.title} is {logs.entry}{" "}
        {logs.shipIsBroken ? "Ship is broken" : "Ship is not broken"} at the
        time {logs.timestamps}
      </p>
      <a href="/logs">Go back to logs page</a>
    </div>
  );
}
module.exports = Show;
