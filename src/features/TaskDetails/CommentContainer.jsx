import Comment from "./Comment";
import Commenting from "./Commenting";

function CommentContainer() {
  return (
    <div className="w-dvh h-fit bg-background rounded-md border border-outline p-8 flex flex-col gap-8">
      <Commenting />
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <h1 className="text-xl font-semibold">კომენტარები</h1>
          <p className="text-sm  bg-main text-white px-3 py-0.5 rounded-full">
            8
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default CommentContainer;
