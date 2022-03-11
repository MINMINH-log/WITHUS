function createBulkContents({ type }) {
  const array = [];
  for (let i = 1; i <= 40; i++) {
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
      comment: 98,
      likeClicked: false,
      bestCommenter: "장범준",
      bestCommenterImg: "../src/img/withus_empty.jpg",
      bestComment:
        "그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    });
  }
  return array;
}

export default createBulkContents;
