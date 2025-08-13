function Reply({ reply }) {
  if (!reply) return;
  console.log(reply);
  const { author_avatar, author_nickname, text } = reply;

  return (
    <div className="flex gap-2">
      <img src={author_avatar} alt="test" className="w-8 h-8  rounded-full" />
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold">{author_nickname}</h1>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Reply;
