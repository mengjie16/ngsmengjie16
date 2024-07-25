// "this" here is "exports"

this.id = 'exports';
console.log(this);
// node 5-this.js
// {id:"exports"}
const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();// this is the caller in this case is testerObj
// func1 {func1:{Function :func1],func2:[Function:func2]}}
testerObj.func2();// this is function scope 
// func2 {id:"exports"}
