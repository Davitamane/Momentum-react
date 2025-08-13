// import image from "../../assets/test.jpeg";
import { LuReply } from "react-icons/lu";
import Reply from "./Reply";

function Comment({ comment }) {
  const { author_avatar, author_nickname, text } = comment;

  return (
    <div className="flex gap-2">
      <img src={author_avatar} alt="test" className="w-8 h-8  rounded-full" />
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold">{author_nickname}</h1>
          <p className="text-sm">{text}</p>
          <button className="text-xs text-main items-center font-thin mt-2 flex gap-1">
            <LuReply className="text-main w-4 h-4" />
            <p>უპასუხე</p>
          </button>
        </div>
        {comment.sub_comments?.map((reply) => (
          <Reply reply={reply} key={reply.id} />
        ))}

        <Reply />
      </div>
    </div>
  );
}

export default Comment;
