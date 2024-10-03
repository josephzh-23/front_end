
/*
When you have a property that looks like the following this complicated, 
it's better to use useReducer here 

When you have case 1: you have sth with all these ifnromation

const [endDate, setEndDate ] = useState(null)
const [title, setTitle ] = useState('')
const [description, setDescription] = useState('')


const [products, setProduct ] = useState({
    title : "",
    desc: "",
    price: 0,
    category: "",

    images: {
        sm: "",
        md: "",
        lg: ""
    }
})
*/