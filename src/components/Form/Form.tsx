

const Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo"/>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default Form