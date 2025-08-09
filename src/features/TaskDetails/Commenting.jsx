function Commenting() {
  return (
    <div className="relative w-full">
      <textarea
        name="comment"
        placeholder="დაწერე კომენტარი"
        className="w-full h-32 text-sm bg-white border border-outline rounded-md resize-none focus:outline-none focus:border-2 p-4"
      ></textarea>
      <button className="absolute bottom-6 text-sm right-6 z-10 bg-main text-white px-5 py-2 rounded-full">
        დააკომენტარე
      </button>
    </div>
  );
}

export default Commenting;
