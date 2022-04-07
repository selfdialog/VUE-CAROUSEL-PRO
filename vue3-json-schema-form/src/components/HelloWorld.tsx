import { defineComponent } from "vue";


const PropType={
  msg: String,
  age:{
    type: Number,
    required: true
  }
} as const //手动告诉ts这是个readonly


export default defineComponent({
  props: PropType,
  setup(props){
    return () => <div>{props.age}</div>
  }
});