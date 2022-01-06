import "./index.scss"
import MyCheckbox from "../MyCheckbox"
import MyButton from "../MyButton"
const { useState, useCallback, useMemo, useEffect } = React
function MyCheckboxGroup({
  children, // data
  allCheckedTexts, // 全选文字说明
  headerCells, //th
  onCheckedDataChange, // data change callback
}) {
  const [originData, setOriginData] = useState(children)
  const [checkedData, setCheckedData] = useState([])
  const dataProps = Object.keys(children[0])

  const doAllCheck = useCallback((e) => {
    const checked=e.target.checked;
    setCheckedData(checked?originData:[])
  })

  const doSingleChange = useCallback((e,item) => {
    const checked=e.target.checked;
    setCheckedData(checkedData=>{
      return checked?[...checkedData,item]:checkedData.filter(data=>data.id!==item.id)
    })
  })

  const removeItem = useCallback((id) => {
    setOriginData(originData=>originData.filter(item=>item.id!==id));
    setCheckedData(checkedData=>checkedData.filter(item=>item.id!==id));
  })

  const allCheckedText = useMemo(() => {
    if (checkedData.length >= 0 && checkedData.length < originData.length) {
      return allCheckedTexts.all || "Check all"
    } else {
      return allCheckedTexts.none || "Cancel all"
    }
  }, [checkedData])

  useEffect(() => {
    onCheckedDataChange(checkedData)
  },[checkedData])

  const getTd = () => {
    const arr = [];
    headerCells.map(item => {
      arr.push(<th key={item}>{item}</th>);
    });

    console.log(arr);

    return arr;
  }
  const getDataToTd=(item) =>{
    const arr = [];
    dataProps.map(prop => {
      arr.push(<td key={prop}>{item[prop]}</td>);
    })
    console.log(arr);
    return arr;
  }

  const getOriginTrTD=(originData) => {
    let arr=[]
    originData.map(item => {
      arr.push(
        <tr key={item.id}>
        <td>
          <MyCheckbox
            checked={checkedData.some(data => data.id===item.id)}
            onChange={(e) => doSingleChange(e,item)}
          ></MyCheckbox>
        </td>
        {
          getDataToTd(item)
          // dataProps.map(prop => {
          //   <td key={prop}>{item[prop]}</td>
          // })
        }
        <td>
          <MyButton
            onClick={()=>removeItem(item.id)}
          >删除</MyButton>
        </td>
      </tr>
      )
    })
    return arr;
  }

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
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            {
              getTd()
            }
          </tr>
        </thead>
        <tbody>
          {
            getOriginTrTD(originData)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyCheckboxGroup
