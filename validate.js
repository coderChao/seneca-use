module.exports = async (ctx, next) => {
  console.log("ctx");
  if(ctx.params.param1 === "1"){
    await next();
  }else{
    ctx.res.statusCode = 200;
    ctx.body = {a: "1", b: "2"};
  }
}