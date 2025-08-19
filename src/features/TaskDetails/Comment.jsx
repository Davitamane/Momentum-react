// import image from "../../assets/test.jpeg";
import { LuReply } from "react-icons/lu";
import Reply from "./Reply";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../../services/apiQuery";

function Comment({ comment, taskId }) {
  const { author_avatar, author_nickname, text } = comment;
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (commentData) => postComment(taskId, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", taskId]);
    },
    onError: (error) => {
      console.error("failed to send", error);
    },
  });

  function handleReplySubmit(e) {
    mutation.mutate({
      text: replyText,
      task_id: taskId,
      parent_id: comment.id,
    });

    e.preventDefault();
    setReplying(false);
    setReplyText("");
  }

  return (
    <div className="flex gap-2">
      <img src={author_avatar} alt="test" className="w-8 h-8  rounded-full" />
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full">
          <h1 className="font-bold">{author_nickname}</h1>
          <p className="text-sm">{text}</p>
          <button
            className="text-xs text-main items-center font-thin mt-2 flex gap-1"
            onClick={() => setReplying(true)}
          >
            {replying ? (
              <form
                className="flex flex-col w-full"
                onSubmit={(e) => {
                  handleReplySubmit(e);
                }}
              >
                <input
                  className="w-full text-sm bg-white border border-outline rounded-md resize-none focus:outline-none focus:border-2 p-1 px-2 text-gray-700"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
              </form>
            ) : (
              <>
                <LuReply className="text-main w-4 h-4" />
                <p>უპასუხე</p>
              </>
            )}
          </button>
        </div>
        {comment.sub_comments?.map((reply) => (
          <Reply reply={reply} key={reply.id} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
