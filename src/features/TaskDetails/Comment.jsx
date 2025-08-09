import image from "../../assets/test.jpeg";
import { LuReply } from "react-icons/lu";
import Reply from "./Reply";

function Comment() {
  return (
    <div className="flex gap-2">
      <img src={image} alt="test" className="w-8 h-8  rounded-full" />
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold">ნატალია მორგანი</h1>
          <p className="text-sm">
            დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
            ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
          </p>
          <button className="text-xs text-main items-center font-thin mt-2 flex gap-1">
            <LuReply className="text-main w-4 h-4" />
            <p>უპასუხე</p>
          </button>
        </div>
        <Reply />
        <Reply />
      </div>
    </div>
  );
}

export default Comment;
