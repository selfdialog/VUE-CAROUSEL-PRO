// import MyCheckbox from "./components/MyCheckbox"
// import MyButton from "./components/MyButton"
import MyCheckboxGroup from "./components/MyCheckboxGroup"
import studentsData from "./students"

const { useCallback } = React
function App() {
  const doClick = () => {
    console.log("do click")
  }
  const doChange = (e) => {
    console.log(e.target.checked)
    console.log("do Change")
  }

  const getCheckedData = useCallback((data) => {
    console.log(data)
  })

  return (
    <div>
      {/* <MyButton type='success' onClick={doClick}>
        Click
      </MyButton>
      <MyCheckbox checked={true} onChange={doChange}>
        This is a test checkbox
      </MyCheckbox> */}

      <MyCheckboxGroup
        onCheckedDataChange={getCheckedData}
        headerCells={["选择", "ID", "姓名", "分数", "删除"]}
        allCheckedTexts={{
          all: "全部选择",
          none: "全部撤销",
        }}
      >
        {studentsData}
      </MyCheckboxGroup>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
