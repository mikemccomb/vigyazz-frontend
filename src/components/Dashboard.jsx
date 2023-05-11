export function Dashboard() {
  return (
    <div>
      {/* {props.data.map((data) => (
        <div key={data.current}>
          <p>{data.current.humidity}</p>
        </div>
      ))} */}
      The weather in [Name of search place] is: [Pull from API]. The current time in [Name of search place] is: [Human
      Time]
    </div>
  );
}
