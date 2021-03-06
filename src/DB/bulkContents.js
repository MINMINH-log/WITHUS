function createBulkContents({ type, startNum = 0 }) {
  const array = [];
  for (let i = startNum; i < startNum + 40; i++) {
    array.push({
      id: i,
      writer: "박효민",
      title: "hello",
      img: "../src/img/withus_empty.jpg",
      prgp: `${type}내용 ${i}`,
      src: "자유",
      time: "00:00",
      watched: 102,
      like: 100,
      likeClicked: false,

      commentInfo: {
        comment: 98,
        bestCommenter: "장범준",
        bestCommenterImg: "../src/img/withus_empty.jpg",
        bestComment:
          "그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마",
        like: 140,
        likeClicked: false,
      },
    });
  }
  return array;
}

export default createBulkContents;
