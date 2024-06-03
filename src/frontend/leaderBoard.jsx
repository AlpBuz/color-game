import { useEffect, useState } from "react";

function LeaderBoard({ data }) {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    setSortedData(sorted);
  }, [data]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(([UserName, userScore]) => (
            <tr key={UserName} className="bg-white hover:bg-gray-100">
              <td className="border px-4 py-2">{UserName}</td>
              <td className="border px-4 py-2">{userScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
