const user={
    name:"india",
    say:"hi"
}

function callval(arg){
    console.log(this.name);
    console.log(arg);
}

callval.call(user,"hello");
callval.apply(user,["hello"]);

const val=callval.bind(user,"hello");
val();