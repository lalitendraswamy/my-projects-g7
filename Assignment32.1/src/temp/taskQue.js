class TaskQue {
  constructor(task, timer) {
    this.task = [];
    this.timer = [];
    this.size = 0;
  }

  addTask(task, timer) {
    this.task.push(task);
    this.timer.push(timer);
    this.size++;
  }

  runTask(timer) {
    let promiseReturn = new Promise((res) => {
      setTimeout(() => {
        res();
      }, timer);
    });
    return promiseReturn;
  }

  executeTask = async () => {
    for (var i = 0; i < this.size; i++) {
      await this.runTask(this.timer[i]);
      taskFunction(this.timer[i]);
    }
  };
}

function taskFunction(timer) {
  console.log(timer);
}

let task = new TaskQue();

n=6;
var interval=1000
for(let i=0;i<n;i++){
    
    task.addTask(taskFunction, interval);
    interval+=1000
}

task.executeTask();










