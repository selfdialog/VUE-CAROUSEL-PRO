import "./index.scss"
import MyCheckbox from "../MyCheckbox"
import MyButton from "../MyButton"
const { useState, useCallback, useMemo } = React
function MyCheckboxGroup({
  children, // data
  allCheckedTexts, // 全选文字说明
  headerCells, //th
  onCheckedDataChange, // data change callback
}) {
  const [originData, setOriginData] = useState(children)
  const [checkedData, setCheckedData] = useState([])
  const dataProps = Object.keys(children[0])
  const doAllCheck = useCallback((e) => {})
  const doSingleChange = useCallback((e) => {})
  const removeItem = useCallback((e) => {})
  const allCheckedText = useMemo(() => {
    if (checkedData.length >= 0 && checkedData.length < originData.length) {
      return allCheckedTexts.all || "Check all"
    } else {
      return allCheckedTexts.none || "Check none"
    }
  }, [checkedData])
  return (
    <div>
      <table border="1" width="500" align="center">
        <thead>
          <tr>
            <td colSpan={5} align="left">
              <MyCheckbox
                checked={checkedData.length === originData.length}
                onChange={(e) => doAllCheck(e)}
              >
                {allCheckedText}
              </MyCheckbox>
            </td>
          </tr>
          <tr>
            {
              headerCells.map(item => {
                <th key={item}>{item}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
            {
              originData.map(item => {
                <tr key={item.id}>
                  <td>
                    <MyCheckbox
                      checked={checkedData.some(data => data.id===item.id)}
                      onChange={(e) => doSingleChange(e,item)}
                    ></MyCheckbox>
                  </td>
                  {
                    dataProps.map(prop => {
                      <td key={prop}>{item[prop]}</td>
                    })
                  }
                  <td>
                    <MyButton
                      onClick={()=>removeItem(item.id)}
                    >删除</MyButton>
                  </td>
                </tr>
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default MyCheckboxGroup
