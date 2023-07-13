export default function LiveDate() {
  let today = new Date()
  let date =
    today.getDate() +
    '-' +
    parseInt(today.getMonth() + 1) +
    '-' +
    today.getFullYear()

  console.log(date)

  return <div className="liveDate">{date}</div>
}
