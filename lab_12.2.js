const tasks = [];


function addTask(title) {
    const newTask = {
        title: title,
        isComplete: false      
    };

    tasks.push(newTask);
    console.log(`"${title}" ажил амжилттай нэмэгдлээ.`);
}


function completeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Тийм индексийн ажил байхгүй!");
        return;
    }

    tasks[index].isComplete = true;
    console.log(`"${tasks[index].title}" ажил дууссан төлөвт шилжлээ.`);
}


function displayTasks() {
    console.log("\n=== АЖЛЫН ЖАГСААЛТ ===");
    tasks.forEach((task, i) => {
        const status = task.isComplete ? "✔ Дууссан" : "✘ Дутуу";
        console.log(`${i}. ${task.title} — ${status}`);
    });
}


addTask("Даалгавар хийх");
addTask("Хоол хийх");
addTask("Эмээ рүү залгах");

completeTask(1);

displayTasks();
