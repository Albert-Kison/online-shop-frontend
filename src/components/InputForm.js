function InputForm(props) {
    if (props.type === 'textarea') {
        return (
            <div className="form-control">
                <label htmlFor={props.id}>{props.title}</label>
                <textarea rows="5" onChange={props.onChange} value={props.value} id={props.id} autoComplete="off" />
            </div>
        )
    }

    return (
        <div className="form-control">
        <label htmlFor={props.id}>{props.title}</label>
            <input type={props.type} onChange={props.onChange} value={props.value} id={props.id} autoComplete="off" step="0.01" />
        </div>
    )
}

export default InputForm;