import image from "../../assets/test.jpeg";


function Reply() {
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
        </div>
      </div>
    </div>
  );
}

export default Reply;
