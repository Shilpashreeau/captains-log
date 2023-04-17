const React = require("react");

function Index(props) {
  const { logs } = props;
  console.log(logs);

  return (
  <div>
      {/* <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav> */}
      <h1>Index Page</h1>
      <ul>
        {logs.map((log, i) => {
          return (
            
            <li key={log._id}>
              The <a href={`/logs/${log._id}`}>{log.title}</a> has{" "}
              {log.entry}{" "}
              {log.shipIsBroken
                ? "Ship is broken"
                : "Ship is not broken"}{" "}
              {/* <a href={`/fruits/${fruit._id}/edit`}>Edit</a> */}
              {/* <form
                method="POST"
                action={`/fruits/${fruit._id}?_method=DELETE`}
              >
                <input type="submit" value="DELETE" />
              </form> */}
            </li>
          );
        })}
      </ul>
      </div>
  );
}
module.exports = Index;