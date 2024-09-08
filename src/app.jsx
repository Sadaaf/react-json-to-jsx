import PropTypes from "prop-types";
import "./app.css";
const task = [
  {
    id: "uniqueId001",
    subtitle: "Subtitle",
    createdAt: "2024-09-08T04:34:33.191Z",
    tags: [
      {
        id: "tag001",
        text: "It's done",
        icon: "T",
      },
      {
        id: "tag002",
        text: "It's cancelled",
        icon: "X",
      },
      {
        id: "tag003",
        text: "It's in progress",
        icon: "P",
      },
      {
        id: "tag004",
        text: "Just wrote it",
        icon: "C",
      },
    ],
    comments: [
      {
        commentId: "commentId001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          userId: "userId001",
        },
        text: "In labore laboris amet veniam. Sunt non fugiat Lorem cillum cupidatat fugiat ad. Est velit dolore culpa ut ad eu deserunt in proident adipisicing nisi et adipisicing nisi. Consequat dolore velit dolor qui nostrud dolore culpa. Culpa reprehenderit adipisicing irure et reprehenderit aute sint duis. Consequat eu id qui adipisicing quis aute enim esse. Aute labore ad ex Lorem reprehenderit aliqua et cupidatat ex ipsum exercitation nisi.",
      },
    ],
    tasks: [
      {
        id: "task001",
        title: "Foggy Nelson",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "done",
      },
      {
        id: "task002",
        title: "Louis Ck",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "cancelled",
      },
      {
        id: "task003",
        title: "Albert Einstein",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "in progress",
      },
      {
        id: "task004",
        title: "Albert Einstein",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "in progress",
      },
    ],
  },
  {
    id: "uniqueId001",
    subtitle: "Subtitle",
    createdAt: "2024-09-08T04:34:33.191Z",
    tags: [
      {
        id: "tag001",
        text: "It's done",
        icon: "T",
      },
      {
        id: "tag002",
        text: "It's cancelled",
        icon: "X",
      },
    ],
    comments: [
      {
        commentId: "commentId001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          userId: "userId001",
        },
        text: "In labore laboris amet veniam. Sunt non fugiat Lorem cillum cupidatat fugiat ad. Est velit dolore culpa ut ad eu deserunt in proident adipisicing nisi et adipisicing nisi. Consequat dolore velit dolor qui nostrud dolore culpa. Culpa reprehenderit adipisicing irure et reprehenderit aute sint duis. Consequat eu id qui adipisicing quis aute enim esse. Aute labore ad ex Lorem reprehenderit aliqua et cupidatat ex ipsum exercitation nisi.",
      },
    ],
    tasks: [
      {
        id: "task003",
        title: "Albert Einstein",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "in progress",
      },
      {
        id: "task004",
        title: "Albert Einstein",
        text: "Quis eu tempor reprehenderit sunt laboris et mollit tempor exercitation id dolor. Ad quis nulla minim ipsum tempor aute ex eiusmod officia. Sunt sint duis elit culpa culpa officia eu ipsum voluptate laboris culpa sint aliqua. Voluptate dolore aliqua reprehenderit aute dolore.",
        status: "in progress",
      },
    ],
  },
];

const getDay = (dateStr) => {
  const day = new Date(dateStr).getDay();
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayOfTheWeek[day];
  //   switch (day) {
  //     case 0:
  //       return "Sunday";
  //     case 1:
  //       return "Monday";
  //     case 2:
  //       return "Tuesday";
  //     case 3:
  //       return "Wednesday";
  //     case 4:
  //       return "Thursday";
  //     case 5:
  //       return "Friday";
  //     case 6:
  //       return "Saturday";
  //     default:
  //       throw new Error("Invalid Day");
  //   }
};

const CommentListItem = ({ comment }) => (
  <div key={comment.commentId} className="comment-item">
    <h3>{comment.user.name}</h3>
    <p>{comment.text}</p>
  </div>
);
const TaskListItem = ({ task }) => (
  <li key={task.id}>
    <h3>{task.title}</h3>
    <small>Status: {task.status}</small>
    <p>{task.text}</p>
  </li>
);

const TagListItem = ({ tag }) => (
  <li key={tag.id}>
    <small>{tag.icon}</small> - {tag.text}
  </li>
);

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;
};

const TaskCard = ({ task }) => (
  <div className="day-card">
    <h1 className="title">
      {getDay(task.createdAt)}, {formatDate(task.createdAt)}
    </h1>
    <h3 className="sub-title">{task.subtitle}</h3>
    <ul className="tag-ul">
      {task.tags.map((tag) => (
        <TagListItem key={tag.id} tag={tag} />
      ))}
    </ul>
    <div className="line"></div>
    <p className="notes">Notes linked to people</p>
    <div className="comments">
      {task.comments.map((comment) => (
        <CommentListItem key={comment.commentId} comment={comment} />
      ))}
    </div>
    <ul className="tasks">
      {task.tasks.map((task) => (
        <TaskListItem key={TaskListItem.id} task={task} />
      ))}
    </ul>
  </div>
);

const App = () => (
  <div className="grid">
    {task.map((t) => (
      <TaskCard key={t.id} task={t} />
    ))}
  </div>
);

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
};

TagListItem.propTypes = {
  tag: PropTypes.object.isRequired,
};

CommentListItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default App;
