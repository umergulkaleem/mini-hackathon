export default function Grid() {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3 h-44 m-4 gap-2">
        <div className="bg-red-500 row-span-3">1</div>
        <div className="bg-blue-500 col-span-2">2</div>
        <div className="bg-purple-500 ">3</div>
        <div className="bg-green-500 ">4</div>
        <div className="bg-sky-500 ">5</div>
        <div className="bg-yellow-500 row-span-2">6</div>
        <div className="bg-orange-500 ">7</div>
        <div className="bg-pink-500 ">8</div>
      </div>
    </div>
  );
}
