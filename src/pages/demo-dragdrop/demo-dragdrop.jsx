import React, { useRef, useState } from "react";
import "./demo-drag.css";
import { useSpring, animated } from "react-spring";
// npm i react-beautiful-dnd



const defaultValue = [
  { id: 1, taskName: "task 1" },
  { id: 2, taskName: "task 2" },
  { id: 3, taskName: "task 3" },
  { id: 4, taskName: "task 4" },
  { id: 5, taskName: "task 5" },
];
export default function DemoDragdrop() {
  const [taskList, setTaskList] = useState(defaultValue);
  const tagDrag = useRef({});
  const tagDragEnter = useRef({});
  const [propsSpring, set, stop] = useSpring(() => ({
    from: { bottom: 25 },
    to: { bottom: 0 },
    config: { duration: 1000 },
    reset: true,
  }));

  // khi nhấn task kéo
  const handleDragStart = (e, task, index) => {
    tagDrag.current = task;
  };

  // khi nhấn kéo task trong vùng thả
  const handleDragEnter = (e, taskDragEnter, index) => {
    // set lại bottom cho mỗi lần kéo
    set({ bottom: 0 });
    // lưu lại gái trị của task được kéo ngang qua
    tagDragEnter.current = { ...taskDragEnter };

    let taskListUpdate = [...taskList];
    // lấy ra index thằng đang kéo
    let indexDrag = taskListUpdate.findIndex(
      (task) => task.id === tagDrag.current.id
    );
    // lấy ra index thằng bị kéo qua
    let indexDragEnter = taskListUpdate.findIndex(
      (task) => task.id === taskDragEnter.id
    );

    // biến chứa giá trị dang kéo
    let temp = taskListUpdate[indexDrag];
    // lấy giá trị đang kéo gán = thằng kéo qua
    taskListUpdate[indexDrag] = taskListUpdate[indexDragEnter];
    // lấy thằng kéo qa gán = thằng đang kéo
    taskListUpdate[indexDragEnter] = temp;

    setTaskList(taskListUpdate);
  };

  const handleDragEnd = (e) => {};

  const handleDrop = (e) => {
    console.log("drop", e.target);
  };

  return (
    <div
      className="container"
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDrop={(e) => {
        tagDrag.current = {};
        setTaskList([...taskList]);
      }}
    >
      <div className="text-center display-4">Task list</div>
      <div className="row">
        <div className="col-4 bg-primary p-5"></div>
        <div className="col-4 bg-dark p-5">
          {taskList.map((task, index) => {
            let cssDragTag = task.id === tagDrag.current.id ? "dragTag" : "";

            if (task.id === tagDragEnter.current.id) {
              return (
                <animated.div
                  draggable="true"
                  onDragStart={(e) => {
                    handleDragStart(e, task, index);
                  }}
                  onDragEnter={(e) => {
                    handleDragEnter(e, task, index);
                  }}
                  onDragEnd={(e) => handleDragEnd(e)}
                  key={task.id}
                  className={`bg-success p-3 m-2`}
                  style={{
                    position: "relative",
                    bottom: propsSpring.bottom.interpolate(
                      (numBottom) => `${numBottom}px`
                    ),
                  }}
                >
                  {task.taskName}
                </animated.div>
              );
            }
            return (
              <div
                draggable="true"
                onDragStart={(e) => {
                  handleDragStart(e, task, index);
                }}
                onDragEnter={(e) => {
                  handleDragEnter(e, task, index);
                }}
                onDragEnd={(e) => handleDragEnd(e)}
                key={task.id}
                className={`bg-success p-3 m-2 ${cssDragTag}`}
              >
                {task.taskName}
              </div>
            );
          })}
        </div>
        <div
          className="col-4 bg-warning p-5"
          //   onDrop={(e) => handleDrop(e)}
          //   onDragOver={(e) => {

          //   }}
        >
          123
        </div>
      </div>
    </div>
  );
}
