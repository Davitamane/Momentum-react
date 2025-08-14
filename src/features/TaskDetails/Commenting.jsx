import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../../services/apiQuery";

function Commenting({ taskId }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.comment.value;

    mutation.mutate({
      text,
      task_id: taskId,
      parent_id: null,
    });

    e.target.reset();
  }

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
      <textarea
        name="comment"
        placeholder="დაწერე კომენტარი"
        className="w-full h-32 text-sm bg-white border border-outline rounded-md resize-none focus:outline-none focus:border-2 p-4"
      ></textarea>

      <button
        className="absolute bottom-6 text-sm right-6 z-10 bg-main text-white px-5 py-2 rounded-full"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Posting..." : "დააკომენტარე"}
      </button>

      {mutation.isError && (
        <p className="text-red-500 text-sm mt-2">
          {mutation.error?.message || "An error occurred"}
        </p>
      )}
    </form>
  );
}

export default Commenting;
