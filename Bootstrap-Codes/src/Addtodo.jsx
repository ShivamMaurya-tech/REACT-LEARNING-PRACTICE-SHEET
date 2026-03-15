import styles from"./Addtodo.module.css"
function AddTodo() {

    return (


        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text"  className={styles.inputContainer} placeholder="Enter todo here" />
                </div>
                <div className="col-4">
                    <input type="date" className={styles.inputContainer}/>
                </div>
                <div className="col-1">  <button type="button" className="btn btn-success kg-Button">Add</button>
                </div>

            </div>
        </div>





    )
}
export default AddTodo;