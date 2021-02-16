const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody({
    urlencoded: true,
}))

app.use(async (ctx, next) => {
    const origin = ctx.request.get('Origin');
    if (!origin) {
        return await next();
    }
    const headers ={'Access-Control-Allow-Origin':'*',};

    if (ctx.request.get('Access-Control-Request-Method')) {
        ctx.response.set({...headers,'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, PATCH',});

    }
   
    if(ctx.request.get('Access-Control-Request-Headers')){
        ctx.response.set('Access-Control-Allow-Headers',
        ctx.request.get('Access-Control-Allow-Request-Headers'));}
    ctx.response.body = 'server response';
});



const server = http.createServer(app.callback()).listen(7070); 