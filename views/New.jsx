const React=require("react");

function New(){
return(
<div>
    <form action="/logs" method="POST">
      Title:  < input type="text" name="title"/><br/>
      Entry:  <textarea name="entry" cols="30" rows="5"></textarea>
      Is shipIsBroken: <input type="checkbox" name="shipIsBroken"/>
            <br/>
            <input type="submit" value="Create new ship"/>
    </form>
</div>

)



}
module.exports=New;